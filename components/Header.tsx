
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-linkedin rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            in
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:inline">
            LinkRent<span className="text-linkedin">.com</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#requirements" className="hover:text-linkedin transition-colors">Requirements</a>
          <a href="#benefits" className="hover:text-linkedin transition-colors">Benefits</a>
          <a href="#faq" className="hover:text-linkedin transition-colors">FAQ</a>
        </nav>

        <a 
          href="https://wa.me/233540834343" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-linkedin hover:bg-[#006097] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
