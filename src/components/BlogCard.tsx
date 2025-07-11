import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, FileText } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Format the date to be more readable
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <a 
      href={post.path} 
      className="block bg-[var(--bg-secondary)] rounded-xl border border-[var(--divider)] p-6 hover:shadow-lg transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 group cursor-pointer relative overflow-hidden"
    >
      {/* Terminal-like header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--divider)]/50">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
        </div>
        <FileText className="w-3 h-3 text-[var(--text-secondary)]" />
        <span className="text-xs font-mono text-[var(--text-secondary)]">article.md</span>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold leading-tight group-hover:text-[var(--accent)] transition-colors font-mono">
            {post.title}
          </h3>
        </div>
        
        <div>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {post.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] font-mono">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </span>
        </div>
      </div>

      {/* Subtle code-like decoration */}
      <div className="absolute top-2 right-2 text-[var(--text-secondary)]/20 font-mono text-xs">
        {post.id.padStart(3, '0')}
      </div>
    </a>
  );
}