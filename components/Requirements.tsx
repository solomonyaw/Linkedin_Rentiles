
import React from 'react';

const Requirements: React.FC = () => {
  const requirements = [
    {
      title: "Account Age",
      value: "2+ Years Old",
      desc: "Your account must be established for at least 24 months to ensure platform trust.",
      icon: "📅"
    },
    {
      title: "Connections",
      value: "300+ Active",
      desc: "A minimum of 300 professional connections is required for our commercial campaigns.",
      icon: "👥"
    }
  ];

  return (
    <section id="requirements" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Do You Qualify?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Check these requirements before reaching out to ensure a fast onboarding process.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((req, idx) => (
            <div key={idx} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-linkedin/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-6">{req.icon}</div>
              <h3 className="text-sm font-bold text-linkedin uppercase tracking-widest mb-2">{req.title}</h3>
              <div className="text-2xl font-bold text-slate-900 mb-4">{req.value}</div>
              <p className="text-slate-600 leading-relaxed">{req.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
