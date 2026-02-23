'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '917396123435';

const scrollToSection = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  'Car Denting & Painting',
  'Engine Repair',
  'Electrical Works',
  'Brake Service',
  'Car AC Repair',
  'General Service',
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const message = `Hi! I want to subscribe to K A P MOTORS newsletter.\nEmail: ${email || 'Not provided'}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setEmail('');
  };

  return (
    <footer className="bg-kap-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-kap-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-kap-red flex items-center justify-center rounded">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">Subscribe Our Newsletter</h3>
                <p className="text-white/80 text-sm">Get updates on our services and offers. Enter your email below.</p>
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded text-kap-black placeholder-gray-500 w-full sm:w-64"
              />
              <button type="submit" className="px-6 py-3 bg-kap-red hover:bg-kap-dark-red text-white font-bold rounded transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="border-b border-kap-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Us */}
            <div>
              <h4 className="font-heading font-bold text-lg text-kap-red mb-4">About Us</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                K A P MOTORS is a trusted car mechanic shop in Hanuman Junction with 15+ years of experience. We provide complete car repair services with quality work and affordable prices.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/tumati.kap/" className="w-9 h-9 bg-white/10 hover:bg-kap-red rounded flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
             <a 
  href="https://wa.me/917396123435" 
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded flex items-center justify-center transition-colors"
  aria-label="WhatsApp"
>
  <svg 
    className="w-4 h-4 text-white" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.39 0 .03 5.36.03 11.98c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.62a11.94 11.94 0 005.81 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.48-8.4zM12.02 21.3c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.68.96.98-3.58-.23-.37a9.28 9.28 0 01-1.42-4.94c0-5.14 4.18-9.32 9.32-9.32 2.49 0 4.83.97 6.59 2.73a9.27 9.27 0 012.73 6.59c0 5.14-4.18 9.32-9.33 9.32zm5.11-6.97c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.74.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.19 1.97 3 4.77 4.2.67.29 1.2.46 1.61.59.68.22 1.29.19 1.78.11.54-.08 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.12-.26-.19-.54-.33z"/>
  </svg>
</a>

                <a href="https://www.instagram.com/kapmotorss?igsh=NHNyOGxqaDZreXhx" className="w-9 h-9 bg-white/10 hover:bg-kap-red rounded flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
             
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg text-kap-red mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={scrollToSection}
                      className="flex items-center gap-2 text-white/80 hover:text-kap-red transition-colors"
                    >
                      <svg className="w-4 h-4 text-kap-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-heading font-bold text-lg text-kap-red mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" onClick={scrollToSection} className="flex items-center gap-2 text-white/80 hover:text-kap-red transition-colors">
                      <svg className="w-4 h-4 text-kap-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg text-kap-red mb-4">Address & Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-kap-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Eluru Road H Junction, Hanuman Junction, Andhra Pradesh 521105</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-kap-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a href="tel:07396123435" className="hover:text-kap-red transition-colors">07396123435</a>
                </li>
              </ul>
              <h4 className="font-heading font-bold text-lg text-kap-red mt-6 mb-4">Working Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-kap-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Monday - Saturday: 09:00 AM - 08:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="text-white/60">Designed by</span>
            {/* Add your logo at public/images/pj-logo.png */}
            <img src="/images/pj.png" alt="Logo" className="h-6 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
            <span className="text-white font-medium"> P & J Technologies</span>
          </div>
          <p className="text-white/60 text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved by K A P MOTORS
          </p>
        </div>
      </div>
    </footer>
  );
}
