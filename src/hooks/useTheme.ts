import { useEffect } from 'react';

export function useTheme() {
  const theme = 'dark';

  useEffect(() => {
    // Always set data-theme attribute to dark
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return { theme };
}