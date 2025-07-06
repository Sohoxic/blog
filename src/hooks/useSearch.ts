import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '../types';

interface SearchResult extends BlogPost {
  score: number;
  highlightedTitle?: string;
  highlightedDescription?: string;
}

export function useSearch(blogPosts: BlogPost[], query: string, maxResults: number = 10) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchEngine = useMemo(() => {
    const calculateScore = (post: BlogPost, searchTerms: string[]): number => {
      let score = 0;
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();

      for (const term of searchTerms) {
        // Title matches get highest score
        if (title.includes(term)) {
          score += title === term ? 100 : 50;
        }

        // Description matches get lower score
        if (description.includes(term)) {
          score += 10;
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

    const escapeRegExp = (string: string): string => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const search = (searchQuery: string): SearchResult[] => {
      if (!searchQuery.trim()) return [];

      const searchTerms = searchQuery.toLowerCase().split(/\s+/);
      const results: SearchResult[] = [];

      for (const post of blogPosts) {
        const score = calculateScore(post, searchTerms);
        if (score > 0) {
          results.push({
            ...post,
            score,
            highlightedTitle: highlightText(post.title, searchTerms),
            highlightedDescription: highlightText(post.description, searchTerms)
          });
        }
      }

      return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
    };

    return { search };
  }, [blogPosts, maxResults]);

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
      }, 200);

      return () => clearTimeout(timeoutId);
    };

    performSearch();
  }, [query, searchEngine]);

  return {
    searchResults,
    isSearching,
    hasResults: searchResults.length > 0
  };
} 