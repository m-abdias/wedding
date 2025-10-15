import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showScrollTop) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 from-pink-600 to-orange-500 to-orange-600 text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-r"
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
