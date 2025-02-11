import React from 'react';
import { Newspaper } from 'lucide-react';
import { blogPosts } from './data/blogs';
import { BlogCard } from './components/BlogCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tn-bg-primary to-tn-surface py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
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
        <p>&copy; 2025 Soham Sarkar&nbsp;|  &nbsp;
                <a href="https://sarkarsoham.com">sarkarsoham.com</a>&nbsp; | &nbsp;
                <strong>AI</strong> &nbsp;| &nbsp;
                <span className="blue-text">Systems</span> &nbsp;| &nbsp;
                <span className="white-text">Research</span>
            </p>
        </footer>
      </div>
    </div>
  );
}

export default App;