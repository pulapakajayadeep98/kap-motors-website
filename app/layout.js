import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

/* Premium Font Pairing */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  title:
    'K A P MOTORS - Best Car Service Center in Hanuman Junction | Car Mechanic Shop',
  description:
    'K A P MOTORS is a trusted car service center in Hanuman Junction, Andhra Pradesh with 10+ years experience in denting, painting, engine repair, electrical works and complete car maintenance.',
  keywords: [
    'Car mechanic in Hanuman Junction',
    'Best car service center in Hanuman Junction',
    'Car denting and painting Andhra Pradesh',
    'Car repair shop near me',
    'Engine repair Hanuman Junction',
    'Car electrical works Andhra',
    'Car AC repair Hanuman Junction',
    'Car garage Hanuman Junction',
  ].join(', '),
  openGraph: {
    title:
      'K A P MOTORS - Best Car Service Center in Hanuman Junction',
    description:
      '10+ years trusted multi car care center in Hanuman Junction. Professional denting, painting, engine repair and complete car service.',
    url: 'https://kapmotors.com',
    siteName: 'K A P MOTORS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K A P MOTORS - Premium Car Service Center',
    description:
      'Trusted auto repair and complete car service in Hanuman Junction with 10+ years experience.',
  },
  alternates: {
    canonical: 'https://kapmotors.com',
  },
}

/* Structured Data - Improved */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'K A P MOTORS',
  image: 'https://kapmotors.com/logo.png',
  description:
    'Trusted multi car service center in Hanuman Junction offering denting, painting, engine repair, electrical works and complete maintenance.',
  telephone: '+917396123435',
  url: 'https://kapmotors.com',
  priceRange: '₹₹',
  founder: {
    '@type': 'Person',
    name: 'Anil Kumar',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Eluru Road H Junction',
    addressLocality: 'Hanuman Junction',
    addressRegion: 'Andhra Pradesh',
    postalCode: '521105',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.9912,
    longitude: 80.9765,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="font-body bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
