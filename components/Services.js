'use client';

import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Car Denting Works',
    description:
      'Accident repair, panel repair, body alignment. Professional dent removal for all car types.',
    image: '/images/denting.png',
  },
  {
    id: 2,
    title: 'Car Painting Works',
    description:
      'Full body painting, scratch removal, color matching, polish work. Expert paint solutions.',
    image: '/images/carpaints.png',
  },
  {
    id: 3,
    title: 'Engine Repair',
    description:
      'Engine servicing, oil change, engine cleaning. Keep your engine running smooth.',
    image: '/images/repair.png',
  },
  {
    id: 4,
    title: 'Car Electrical Works',
    description:
      'Wiring repair, battery service, headlight repair, power window repair.',
    image: '/images/electronics.png',
  },
  {
    id: 5,
    title: 'Brake Service',
    description:
      'Brake pad change, brake oil check. Safe braking for your car.',
    image: '/images/brakeservices.png',
  },
  {
    id: 6,
    title: 'Suspension Repair',
    description:
      'Shock absorber, suspension parts. Smooth ride restoration.',
    image: '/images/suspension.png',
  },
  {
    id: 7,
    title: 'Car AC Repair',
    description:
      'Gas refill, cooling repair. Beat the heat with working AC.',
    image: '/images/ac.png',
  },
  {
    id: 8,
    title: 'Car Washing & Detailing',
    description:
      'Full car wash, interior cleaning, polish. Your car looks new again.',
    image: '/images/cleaning.png',
  },
  {
    id: 9,
    title: 'Machine Works',
    description:
      'Professional machining for all car components. Precision work.',
    image: '/images/machine.png',
  },
  {
    id: 10,
    title: 'General Car Service',
    description:
      'Complete car service. Oil, filters, checks. Full maintenance package.',
    image: '/images/general.png',
  },
];

export default function Services() {
  return (
 <section
  id="services"
  className="bg-[#1E4E9E] py-32 text-white"
>
 
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            Our Services
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Complete Car Repair & Maintenance at K A P MOTORS
          </p>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-[350px] rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 relative">

              {/* Big Background Number */}
              <span className="absolute -top-10 text-[100px] font-extrabold text-red-600/10">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 relative">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/917396123435?text=Hello%20I%20want%20to%20book%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 
                px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Book Service
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
