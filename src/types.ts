export interface BlogPost {
  id: string;
  title: string;
  description: string;
  path: string;
  date: string;
  readingTime: string;
}

export interface MiniBlog {
  id: string;
  title: string;
  description: string;
  path: string;
  date: string;
  readingTime: string;
  tags: string[];
  type: 'thought' | 'code' | 'book-notes' | 'quick-tip';
}