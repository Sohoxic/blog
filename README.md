# Sohoxic's Blog

A modern React blog application with enhanced search functionality.

## Features

### 🔍 **Enhanced Search System**
- **Dual Search Modes**: Basic (fast) and Advanced (comprehensive)
- **Smart Keyboard Shortcuts**: Press `Ctrl+K` to open search, `Escape` to close
- **Real-time Results**: Search updates as you type with intelligent debouncing
- **Visual Highlighting**: Matched terms are highlighted in results
- **Contextual Excerpts**: Advanced search shows relevant content snippets
- **Responsive Design**: Works beautifully on mobile and desktop

### 🎨 **Modern UI**
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Glassmorphism Effects**: Modern backdrop blur and transparency effects
- **Smooth Animations**: Polished transitions and micro-interactions
- **Professional Layout**: Clean, organized design with proper spacing

### ⚡ **Performance**
- **Fast Basic Search**: Instant results from metadata only
- **Smart Content Loading**: Advanced search loads content on-demand
- **Optimized Rendering**: Efficient React components with proper memoization
- **Responsive Grid**: Adaptive layout for different screen sizes

## Search Functionality

### Basic Search
- Searches through post titles and descriptions
- Instant results with no network requests
- Perfect for quick lookups
- Lightweight and fast

### Advanced Search
- Searches through full content of blog posts
- Fetches and parses HTML content
- Creates contextual excerpts around matches
- Shows content loading progress
- Caches content after first load

## Usage

### Opening Search
- **Keyboard**: Press `Ctrl+K` (or `Cmd+K` on Mac)
- **Mouse**: Click the search button in the header

### Search Modes
- **Default**: Basic search (fast, metadata only)
- **Advanced**: Click settings gear → "Switch to Advanced"

### Navigation
- **Results**: Click any result to open the blog post
- **Close**: Press `Escape` or click outside the modal

## Development

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure
```
src/
├── components/
│   ├── BlogCard.tsx              # Individual blog post card
│   ├── SearchWidget.tsx          # Basic search widget
│   └── EnhancedSearchWidget.tsx  # Advanced search modal
├── hooks/
│   ├── useSearch.ts              # Basic search functionality
│   ├── useAdvancedSearch.ts      # Advanced search with content
│   └── useTheme.ts               # Theme management
├── data/
│   └── blogs.ts                  # Blog post data
├── types.ts                      # TypeScript interfaces
└── index.css                     # Global styles and themes
```

### Adding New Blog Posts
Edit `src/data/blogs.ts` and add new entries to the `blogPosts` array:

```typescript
{
  id: 'unique-id',
  title: 'Your Post Title',
  description: 'Brief description of the post',
  path: '/path/to/your/post.html',
  date: '2025-02-11',
  readingTime: '5 min read',
}
```

### Customizing Search
- **Max Results**: Modify `maxResults` parameter in search hooks
- **Debounce Time**: Adjust timeout values in search hooks
- **Scoring**: Modify score weights in search functions
- **Styling**: Update CSS custom properties in `index.css`

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom Search Engine** - Built-in client-side search

## Browser Support

- Modern browsers with ES6+ support
- Fetch API support required for advanced search
- DOMParser API support required for content extraction

## Future Enhancements

- [ ] Search filters (date, reading time, etc.)
- [ ] Search history and suggestions
- [ ] Fuzzy search for typo tolerance
- [ ] Search analytics and popular terms
- [ ] Export search results
- [ ] Server-side search for larger datasets

## License

MIT License - feel free to use this code for your own projects!