import React from 'react';
import { MiniBlog } from '../types';
import { Calendar, Clock, BookOpen, Code, Lightbulb, FileText } from 'lucide-react';

interface MiniBlogCardProps {
  miniBlog: MiniBlog;
}

const getTypeIcon = (type: MiniBlog['type']) => {
  switch (type) {
    case 'thought':
      return <Lightbulb className="w-4 h-4" />;
    case 'code':
      return <Code className="w-4 h-4" />;
    case 'book-notes':
      return <BookOpen className="w-4 h-4" />;
    case 'quick-tip':
      return <FileText className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const getTypeColor = (type: MiniBlog['type']) => {
  switch (type) {
    case 'thought':
      return 'text-yellow-400';
    case 'code':
      return 'text-green-400';
    case 'book-notes':
      return 'text-blue-400';
    case 'quick-tip':
      return 'text-purple-400';
    default:
      return 'text-gray-400';
  }
};

const getTypeBorder = (type: MiniBlog['type']) => {
  switch (type) {
    case 'thought':
      return 'border-yellow-400/20';
    case 'code':
      return 'border-green-400/20';
    case 'book-notes':
      return 'border-blue-400/20';
    case 'quick-tip':
      return 'border-purple-400/20';
    default:
      return 'border-gray-400/20';
  }
};

const getTypePrefix = (type: MiniBlog['type']) => {
  switch (type) {
    case 'thought':
      return 'idea';
    case 'code':
      return 'snippet';
    case 'book-notes':
      return 'notes';
    case 'quick-tip':
      return 'tip';
    default:
      return 'mini';
  }
};

export function MiniBlogCard({ miniBlog }: MiniBlogCardProps) {
  return (
    <a
      href={miniBlog.path}
      className={`
        block group cursor-pointer p-4 rounded-lg border 
        ${getTypeBorder(miniBlog.type)}
        bg-[var(--bg-secondary)] 
        hover:bg-[var(--bg-primary)] 
        transition-all duration-300 
        hover:shadow-lg 
        hover:scale-[1.02]
        border-[var(--divider)]
        hover:border-[var(--accent)]
        relative overflow-hidden
      `}
    >
      {/* Terminal-like header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--divider)]/30">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-50"></div>
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-50"></div>
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-50"></div>
        </div>
        <div className={`${getTypeColor(miniBlog.type)} flex items-center gap-1`}>
          {getTypeIcon(miniBlog.type)}
          <span className="text-xs font-mono">{getTypePrefix(miniBlog.type)}.md</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 font-mono text-sm">
            {miniBlog.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-xs mt-1 line-clamp-2 leading-relaxed">
            {miniBlog.description}
          </p>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] font-mono">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(miniBlog.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {miniBlog.readingTime}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {miniBlog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--divider)] font-mono"
            >
              #{tag}
            </span>
          ))}
          {miniBlog.tags.length > 3 && (
            <span className="px-2 py-1 text-xs rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--divider)] font-mono">
              +{miniBlog.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* ID indicator */}
      <div className="absolute top-2 right-2 text-[var(--text-secondary)]/20 font-mono text-xs">
        {miniBlog.id.replace('mini-', '')}
      </div>
    </a>
  );
} 