import Hero from '@/components/Hero';
import BrandsSection from '@/components/BrandsSection';
import About from '@/components/About';
import Services from '@/components/Services';
import LocalSEO from '@/components/LocalSEO';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BrandsSection />
      <About />
      <Services />
      <LocalSEO />
      <Reviews />
      <Contact />
    </main>
  );
}
