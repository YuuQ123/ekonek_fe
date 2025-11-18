import React, { useState } from 'react';

const UserTagihan: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tagihan');

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-semibold">Dashboard, User!</h1>
        <button 
          onClick={handleLogout}
          className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Logout
        </button>
      </div>

      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Notification Section */}
        <div className="p-4">
          <h2 className="text-gray-800 font-semibold mb-3">Notifikasi</h2>
          <div className="bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="bg-blue-500 w-3 h-3 rounded-full mt-1 mr-3 flex-shrink-0"></div>
              <div>
                <p className="text-white text-sm font-medium">
                  Tagihan Agustus 2025 akan tempo dalam 3 hari
                </p>
                <p className="text-white text-xs opacity-90 mt-1">2025-08-15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 mb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('tagihan')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'tagihan'
                  ? 'border-orange-500 text-orange-500 bg-orange-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tagihan & Pembayaran
            </button>
            <button
              onClick={() => setActiveTab('layanan')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'layanan'
                  ? 'border-orange-500 text-orange-500 bg-orange-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Layanan Aktif
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'support'
                  ? 'border-orange-500 text-orange-500 bg-orange-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Support
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'tagihan' && (
          <div className="px-4 space-y-6">
            {/* Tagihan Aktif */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-800 font-semibold mb-4">Tagihan Aktif</h3>
              <div className="bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-gray-800 font-semibold">Agustus 2025</h4>
                </div>
                <p className="text-gray-800 text-2xl font-bold mb-2">Rp 299,000</p>
                <p className="text-gray-600 text-sm">Jatuh tempo: 2025-08-28</p>
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-800 font-semibold mb-4">Metode Pembayaran</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Virtual Account
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  QRIS
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  e-Wallet
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Kartu Kredit
                </button>
              </div>
            </div>

            {/* Riwayat Pembayaran */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-800 font-semibold mb-4">Riwayat Pembayaran</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-medium">Juli 2025</p>
                  <p className="text-gray-600 text-sm">Rp 299,000</p>
                </div>
                <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Lunas
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'layanan' && (
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-800 font-semibold mb-4">Layanan Aktif</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-800">Paket Premium - 50 Mbps</h4>
                  <p className="text-gray-600 text-sm">Status: Aktif</p>
                  <p className="text-gray-600 text-sm">Berlaku hingga: 28 Agustus 2025</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-800 font-semibold mb-6">Support & Helpdesk</h3>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="text-gray-800 font-semibold mb-4">Buat Tiket Baru</h4>
                
                <form className="space-y-4">
                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="Masukkan subjek tiket"
                    />
                  </div>

                  {/* Description Field */}
                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Deskripsi
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                      placeholder="Jelaskan masalah atau pertanyaan Anda"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTagihan;