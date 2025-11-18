import React, { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const PaketSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const packages = [
    {
      speed: "10 Mbps",
      name: "Paket Hemat",
      devices: "3 Perangkat",
      features: ["Streaming HD & Browsing"],
      price: "Rp165.000",
      period: "Bulan",
      fillLevel: 25
    },
    {
      speed: "15 Mbps", 
      name: "Paket Hemat",
      devices: "5 Perangkat",
      features: ["Streaming HD & Meeting"],
      price: "Rp165.000",
      period: "Bulan",
      fillLevel: 35
    },
    {
      speed: "30 Mbps",
      name: "Paket Hemat", 
      devices: "7 Perangkat",
      features: ["Ultra HD & Gaming"],
      price: "Rp165.000",
      period: "Bulan",
      fillLevel: 65
    },
    {
      speed: "50 Mbps",
      name: "Paket Hemat",
      devices: "10+ Perangkat", 
      features: ["Untuk Aktivitas Berat"],
      price: "Rp165.000",
      period: "Bulan",
      fillLevel: 85
    }
  ]

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const handleSubscribe = () => {
    // Redirect ke halaman register
    window.location.href = '/register';
  }

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Pilih Paket Internet Terbaik
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`w-full lg:w-1/3 text-center lg:text-left transition-all duration-1000 transform delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
              Dapatkan koneksi internet super cepat dengan harga terjangkau.
            </h3>
            <p className="text-lg text-orange-500 mb-8">
              Semua paket sudah termasuk instalasi gratis!
            </p>
            <button 
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Berlangganan Sekarang
            </button>
          </div>

          {/* Right Content - Swipeable Cards */}
          <div className={`w-full lg:w-2/3 transition-all duration-1000 transform delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">

              {/* Embla Carousel Container */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_320px] bg-white rounded-xl border border-blue-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                    {/* Speed Header */}
                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-500 mb-2">Speed Up To</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        {/* Left Bar */}
                        <div className="w-2 h-16 bg-gray-200 rounded-full relative">
                          <div 
                            className="absolute bottom-0 w-full bg-orange-500 rounded-full transition-all duration-500"
                            style={{ height: `${pkg.fillLevel}%` }}
                          />
                        </div>
                        
                        {/* Speed Text */}
                        <h4 className="text-3xl font-bold text-gray-800">
                          {pkg.speed}
                        </h4>
                        
                        {/* Right Bar */}
                        <div className="w-2 h-16 bg-gray-200 rounded-full relative">
                          <div 
                            className="absolute bottom-0 w-full bg-orange-500 rounded-full transition-all duration-500"
                            style={{ height: `${pkg.fillLevel}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Package Name */}
                    <h5 className="text-xl font-bold text-gray-800 text-center mb-4">
                      {pkg.name}
                    </h5>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-600 text-center">
                        Stabil untuk {pkg.devices}
                      </p>
                      {pkg.features.map((feature, idx) => (
                        <p key={idx} className="text-gray-600 text-center text-sm">
                          {feature}
                        </p>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-lg px-4 py-3 inline-block">
                        <span className="text-lg font-semibold text-gray-800">
                          {pkg.price}/{pkg.period}
                        </span>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'bg-orange-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaketSection
