'use client';

import Image from 'next/image';

const features = [
  '10+ Years Experience',
  'All Car Models',
  'Affordable Price',
  'Quick Service',
  'Quality Guarantee',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3 Images with equal heights */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="row-span-2 flex flex-col justify-center">
              <div className="relative w-full aspect-[3/4] min-h-[200px] overflow-hidden rounded-lg shadow-xl" style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0 100%)' }}>
                <Image
                  src="/images/kapowner.png"
                  alt="Mechanic working on car engine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-lg shadow-xl" style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 92%)' }}>
              <Image
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
                alt="Mechanic with wrench at car lift"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-lg shadow-xl" style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0 100%)' }}>
              <Image
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"
                alt="Mechanic working under car"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <p className="text-kap-red font-bold text-sm uppercase tracking-wider mb-2">About Us</p>
            <div className="w-12 h-0.5 bg-kap-red mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-kap-black mb-6">
              The Most Experienced Mechanics You Ever Met
            </h2>
         <p className="text-kap-light-grey text-lg mb-6">
  K A P MOTORS is one of the trusted car mechanic shops in Hanuman Junction, Andhra Pradesh. 
  Owner <span className="text-kap-red font-semibold">Anil Kumar</span> has more than 10 years of experience in car repairs and services.
</p>

            <p className="text-kap-light-grey text-lg mb-8">
              We work on all car brands and models. We provide honest service, quality work and reasonable prices. Our goal is customer satisfaction.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-kap-black">
                  <svg className="w-5 h-5 text-kap-red mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex px-8 py-3 bg-kap-red hover:bg-kap-dark-red text-white font-bold rounded transition-colors"
            >
              For More Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
