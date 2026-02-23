'use client';

import Image from 'next/image';
import { Wrench, ShieldCheck, Clock, Star } from 'lucide-react';

export default function LocalSEO() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why K A P MOTORS is the
            <br />
            <span className="text-blue-600">
              Best Car Mechanic in Hanuman Junction
            </span>
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/brakeservices.png"
              alt="K A P MOTORS car workshop in Hanuman Junction"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              If you are searching for the best car mechanic in Hanuman Junction,
              K A P MOTORS is a trusted name with more than 15+ years of experience.
              We provide complete car repair services including denting, painting,
              engine repair, electrical works and general car service.
              Customers choose us for quality work, honest pricing and quick service.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Wrench className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Complete Car Services
                  </h4>
                  <p className="text-sm text-gray-600">
                    All types of car repair and maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-xl">
                  <ShieldCheck className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Trusted & Reliable
                  </h4>
                  <p className="text-sm text-gray-600">
                    15+ years of satisfied customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-xl">
                  <Clock className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quick Service
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fast and efficient repair work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 rounded-xl">
                  <Star className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Affordable Pricing
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quality service at fair prices.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
