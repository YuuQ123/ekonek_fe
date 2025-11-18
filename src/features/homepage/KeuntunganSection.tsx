import React, { useState, useEffect, useRef } from 'react'

const KeuntunganSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const benefits = [
    {
      title: "Biaya Kemitraan Sangat Terjangkau dan Pembayaran Flexible",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )
    },
    {
      title: "Support Handal 24/7 Selalu Siap Membantu Anda",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )
    },
    {
      title: "Administrasi Mudah sehingga Mempermudah Pengelolaan Invoice",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )
    },
    {
      title: "Berpengalaman dan Sudah Terhubung dengan Lebih Dari 100 Mitra Fiberconnect",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )
    }
  ]

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
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-orange-500 to-orange-600 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bergabung dan Rasakan Keuntungannya!
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">
            Bergabung eKonek dan nikmati berbagai keuntungannya
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 border border-white border-opacity-20 ${
                isVisible 
                  ? `opacity-100 translate-y-0` 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed">
                    {benefit.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeuntunganSection
