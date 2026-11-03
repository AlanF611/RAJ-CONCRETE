import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo } from '@/data/site';

// Updates document title + meta description per route.
export default function Seo() {
  const { pathname } = useLocation();
  const meta = seo[pathname] ?? seo['/'];

  useEffect(() => {
    document.title = meta.title;
    const existing = document.querySelector('meta[name="description"]');
    if (existing) {
      existing.setAttribute('content', meta.description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = meta.description;
      document.head.appendChild(m);
    }
  }, [meta.title, meta.description]);

  return null;
}
