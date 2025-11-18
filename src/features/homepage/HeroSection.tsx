import React, { useState, useEffect } from 'react'

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    '/images/wifi.png',
    '/images/wifi2.png',
    '/images/404.png'
  ]

  // Auto slide functionality dengan interval 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  // Scroll reveal animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text Content - Left Side */}
        <div className={`w-full lg:w-2/5 text-center lg:text-left transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Solusi Digital
              <span className="block text-orange-500">Terbaik</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed">
              untuk Bisnis & Keluarga
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Layanan internet cepat, stabil, dan terpercaya untuk kebutuhan digital Anda.
            </p>
          </div>
        </div>

        {/* Slideshow Container - Right Side */}
        <div className={`w-full lg:w-3/5 transition-all duration-1000 transform delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl overflow-hidden relative border border-gray-200">
            {/* Slideshow Container */}
            <div className="relative w-full h-full">
              {slides.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-500 p-2 sm:p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNextSlide}
              className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-500 p-2 sm:p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-500 shadow-lg' 
                      : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection