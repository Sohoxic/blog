import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Format the date to be more readable
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <a 
      href={post.path} 
      className="block bg-[var(--bg-secondary)] rounded-xl border border-[var(--divider)] p-8 hover:shadow-lg transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 group cursor-pointer"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-[var(--accent)] transition-colors">
            {post.title}
          </h3>
        </div>
        
        <div>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {post.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </a>
  );
}