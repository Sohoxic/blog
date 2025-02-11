import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Format the date to be more readable
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <a
      href={post.path}
      className="block bg-tn-surface p-8 rounded-2xl border border-tn-divider hover:border-tn-accent transition-all duration-300 group"
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-tn-text-primary group-hover:text-tn-accent transition-colors">
          {post.title}
        </h2>
        <p className="text-tn-text-secondary text-lg">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-tn-text-secondary">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-tn-accent group-hover:gap-3 transition-all">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};