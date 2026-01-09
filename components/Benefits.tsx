
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Place Commercials",
      desc: "We use high-authority accounts to place niche-specific professional advertisements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
      )
    },
    {
      title: "Professional Partnerships",
      desc: "Work alongside experienced professionals building B2B partnerships globally.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
      )
    },
    {
      title: "Safe & Secure",
      desc: "We value privacy and security. Our processes are strictly commercial and professional.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.731 11.731 0 003.315 8.321c1.134 5.708 5.146 8.481 5.303 8.587.157-.106 4.169-2.879 5.303-8.587a11.731 11.731 0 003.315-8.321z"/></svg>
      )
    },
    {
      title: "Earn Weekly",
      desc: "Get paid consistently for an asset that's currently sitting idle. Pure passive income.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-linkedin/20 text-linkedin rounded-full text-sm font-bold mb-6">WHY RENT WITH US?</div>
            <h2 className="text-4xl font-bold mb-6">Maximize Your Account's Professional Value</h2>
            <p className="text-slate-400 text-lg mb-8">Stop letting your old LinkedIn account gather dust. Partner with us and join hundreds of others earning passive income safely.</p>
            <div className="p-6 border-l-4 border-linkedin bg-white/5 rounded-r-xl italic text-slate-300">
              "Turn an unused asset into a consistent revenue stream while helping experts scale professional adverts."
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-linkedin rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
