import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-2 xs:p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mx-auto text-center">

        <div className="flex justify-center items-center">
          <img 
            src="/images/404.png" 
            alt="404 Not Found" 
            className="w-full h-auto
              xs:max-w-xs
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-xl
              2xl:max-w-2xl
              mx-auto"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <button
            onClick={handleGoHome}
            className="bg-black text-white 
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3
              text-sm sm:text-base
              rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200
              w-full sm:w-auto"
          >
            Kembali ke Home
          </button>
          <button
            onClick={handleGoBack}
            className="bg-white border-2 border-black text-black 
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3
              text-sm sm:text-base
              rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200
              w-full sm:w-auto"
          >
            Kembali Sebelumnya
          </button>
        </div>

        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, #fef3c7 25%, transparent 25%),
              linear-gradient(-45deg, #fef3c7 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #fef3c7 75%),
              linear-gradient(-45deg, transparent 75%, #fef3c7 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
