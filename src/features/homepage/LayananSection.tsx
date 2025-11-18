import React, { useState, useEffect, useRef } from 'react'

const LayananSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: "Kecepatan Hingga 50 Mbps",
      description: "Streaming lancar, gaming stabil, dan kerja tanpa hambatan."
    },
    {
      title: "Layanan Andal",
      description: "Monitoring 24/7 dan respon dukungan yang cepat."
    },
    {
      title: "Harga Bersahabat",
      description: "Paket fleksibel untuk rumah dan bisnis kecil."
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
    <section id="service" ref={sectionRef} className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Layanan Kami
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-orange-500 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible 
                  ? `opacity-100 translate-y-0 delay-${index * 200}` 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-white text-opacity-90 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LayananSection
