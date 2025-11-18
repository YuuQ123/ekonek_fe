import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    phoneNumber: '',
    package: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenderChange = (gender: string) => {
    setFormData(prev => ({
      ...prev,
      gender: gender
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final registration
      console.log('Registration data:', formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Registration Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold mb-6">Daftar Akun Baru</h1>
            
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                {/* Step 1 */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 1 
                    ? 'bg-white text-orange-500 shadow-lg' 
                    : 'bg-orange-300 text-white'
                }`}>
                  1
                </div>
                
                {/* Connector Line */}
                <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-white' : 'bg-orange-300'
                }`}></div>
                
                {/* Step 2 */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 
                    ? 'bg-white text-orange-500 shadow-lg' 
                    : 'bg-orange-300 text-white'
                }`}>
                  2
                </div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleNext} className="space-y-6">
            {currentStep === 1 && (
              <>
                <h3 className="text-lg font-semibold mb-4">Informasi Akun</h3>
                
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">
                    Username *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Masukkan username"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Masukkan email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Masukkan password"
                    required
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Konfirmasi Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Konfirmasi password"
                    required
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h3 className="text-lg font-semibold mb-6">Informasi Akun</h3>
                
                {/* Full Name Field */}
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                {/* Birth Date Fields */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Tanggal Lahir *
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      name="birthDay"
                      value={formData.birthDay}
                      onChange={handleInputChange}
                      className="w-20 px-3 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-center"
                      placeholder="DD"
                      maxLength={2}
                      required
                    />
                    <span className="text-white text-lg font-medium">-</span>
                    <input
                      type="text"
                      name="birthMonth"
                      value={formData.birthMonth}
                      onChange={handleInputChange}
                      className="w-20 px-3 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-center"
                      placeholder="MM"
                      maxLength={2}
                      required
                    />
                    <span className="text-white text-lg font-medium">-</span>
                    <input
                      type="text"
                      name="birthYear"
                      value={formData.birthYear}
                      onChange={handleInputChange}
                      className="w-24 px-3 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-center"
                      placeholder="YYYY"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                {/* Gender Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Jenis Kelamin *
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleGenderChange('Laki-laki')}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                        formData.gender === 'Laki-laki'
                          ? 'bg-white text-gray-800 shadow-lg'
                          : 'bg-white text-gray-400 hover:text-gray-600 hover:shadow-md'
                      }`}
                    >
                      Laki - laki
                    </button>
                    <button
                      type="button"
                      onClick={() => handleGenderChange('Perempuan')}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                        formData.gender === 'Perempuan'
                          ? 'bg-white text-gray-800 shadow-lg'
                          : 'bg-white text-gray-400 hover:text-gray-600 hover:shadow-md'
                      }`}
                    >
                      Perempuan
                    </button>
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    placeholder="Masukkan nomor telepon"
                    required
                  />
                </div>

                {/* Package Selection */}
                <div className="mb-6">
                  <label htmlFor="package" className="block text-sm font-medium mb-2">
                    Pilih Paket *
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                    required
                  >
                    <option value="">Pilih paket internet</option>
                    <option value="Paket Basic - 10 Mbps">Paket Basic - 10 Mbps</option>
                    <option value="Paket Standard - 25 Mbps">Paket Standard - 25 Mbps</option>
                    <option value="Paket Premium - 50 Mbps">Paket Premium - 50 Mbps</option>
                    <option value="Paket Ultimate - 100 Mbps">Paket Ultimate - 100 Mbps</option>
                  </select>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-white text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Batal
                </button>
              )}
              
              <button
                type="submit"
                className={`${currentStep === 1 ? 'w-full' : 'flex-1'} bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
              >
                {currentStep === 1 ? 'Lanjut' : 'Selesai'}
              </button>
            </div>
          </form>

          {/* Back to Login */}
          <div className="text-center mt-6 pt-6 border-t border-white border-opacity-30">
            <p className="text-sm mb-4 text-white">
              Sudah punya akun?{' '}
              <a 
                href="/login" 
                className="text-white hover:text-orange-200 underline font-semibold transition-colors duration-200"
              >
                Masuk di sini
              </a>
            </p>
            
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-sm text-white font-medium transition-colors duration-200 flex items-center justify-start mx-auto bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md underline"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;