
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-32 md:pb-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-linkedin rounded flex items-center justify-center text-white font-bold text-xl">in</div>
              <span className="text-xl font-bold tracking-tight">LinkRent</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering LinkedIn users to monetize their professional presence through secure, commercial partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#requirements" className="hover:text-linkedin transition-colors">Requirements</a></li>
              <li><a href="#benefits" className="hover:text-linkedin transition-colors">Benefits</a></li>
              <li><a href="#faq" className="hover:text-linkedin transition-colors">FAQ</a></li>
              <li><a href="https://chat.whatsapp.com/L75V44DyOhS5NAzSxMx9zf" className="hover:text-linkedin transition-colors">Proof Group</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-linkedin" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +233 540834343
              </li>
              <li>Serious Inquiries Only</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} LinkRent. All rights reserved. Strictly for commercial use.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
