import React from 'react';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Ekonek!
          </h1>
          <p className="text-gray-600">
            Homepage Ekonek sudah berhasil di-setup
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;