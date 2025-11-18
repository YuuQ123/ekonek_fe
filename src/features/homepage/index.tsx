import React from 'react';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import HeroSection from './HeroSection';
import LayananSection from './LayananSection';
import PaketSection from './PaketSection';
import KeuntunganSection from './KeuntunganSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LayananSection />
        <PaketSection />
        <KeuntunganSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;