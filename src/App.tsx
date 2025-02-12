import React from 'react';
import { Newspaper, Moon, Sun } from 'lucide-react';
import { blogPosts } from './data/blogs';
import { BlogCard } from './components/BlogCard';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-tn-bg-primary to-tn-surface py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 relative">
          <button
            onClick={toggleTheme}
            className="absolute right-0 top-0 p-2 rounded-full hover:bg-tn-hover transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 text-tn-accent" />
            ) : (
              <Moon className="w-6 h-6 text-tn-accent" />
            )}
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-10 h-10 text-tn-accent" />
            <h1 className="text-2xl md:text-3xl font-bold text-tn-accent">
              Tales of My Life, Learnings and Thoughts
            </h1>
          </div>
          <p className="text-tn-text-secondary text-lg">
            Exploring ideas through words and code
          </p>
        </header>

        <main className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </main>

        <footer className="mt-16 pt-8 border-t border-tn-divider text-center text-tn-text-secondary">
          <p>
            <span>&copy; 2025 Soham Sarkar</span>
            <span className="mx-2">|</span>
            <a 
              href="https://sarkarsoham.com" 
              className="hover:text-tn-accent transition-colors"
            >
              sarkarsoham.com
            </a>
            <span className="mx-2">|</span>
            <strong>AI</strong>
            <span className="mx-2">|</span>
            <span>Systems</span>
            <span className="mx-2">|</span>
            <span>Research</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;