# K A P MOTORS - Car Service Center Website

A production-ready single-page website for K A P MOTORS, a trusted car mechanic shop in Hanuman Junction, Andhra Pradesh.

## Features

- Single-page responsive design (mobile & desktop)
- Smooth scroll navigation with sticky navbar
- Tailwind CSS styling (Red, Black, Grey theme)
- SEO optimized (meta tags, Open Graph, JSON-LD schema)
- WhatsApp floating button
- Contact form
- Google Maps embed
- Customer reviews section
- Local SEO content

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Next.js Image component (optimized, WebP support)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.js      # Root layout with SEO meta tags
  page.js        # Main page
  globals.css    # Global styles

components/
  Navbar.js
  Hero.js
  About.js
  Services.js
  LocalSEO.js
  Reviews.js
  Contact.js
  Footer.js
  WhatsAppButton.js

public/images/   # Add your WebP images here for production
```

## Custom Images

For production, replace Unsplash placeholder URLs with your own WebP images in `public/images/`. Update the Image `src` in components to use `/images/your-image.webp`.

## Contact

K A P MOTORS  
Owner: Anil Kumar  
Phone: 07396123435  
Address: Eluru Road H Junction, Hanuman Junction, Andhra Pradesh 521105
