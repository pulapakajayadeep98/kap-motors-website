'use client';

import Image from 'next/image';

const brands = [
  { image: '/images/tata.webp', alt: 'TATA' },
  { image: '/images/mahendra.png', alt: 'Mahindra' },
  { image: '/images/toyota.webp', alt: 'Toyota' },
  { image: '/images/hyundai.png', alt: 'Hyundai' },
  { image: '/images/chevrolt.webp', alt: 'Chevrolet' },
  { image: '/images/ford.webp', alt: 'Ford' },
  { image: '/images/nissan.webp', alt: 'Nissan' },
  { image: '/images/flat.png', alt: 'Fiat' },
  { image: '/images/suzuki.webp', alt: 'Maruti Suzuki' },
];

export default function BrandsSection() {
  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] py-8 md:py-10">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Modern Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-wide">
          Multi Car Care Center
        </h2>

        <p className="text-white/80 mt-1 text-sm md:text-base">
          We Service All Major Car Brands in Hanuman Junction
        </p>

        {/* Logo Row */}
        <div className="mt-6 md:mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex md:justify-center gap-6 md:gap-10 min-w-max">

            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 
                w-16 h-16 md:w-20 md:h-20
                bg-white 
                rounded-lg 
                shadow-sm
                border border-white/40
                hover:shadow-lg 
                hover:-translate-y-1
                transition-all duration-300"
              >
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
