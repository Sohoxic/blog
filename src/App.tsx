import React from 'react';
import { Newspaper, Moon, Sun } from 'lucide-react';
import { blogPosts } from './data/blogs';
import { BlogCard } from './components/BlogCard';
import { EnhancedSearchWidget } from './components/EnhancedSearchWidget';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <header className="border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-[var(--accent)]" />
              <div>
                <h1 className="text-2xl font-bold">Sohoxic's Blog</h1>
                <p className="text-[var(--text-secondary)] text-sm">Thoughts on tech, life, and everything in between</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <EnhancedSearchWidget blogPosts={blogPosts} />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--surface)] hover:bg-[var(--hover)] transition-colors"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--divider)] bg-[var(--bg-secondary)] mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-[var(--text-secondary)]">
          <p>&copy; 2025 Sohoxic's Blog. Built with React and TypeScript.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">About</a>
            {' • '}
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Contact</a>
            {' • '}
            <a href="#" className="hover:text-[var(--accent)] transition-colors">RSS</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;