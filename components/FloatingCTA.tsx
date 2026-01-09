
import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-white/90 backdrop-blur shadow-[0_-10px_20px_rgba(0,0,0,0.1)] border-t border-slate-100">
      <a 
        href="https://wa.me/233540834343" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-linkedin text-white w-full py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-1.02 3.716 3.834-1.005c.82.476 1.83.743 2.929.743 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm-2.458 7.373c-.15.075-.3.15-.45.075s-.3-.225-.45-.375-.3-.375-.45-.525.075-.3.15-.45.075-.3.15-.45c.075-.15.225-.3.375-.45s.15-.3.3-.45c.075-.15.225-.3.3-.45s-.075-.375-.15-.525c-.075-.15-.225-.3-.3-.45s-.15-.3-.3-.45c-.15-.15-.3-.3-.45-.45s-.3-.15-.45 0c-.15.15-1.05 1.05-1.05 2.55s1.05 2.85 1.2 3.15c.15.3 2.1 3.15 5.1 4.5.75.3 1.35.45 1.8.6.75.15 1.35.15 1.8.15.6 0 1.8-.75 2.1-1.35.3-.6.3-1.05.15-1.35s-.3-.15-.6-.3z"/></svg>
        <span>Message Us on WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
