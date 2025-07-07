import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowLeft, Github, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { BlogCard } from './BlogCard';
import { EnhancedSearchWidget } from './EnhancedSearchWidget';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <header className="border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-primary)] border border-[var(--divider)] hover:border-[var(--accent)]"
                title="Back to Start"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Start Here</span>
              </Link>
              <div className="flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-[var(--accent)]" />
                <div>
                  <h1 className="text-2xl font-bold">The Sohoxic Tales</h1>
                  <p className="text-[var(--text-secondary)] text-sm">Thoughts on tech, life, and everything in between</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <EnhancedSearchWidget blogPosts={blogPosts} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="mt-16 pt-8 border-t border-[var(--divider)] text-center text-[var(--text-secondary)]">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="text-sm">
            <span>&copy; 2025 Soham Sarkar</span>
            <span className="mx-2">|</span>
            <strong className="text-red-400">AI</strong>
            <span className="mx-2">|</span>
            <span>Systems</span>
            <span className="mx-2">|</span>
            <span>Research</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sohoxic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/sohoxic_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarkar-soham/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 