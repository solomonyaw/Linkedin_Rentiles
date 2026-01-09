
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is this safe for my LinkedIn account?",
      a: "Yes. We strictly use accounts for commercial advertising and professional networking. We do not engage in spam or prohibited activities. Your personal data remains protected."
    },
    {
      q: "What are the exact requirements?",
      a: "Your account must be at least 2 years old and have a minimum of 300 professional connections. This ensures the account has the necessary authority for commercial use."
    },
    {
      q: "How often do I get paid?",
      a: "Payments are typically made on a recurring weekly basis. Full details on payment structure are provided during our initial WhatsApp consultation."
    },
    {
      q: "Do I still have access to my account?",
      a: "Yes, you maintain primary ownership. We simply utilize specific features for our commercial activities in a non-intrusive way."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-3">
                  <span className="text-linkedin text-xl">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
