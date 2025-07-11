// Lightweight search widget for embedding in any page
class SearchWidget {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            placeholder: 'Search...',
            maxResults: 5,
            showExcerpts: true,
            ...options
        };
        
        this.searchIndex = [];
        this.isLoaded = false;
        
        this.init();
    }

    async init() {
        if (!this.container) {
            console.error('Search widget container not found');
            return;
        }

        this.createWidget();
        await this.loadSearchIndex();
    }

    createWidget() {
        this.container.innerHTML = `
            <div class="search-widget">
                <div class="search-widget-input-container">
                    <input 
                        type="text" 
                        class="search-widget-input" 
                        placeholder="${this.options.placeholder}"
                        autocomplete="off"
                    >
                    <div class="search-widget-results"></div>
                </div>
            </div>
        `;

        // Add styles
        this.addStyles();

        // Add event listeners
        const input = this.container.querySelector('.search-widget-input');
        const results = this.container.querySelector('.search-widget-results');

        let searchTimeout;
        input.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();

            if (query.length < 2) {
                results.style.display = 'none';
                return;
            }

            searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300);
        });

        // Close results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target)) {
                results.style.display = 'none';
            }
        });
    }

    addStyles() {
        if (document.getElementById('search-widget-styles')) return;

        const styles = `
            <style id="search-widget-styles">
                .search-widget {
                    position: relative;
                    max-width: 400px;
                }
                
                .search-widget-input {
                    width: 100%;
                    padding: 8px 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                    box-sizing: border-box;
                }
                
                .search-widget-input:focus {
                    outline: none;
                    border-color: #0066cc;
                }
                
                .search-widget-results {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    max-height: 300px;
                    overflow-y: auto;
                    z-index: 1000;
                    display: none;
                }
                
                .search-widget-result {
                    padding: 8px 12px;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                }
                
                .search-widget-result:hover {
                    background-color: #f5f5f5;
                }
                
                .search-widget-result:last-child {
                    border-bottom: none;
                }
                
                .search-widget-result-title {
                    font-weight: 500;
                    color: #0066cc;
                    margin-bottom: 4px;
                }
                
                .search-widget-result-excerpt {
                    font-size: 12px;
                    color: #666;
                    line-height: 1.4;
                }
                
                .search-widget-no-results {
                    padding: 12px;
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    async loadSearchIndex() {
        try {
            const response = await fetch('/search-index.json');
            this.searchIndex = await response.json();
            this.isLoaded = true;
        } catch (error) {
            console.error('Failed to load search index:', error);
        }
    }

    performSearch(query) {
        if (!this.isLoaded) return;

        const results = this.search(query, this.options.maxResults);
        this.displayResults(results);
    }

    search(query, maxResults = 5) {
        const searchTerms = query.toLowerCase().split(/\s+/);
        const results = [];

        for (const item of this.searchIndex) {
            const score = this.calculateScore(item, searchTerms);
            if (score > 0) {
                results.push({
                    ...item,
                    score: score
                });
            }
        }

        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, maxResults);
    }

    calculateScore(item, searchTerms) {
        let score = 0;
        const title = item.title.toLowerCase();
        const content = item.content.toLowerCase();

        for (const term of searchTerms) {
            if (title.includes(term)) {
                score += title === term ? 100 : 50;
            }
            if (content.includes(term)) {
                score += 10;
            }
        }

        return score;
    }

    displayResults(results) {
        const resultsContainer = this.container.querySelector('.search-widget-results');
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-widget-no-results">No results found</div>';
        } else {
            const resultsHTML = results.map(result => `
                <div class="search-widget-result" onclick="window.location.href='${result.url}'">
                    <div class="search-widget-result-title">${result.title}</div>
                    ${this.options.showExcerpts ? `<div class="search-widget-result-excerpt">${result.excerpt}</div>` : ''}
                </div>
            `).join('');
            
            resultsContainer.innerHTML = resultsHTML;
        }
        
        resultsContainer.style.display = 'block';
    }
}

// Auto-initialize search widgets
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any element with class 'search-widget-container'
    const containers = document.querySelectorAll('.search-widget-container');
    containers.forEach((container, index) => {
        if (!container.id) {
            container.id = `search-widget-${index}`;
        }
        new SearchWidget(container.id);
    });
}); 