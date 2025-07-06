import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Settings, Zap, FileText } from 'lucide-react';
import { BlogPost } from '../types';
import { useSearch } from '../hooks/useSearch';
import { useAdvancedSearch } from '../hooks/useAdvancedSearch';

interface EnhancedSearchWidgetProps {
  blogPosts: BlogPost[];
}

type SearchMode = 'basic' | 'advanced';

export function EnhancedSearchWidget({ blogPosts }: EnhancedSearchWidgetProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<SearchMode>('basic');
  const [showSettings, setShowSettings] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Use both search hooks
  const basicSearch = useSearch(blogPosts, query);
  const advancedSearch = useAdvancedSearch(blogPosts, query);

  // Choose which search results to use based on mode
  const currentSearch = searchMode === 'advanced' ? advancedSearch : basicSearch;

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closeSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle clicks outside - improved version
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };

    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setShowSettings(false);
  };

  const handleResultClick = (post: BlogPost) => {
    window.open(post.path, '_blank');
    closeSearch();
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const toggleSearchMode = () => {
    setSearchMode(prev => prev === 'basic' ? 'advanced' : 'basic');
    setShowSettings(false);
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
        title="Search (Ctrl+K)"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm text-white/60">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
          <span>⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div 
            ref={modalRef}
            className="w-full max-w-2xl mx-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${searchMode === 'advanced' ? 'content and metadata' : 'titles and descriptions'}...`}
                  className="w-full pl-10 pr-10 py-3 bg-transparent border-none outline-none text-white placeholder-white/60 text-lg"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Settings Button */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Search Settings"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeSearch}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close Search (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {searchMode === 'basic' ? (
                        <Zap className="w-4 h-4 text-blue-400" />
                      ) : (
                        <FileText className="w-4 h-4 text-purple-400" />
                      )}
                      <span className="text-sm font-medium">
                        {searchMode === 'basic' ? 'Basic Search' : 'Advanced Search'}
                      </span>
                    </div>
                    <span className="text-xs text-white/60">
                      {searchMode === 'basic' 
                        ? 'Search titles and descriptions only'
                        : 'Search full content of posts'
                      }
                    </span>
                  </div>
                  <button
                    onClick={toggleSearchMode}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
                  >
                    Switch to {searchMode === 'basic' ? 'Advanced' : 'Basic'}
                  </button>
                </div>
                
                {searchMode === 'advanced' && (
                  <div className="mt-2 text-xs text-white/60">
                    Content loading progress: {Math.round(advancedSearch.contentLoadingProgress * 100)}%
                  </div>
                )}
              </div>
            )}

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {currentSearch.isSearching && (
                <div className="p-4 text-center text-white/60">
                  <div className="animate-spin w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full mx-auto mb-2"></div>
                  Searching...
                </div>
              )}

              {!currentSearch.isSearching && query.length >= 2 && !currentSearch.hasResults && (
                <div className="p-4 text-center text-white/60">
                  No results found for "{query}"
                </div>
              )}

              {!currentSearch.isSearching && query.length >= 2 && currentSearch.hasResults && (
                <div className="p-2">
                  <div className="text-xs text-white/60 px-2 py-1 mb-2">
                    {currentSearch.searchResults.length} result{currentSearch.searchResults.length !== 1 ? 's' : ''} found
                  </div>
                  {currentSearch.searchResults.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => handleResultClick(post)}
                      className="w-full text-left p-3 hover:bg-white/5 rounded-lg transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 
                            className="font-medium text-white group-hover:text-blue-300 transition-colors"
                            dangerouslySetInnerHTML={{ 
                              __html: 'highlightedTitle' in post ? post.highlightedTitle || post.title : post.title 
                            }}
                          />
                          <p 
                            className="text-sm text-white/70 mt-1 line-clamp-2"
                            dangerouslySetInnerHTML={{ 
                              __html: 'highlightedDescription' in post ? post.highlightedDescription || post.description : post.description 
                            }}
                          />
                          {'highlightedContent' in post && post.highlightedContent && (
                            <p 
                              className="text-xs text-white/60 mt-2 line-clamp-2 italic"
                              dangerouslySetInnerHTML={{ __html: post.highlightedContent }}
                            />
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1 text-xs text-white/50">
                          <span>{post.readingTime}</span>
                          <span>{post.date}</span>
                          {'score' in post && (
                            <span className="bg-white/10 px-2 py-1 rounded text-xs">
                              {post.score}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {query.length < 2 && (
                <div className="p-4 text-center text-white/60">
                  <div className="mb-2">Start typing to search...</div>
                  <div className="text-xs text-white/40 space-y-1">
                    <div>Use <kbd className="px-2 py-1 bg-white/10 rounded">Ctrl+K</kbd> to open search</div>
                    <div>Press <kbd className="px-2 py-1 bg-white/10 rounded">Escape</kbd> or click outside to close</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 