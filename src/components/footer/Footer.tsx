import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full">
      {/* Top Section - Orange-Brown Background */}
      <div className="bg-orange-600 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Left Column - Logo and Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src="/images/ekonek_logo.png" 
                  alt="EKONEK" 
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  EKONEK
                </span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-white text-base sm:text-lg font-bold">
                  PT. Emilima Koneksi Nusantara
                </h3>
                <p className="text-white text-xs sm:text-sm">
                  Fast and Reliable Internet for Your Home and Business Needs
                </p>
              </div>
            </div>

            {/* Middle Column - Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2">Whatsapp</h4>
                <p className="text-white text-sm sm:text-lg font-bold">085270724905</p>
              </div>
              <div>
                <h4 className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2">Email</h4>
                <a 
                  href="mailto:ekoneknusantara@gmail.com"
                  className="text-white text-xs sm:text-sm underline hover:text-orange-200 transition-colors duration-200 break-all"
                >
                  ekoneknusantara@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column - Social Media and Address */}
            <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
              <div>
                <h4 className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2">Instagram</h4>
                <p className="text-white text-xs sm:text-sm">@ekonek28</p>
              </div>
              <div>
                <h4 className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2">Alamat Kantor Pelayanan</h4>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  Jl. Tarumajaya, Harapan Mulya Regency, Ruko Blok BG-2 No. 8<br />
                  Desa Setia Mulya, Kec. Tarumajaya<br />
                  Kab. Bekasi - Jawa Barat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Blue Background */}
      <div className="bg-blue-600 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white text-xs sm:text-sm">
              Copyright © 2024 PT. Emilima Koneksi Nusantara
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
