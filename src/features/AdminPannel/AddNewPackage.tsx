import React, { useState } from 'react';

const AddNewPackage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    price: '',
    devices: '',
    features: '',
    color: 'blue',
    status: 'active'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama paket wajib diisi';
    }
    if (!formData.speed.trim()) {
      newErrors.speed = 'Kecepatan internet wajib diisi';
    }
    if (!formData.price.trim()) {
      newErrors.price = 'Harga paket wajib diisi';
    }
    if (!formData.devices.trim()) {
      newErrors.devices = 'Jumlah perangkat wajib diisi';
    }
    if (!formData.features.trim()) {
      newErrors.features = 'Fitur paket wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle add package logic here
      console.log('New package data:', formData);
      setIsSubmitted(true);
    }
  };

  const handleBackToDashboard = () => {
    window.location.href = '/admin/dashboard';
  };

  const handleReset = () => {
    setFormData({
      name: '',
      speed: '',
      price: '',
      devices: '',
      features: '',
      color: 'blue',
      status: 'active'
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Success Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Paket Berhasil Ditambahkan!</h2>
            <p className="text-sm opacity-90 mb-8">
              Paket "{formData.name}" telah berhasil ditambahkan ke katalog.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleBackToDashboard}
                className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                Kembali ke Dashboard
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                Tambah Paket Lain
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 flex">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Tambah Paket Baru</h1>
              <p className="text-white/80 text-sm sm:text-base">Buat paket internet baru untuk ditambahkan ke katalog</p>
            </div>
            
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Dashboard
            </button>
          </div>

        {/* Form Container */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-4 sm:mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Package Name */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nama Paket *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  placeholder="Contoh: Paket Hemat"
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Speed */}
              <div>
                <label htmlFor="speed" className="block text-white font-medium mb-2">
                  Kecepatan Internet *
                </label>
                <input
                  type="text"
                  id="speed"
                  name="speed"
                  value={formData.speed}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  placeholder="Contoh: 25 Mbps"
                />
                {errors.speed && <p className="text-red-300 text-sm mt-1">{errors.speed}</p>}
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-white font-medium mb-2">
                  Harga per Bulan *
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  placeholder="Contoh: Rp 250.000"
                />
                {errors.price && <p className="text-red-300 text-sm mt-1">{errors.price}</p>}
              </div>

              {/* Devices */}
              <div>
                <label htmlFor="devices" className="block text-white font-medium mb-2">
                  Jumlah Perangkat *
                </label>
                <input
                  type="text"
                  id="devices"
                  name="devices"
                  value={formData.devices}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  placeholder="Contoh: 5 Perangkat"
                />
                {errors.devices && <p className="text-red-300 text-sm mt-1">{errors.devices}</p>}
              </div>

              {/* Color Theme */}
              <div>
                <label htmlFor="color" className="block text-white font-medium mb-2">
                  Warna Tema
                </label>
                <select
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                >
                  <option value="blue">Biru</option>
                  <option value="green">Hijau</option>
                  <option value="orange">Orange</option>
                  <option value="red">Merah</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-white font-medium mb-2">
                  Status Paket
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                >
                  <option value="active">Aktif</option>
                  <option value="inactive">Tidak Aktif</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div>
              <label htmlFor="features" className="block text-white font-medium mb-2">
                Fitur & Deskripsi *
              </label>
              <textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none"
                placeholder="Contoh: Streaming HD & Meeting, Cocok untuk keluarga kecil, Upload speed optimal"
              />
              {errors.features && <p className="text-red-300 text-sm mt-1">{errors.features}</p>}
            </div>

            {/* Preview Card */}
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Preview Paket</h3>
              <div className="bg-white rounded-xl border border-blue-200 p-6 shadow-lg max-w-sm">
                {/* Status */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-xs px-3 py-1 rounded-full font-medium ${
                    formData.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {formData.status}
                  </div>
                </div>

                {/* Speed Header */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-2">Speed Up To</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-2 h-16 bg-gray-200 rounded-full relative">
                      <div 
                        className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${
                          formData.color === 'blue' ? 'bg-blue-500' :
                          formData.color === 'green' ? 'bg-green-500' :
                          formData.color === 'orange' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ height: '60%' }}
                      />
                    </div>
                    <h4 className="text-3xl font-bold text-gray-800">
                      {formData.speed || '-- Mbps'}
                    </h4>
                    <div className="w-2 h-16 bg-gray-200 rounded-full relative">
                      <div 
                        className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${
                          formData.color === 'blue' ? 'bg-blue-500' :
                          formData.color === 'green' ? 'bg-green-500' :
                          formData.color === 'orange' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ height: '60%' }}
                      />
                    </div>
                  </div>
                </div>

                <h5 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {formData.name || 'Nama Paket'}
                </h5>

                <div className="space-y-2 mb-6">
                  <p className="text-gray-600 text-center">
                    Stabil untuk {formData.devices || '-- Perangkat'}
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    {formData.features || 'Deskripsi fitur paket'}
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg px-4 py-3 inline-block">
                    <span className="text-lg font-semibold text-gray-800">
                      {formData.price || 'Rp ---.---'}/Bulan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Simpan Paket
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-200"
              >
                Reset Form
              </button>
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-200"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPackage;
