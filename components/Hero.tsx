
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-linkedin rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-linkedin rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-linkedin border border-blue-100 mb-6 animate-bounce-slow">
          <span className="text-xs font-bold uppercase tracking-wider">Join 500+ Active Partners</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto tracking-tight">
          Turn Your Old LinkedIn Account into <span className="text-linkedin">Passive Income</span> 💼💰
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          We rent LinkedIn accounts strictly for commercial use — placing adverts and building partnerships with experienced professionals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/233540834343" 
            className="w-full sm:w-auto bg-linkedin text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#006097] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            <span>Rent My Account Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://chat.whatsapp.com/L75V44DyOhS5NAzSxMx9zf" 
            className="w-full sm:w-auto bg-white text-slate-800 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            View Proof of Payment
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: "Safe & Secure", sub: "Verified Partners" },
            { label: "Weekly Payouts", sub: "Automated Systems" },
            { label: "Privacy First", sub: "Commercial Only" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group">
              <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:text-linkedin transition-colors">
                <svg className="w-5 h-5 text-linkedin" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-8 10z"/></svg>
                <span>{item.label}</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
