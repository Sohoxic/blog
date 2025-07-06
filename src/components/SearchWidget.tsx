import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { BlogPost } from '../types';
import { useSearch } from '../hooks/useSearch';

interface SearchWidgetProps {
  blogPosts: BlogPost[];
  onPostSelect?: (post: BlogPost) => void;
  className?: string;
}

export function SearchWidget({ blogPosts, onPostSelect, className = '' }: SearchWidgetProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { searchResults, isSearching, hasResults } = useSearch(blogPosts, query, 5);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
      
      // Focus search on Ctrl/Cmd + K
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length >= 2);
  };

  const handlePostClick = (post: BlogPost) => {
    setIsOpen(false);
    setQuery('');
    if (onPostSelect) {
      onPostSelect(post);
    } else {
      // Default behavior: navigate to post
      window.open(post.path, '_blank');
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-tn-text-secondary" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search posts... (⌘K)"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-tn-surface border border-tn-divider rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-tn-accent focus:border-transparent
                   placeholder-tn-text-secondary text-tn-text-primary"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tn-text-secondary hover:text-tn-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-tn-surface border border-tn-divider rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-5 h-5 animate-spin text-tn-accent" />
              <span className="ml-2 text-tn-text-secondary">Searching...</span>
            </div>
          ) : hasResults ? (
            <>
              <div className="px-4 py-2 border-b border-tn-divider bg-tn-bg-secondary">
                <p className="text-sm text-tn-text-secondary">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
                </p>
              </div>
              <div className="py-2">
                {searchResults.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="w-full px-4 py-3 text-left hover:bg-tn-hover transition-colors focus:outline-none focus:bg-tn-hover"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 
                          className="font-medium text-tn-text-primary mb-1"
                          dangerouslySetInnerHTML={{ 
                            __html: post.highlightedTitle || post.title 
                          }}
                        />
                        <p 
                          className="text-sm text-tn-text-secondary line-clamp-2"
                          dangerouslySetInnerHTML={{ 
                            __html: post.highlightedDescription || post.description 
                          }}
                        />
                        <div className="flex items-center gap-2 mt-2 text-xs text-tn-text-secondary">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : query.length >= 2 ? (
            <div className="px-4 py-6 text-center text-tn-text-secondary">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords</p>
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-tn-text-secondary">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Type at least 2 characters to search</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 