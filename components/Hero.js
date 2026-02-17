'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  '/images/ac.png',   // replace with your images
  '/images/cleaning.png',
  '/images/team3.jpg',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000) // change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="KAP Motors Team"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-6">
            Professional Car Service in Hanuman Junction
          </h1>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
            10+ Years Experience in All Car Works. Complete car service center in Hanuman Junction. We handle all types of car repairs with quality service.
          </p>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block px-8 py-3 bg-kap-red hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-red-500/40"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Optional Small Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
