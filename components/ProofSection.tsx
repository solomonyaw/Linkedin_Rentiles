
import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linkedin/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Don't Just Take Our Word For It.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join our private WhatsApp group to see real-time payment proofs, community feedback, and successful partnerships. We believe in 100% transparency.
              </p>
              <a 
                href="https://chat.whatsapp.com/L75V44DyOhS5NAzSxMx9zf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1ebd5e] transition-all shadow-lg hover:shadow-[#25D366]/40"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.589.945 3.532 1.443 5.512 1.444 5.679 0 10.297-4.617 10.299-10.296.001-2.752-1.071-5.339-3.018-7.288-1.948-1.948-4.534-3.02-7.285-3.021-5.679 0-10.296 4.619-10.298 10.297-.001 1.815.474 3.586 1.376 5.155l-1.01 3.691 3.774-.99zm11.332-6.502c-.301-.15-1.782-.88-2.056-.98-.275-.1-.475-.15-.675.15s-.775.98-.95 1.18-.35.225-.65.075c-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.773-1.665-2.074s-.019-.462.13-.611c.135-.135.3-.35.45-.525s.2-.3.3-.5.05-.375-.025-.525-.675-1.625-.925-2.225c-.244-.582-.491-.504-.675-.514-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.125 4.53.715.309 1.274.494 1.708.632.719.228 1.373.196 1.89.119.578-.085 1.782-.728 2.032-1.429s.25-1.301.175-1.429c-.075-.125-.275-.2-.575-.35z"/></svg>
                <span>Join Proof Group</span>
              </a>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-inner border-8 border-slate-50">
                {/* Mock Phone Visual */}
                <div className="absolute inset-0 p-4">
                  <div className="h-full w-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#075e54] p-3 text-white text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                        <span>Payment Proofs 💸</span>
                      </div>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                         <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-grow p-3 bg-[#e5ddd5] flex flex-col gap-3">
                      <div className="bg-white p-2 rounded-lg text-[10px] w-2/3 shadow-sm">
                        "Just received my weekly payment for renting my account! Thanks guys!"
                      </div>
                      <div className="bg-[#dcf8c6] p-2 rounded-lg text-[10px] w-2/3 self-end shadow-sm">
                        "Proof sent! Check your wallets everyone. 🚀"
                      </div>
                      <div className="w-full h-24 bg-slate-200 rounded-lg flex items-center justify-center text-[10px] text-slate-400 font-bold border-2 border-dashed border-slate-300">
                        IMAGE: TRANSFER_RECEIPT.PNG
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
