
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Requirements from './components/Requirements';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ProofSection from './components/ProofSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Requirements />
        <HowItWorks />
        <Benefits />
        <ProofSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
