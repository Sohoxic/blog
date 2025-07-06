import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '../types';

interface SearchResult extends BlogPost {
  score: number;
  highlightedTitle?: string;
  highlightedDescription?: string;
  highlightedContent?: string;
  excerpt?: string;
}

interface BlogPostWithContent extends BlogPost {
  content?: string;
  isContentLoaded?: boolean;
}

export function useAdvancedSearch(blogPosts: BlogPost[], query: string, maxResults: number = 10) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [postsWithContent, setPostsWithContent] = useState<BlogPostWithContent[]>(blogPosts);

  // Load content for posts when needed
  const loadPostContent = async (post: BlogPost): Promise<string> => {
    try {
      // Check if it's a relative path or needs to be resolved
      const url = post.path.startsWith('http') ? post.path : `${window.location.origin}/${post.path}`;
      const response = await fetch(url);
      const html = await response.text();
      
      // Extract text content from HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Remove script and style elements
      const scripts = doc.querySelectorAll('script, style');
      scripts.forEach(el => el.remove());
      
      // Get text content
      const textContent = doc.body?.textContent || doc.textContent || '';
      return textContent.replace(/\s+/g, ' ').trim();
    } catch (error) {
      console.warn(`Failed to load content for post ${post.id}:`, error);
      return '';
    }
  };

  const searchEngine = useMemo(() => {
    const calculateScore = (post: BlogPostWithContent, searchTerms: string[]): number => {
      let score = 0;
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      const content = post.content?.toLowerCase() || '';

      for (const term of searchTerms) {
        // Title matches get highest score
        if (title.includes(term)) {
          score += title === term ? 100 : 50;
        }

        // Description matches get medium score
        if (description.includes(term)) {
          score += 20;
        }

        // Content matches get lower score
        if (content.includes(term)) {
          score += 5;
        }
      }

      return score;
    };

    const highlightText = (text: string, searchTerms: string[]): string => {
      if (!text) return '';
      
      let highlightedText = text;
      
      for (const term of searchTerms) {
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
      }
      
      return highlightedText;
    };

    const createExcerpt = (content: string, searchTerms: string[], maxLength: number = 200): string => {
      if (!content) return '';
      
      // Find the first occurrence of any search term
      const lowerContent = content.toLowerCase();
      let startIndex = 0;
      
      for (const term of searchTerms) {
        const index = lowerContent.indexOf(term.toLowerCase());
        if (index !== -1) {
          // Start excerpt a bit before the match
          startIndex = Math.max(0, index - 50);
          break;
        }
      }
      
      // Create excerpt
      let excerpt = content.substring(startIndex, startIndex + maxLength);
      
      // Try to end at a word boundary
      const lastSpace = excerpt.lastIndexOf(' ');
      if (lastSpace > maxLength * 0.8) {
        excerpt = excerpt.substring(0, lastSpace);
      }
      
      return (startIndex > 0 ? '...' : '') + excerpt + (startIndex + maxLength < content.length ? '...' : '');
    };

    const escapeRegExp = (string: string): string => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const search = (searchQuery: string): SearchResult[] => {
      if (!searchQuery.trim()) return [];

      const searchTerms = searchQuery.toLowerCase().split(/\s+/);
      const results: SearchResult[] = [];

      for (const post of postsWithContent) {
        const score = calculateScore(post, searchTerms);
        if (score > 0) {
          const excerpt = post.content ? createExcerpt(post.content, searchTerms) : post.description;
          
          results.push({
            ...post,
            score,
            highlightedTitle: highlightText(post.title, searchTerms),
            highlightedDescription: highlightText(post.description, searchTerms),
            highlightedContent: post.content ? highlightText(excerpt, searchTerms) : undefined,
            excerpt: excerpt
          });
        }
      }

      return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
    };

    return { search };
  }, [postsWithContent, maxResults]);

  // Load content for posts that don't have it yet
  useEffect(() => {
    const loadMissingContent = async () => {
      const postsNeedingContent = postsWithContent.filter(post => !post.isContentLoaded);
      
      if (postsNeedingContent.length === 0) return;

      const updatedPosts = await Promise.all(
        postsWithContent.map(async (post) => {
          if (post.isContentLoaded) return post;
          
          const content = await loadPostContent(post);
          return {
            ...post,
            content,
            isContentLoaded: true
          };
        })
      );

      setPostsWithContent(updatedPosts);
    };

    // Only load content when user starts searching
    if (query.length >= 2) {
      loadMissingContent();
    }
  }, [query, postsWithContent]);

  useEffect(() => {
    const performSearch = async () => {
      if (query.length < 2) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      
      // Add small delay to simulate search and debounce
      const timeoutId = setTimeout(() => {
        const results = searchEngine.search(query);
        setSearchResults(results);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    };

    performSearch();
  }, [query, searchEngine]);

  return {
    searchResults,
    isSearching,
    hasResults: searchResults.length > 0,
    contentLoadingProgress: postsWithContent.filter(p => p.isContentLoaded).length / postsWithContent.length
  };
} 