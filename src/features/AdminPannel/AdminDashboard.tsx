import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  const [selectedCatalogue, setSelectedCatalogue] = useState<number | null>(null);
  const [slides, setSlides] = useState([
    { id: 1, src: '/images/wifi.png', alt: 'Slide 1' },
    { id: 2, src: '/images/wifi.png', alt: 'Slide 2' },
    { id: 3, src: '/images/404.png', alt: 'Slide 3' }
  ]);
  const [mainSlide, setMainSlide] = useState('/images/wifi.png');
  const [currentLogo, setCurrentLogo] = useState('/images/ekonek_logo.png');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load logo from localStorage on mount
  useEffect(() => {
    const savedLogo = localStorage.getItem('currentLogo');
    if (savedLogo) {
      setCurrentLogo(savedLogo);
    }
  }, []);

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = '/admin';
  };

  const handleAddCatalogue = () => {
    // Redirect to add new package page
    window.location.href = '/admin/add-package';
  };

  const handleDeleteCatalogue = () => {
    if (selectedCatalogue !== null) {
      console.log('Delete catalogue:', selectedCatalogue);
      setSelectedCatalogue(null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, targetType: 'main' | 'slide' | 'logo') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (targetType === 'main') {
          setMainSlide(result);
        } else if (targetType === 'logo') {
          setCurrentLogo(result);
          // Save to localStorage for navbar
          localStorage.setItem('currentLogo', result);
          // Trigger event to notify navbar
          window.dispatchEvent(new Event('logoChanged'));
        } else {
          const newSlide = {
            id: slides.length + 1,
            src: result,
            alt: `Slide ${slides.length + 1}`
          };
          setSlides([...slides, newSlide]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteSlide = (slideId: number) => {
    setSlides(slides.filter(slide => slide.id !== slideId));
  };

  const handleSetMainSlide = (slideSrc: string) => {
    setMainSlide(slideSrc);
  };

  const catalogues = [
    {
      id: 1,
      name: "Paket A",
      speed: "10 Mbps",
      price: "Rp 150.000",
      status: "active",
      color: "blue"
    },
    {
      id: 2,
      name: "Paket B", 
      speed: "25 Mbps",
      price: "Rp 250.000",
      status: "active",
      color: "green"
    },
    {
      id: 3,
      name: "Paket C",
      speed: "50 Mbps", 
      price: "Rp 400.000",
      status: "active",
      color: "orange"
    },
    {
      id: 4,
      name: "Paket D",
      speed: "100 Mbps",
      price: "Rp 650.000", 
      status: "inactive",
      color: "red"
    }
  ];

  const stats = [
    { title: "Total Users", value: "1,234", icon: "users" },
    { title: "Active Connections", value: "987", icon: "wifi" },
    { title: "Monthly Revenue", value: "Rp 45M", icon: "money" },
    { title: "Support Tickets", value: "23", icon: "support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Hello, Admin!</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    {stat.icon === 'users' && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    )}
                    {stat.icon === 'wifi' && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    )}
                    {stat.icon === 'money' && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    )}
                    {stat.icon === 'support' && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">{stat.title}</h3>
                <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Management Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Logo Management</h2>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Logo Display */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Current Logo</h3>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <img 
                      src={currentLogo} 
                      alt="Current Logo" 
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600">Homepage Logo</p>
                </div>
              </div>
              
              {/* Upload New Logo */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Upload New Logo</h3>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'logo')}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catalogues Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Catalogues</h2>
          
          {/* Catalogue Cards */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {catalogues.map((catalogue) => (
                <div
                  key={catalogue.id}
                  onClick={() => setSelectedCatalogue(catalogue.id)}
                  className={`bg-white rounded-lg sm:rounded-xl border border-blue-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedCatalogue === catalogue.id ? 'ring-2 ring-blue-400 transform scale-105' : ''
                  }`}
                >
                  {/* Status Indicator */}
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className={`text-xs px-2 sm:px-3 py-1 rounded-full font-medium ${
                      catalogue.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {catalogue.status}
                    </div>
                  </div>

                  {/* Speed Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">Speed Up To</p>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                      {/* Left Bar */}
                      <div className="w-1.5 sm:w-2 h-12 sm:h-16 bg-gray-200 rounded-full relative">
                        <div 
                          className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${
                            catalogue.color === 'blue' ? 'bg-blue-500' :
                            catalogue.color === 'green' ? 'bg-green-500' :
                            catalogue.color === 'orange' ? 'bg-orange-500' :
                            'bg-red-500'
                          }`}
                          style={{ height: `${catalogue.id * 20 + 20}%` }}
                        />
                      </div>
                      
                      {/* Speed Text */}
                      <h4 className="text-xl sm:text-3xl font-bold text-gray-800">
                        {catalogue.speed}
                      </h4>
                      
                      {/* Right Bar */}
                      <div className="w-1.5 sm:w-2 h-12 sm:h-16 bg-gray-200 rounded-full relative">
                        <div 
                          className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${
                            catalogue.color === 'blue' ? 'bg-blue-500' :
                            catalogue.color === 'green' ? 'bg-green-500' :
                            catalogue.color === 'orange' ? 'bg-orange-500' :
                            'bg-red-500'
                          }`}
                          style={{ height: `${catalogue.id * 20 + 20}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Package Name */}
                  <h5 className="text-sm sm:text-lg font-bold text-gray-800 text-center mb-2 sm:mb-4">
                    {catalogue.name}
                  </h5>

                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-6">
                    <p className="text-xs sm:text-sm text-gray-600 text-center">
                      Stabil untuk {catalogue.id * 2 + 1} Perangkat
                    </p>
                    <p className="text-xs text-gray-600 text-center">
                      {catalogue.id === 1 ? 'Streaming HD & Browsing' :
                       catalogue.id === 2 ? 'Streaming HD & Meeting' :
                       catalogue.id === 3 ? 'Ultra HD & Gaming' :
                       'Untuk Aktivitas Berat'}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 inline-block">
                      <span className="text-sm sm:text-lg font-semibold text-gray-800">
                        {catalogue.price}/Bulan
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleAddCatalogue}
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Add
              </button>
              <button
                onClick={handleDeleteCatalogue}
                disabled={selectedCatalogue === null}
                className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Management Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Kelola Slideshow Homepage</h2>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                Sistem Digital Terpadu untuk Bisnis & Teknologi
              </h3>
              
              {/* Slideshow Preview */}
              <div className="h-32 sm:h-48 bg-gray-100 rounded-lg overflow-hidden mb-3 sm:mb-4 relative">
                <img 
                  src={mainSlide} 
                  alt="Current slide preview"
                  className="w-full h-full object-cover"
                />
                
                {/* Hidden file input for main slide */}
                <input
                  type="file"
                  id="main-slide-upload"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'main')}
                  className="hidden"
                />
                
                {/* Overlay with upload option */}
                <div 
                  onClick={() => document.getElementById('main-slide-upload')?.click()}
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                >
                  <div className="text-center text-white px-2">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-xs sm:text-sm">Klik untuk upload gambar baru</p>
                    <p className="text-xs text-white/80 mt-1 hidden sm:block">Ukuran ideal: 1920x1080px (16:9)</p>
                  </div>
                </div>
              </div>

              {/* Slide Management */}
              <div className="mb-2">
                <p className="text-xs text-gray-500">Thumbnail slide: 80px tinggi, aspect ratio fleksibel</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                {slides.map((slide, index) => (
                  <div key={slide.id} className="relative group">
                    <img 
                      src={slide.src} 
                      alt={slide.alt}
                      onClick={() => handleSetMainSlide(slide.src)}
                      className="w-full h-16 sm:h-20 object-cover rounded-lg border-2 border-blue-500 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute top-1 right-1">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSlide(slide.id);
                        }}
                        className="bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                    <div className="absolute bottom-1 left-1 bg-blue-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hidden file input for new slides */}
              <input
                type="file"
                id="new-slide-upload"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'slide')}
                className="hidden"
              />
              
              {/* Upload New Slide */}
              <div 
                onClick={() => document.getElementById('new-slide-upload')?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-xs sm:text-sm text-gray-600">Tambah Slide Baru</p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">Klik atau drag & drop gambar di sini</p>
                <p className="text-xs text-gray-400 mt-1 sm:mt-2">Ukuran ideal: 1920x1080px (16:9) atau 1280x720px</p>
                <p className="text-xs text-gray-400 hidden sm:block">Maks: 5MB, Format: JPG/PNG/WebP</p>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-3 sm:mt-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base">
                Simpan Perubahan
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base">
                Preview
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Hidden on mobile */}
      <div className="hidden lg:block w-20 bg-black/20 backdrop-blur-sm flex flex-col items-center py-8">
        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Main FAB */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white group"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>

          {/* Action Items */}
          <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 origin-bottom ${
            isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
          }`}>
            {/* Home */}
            <button className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>

            {/* Analytics */}
            <button className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>

            {/* Settings */}
            <button className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Logout */}
            <button 
              onClick={handleLogout}
              className="w-12 h-12 bg-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-red-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
