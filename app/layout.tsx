// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dentalconcepts.in'),
  title: 'Dental Concepts – Best Dentist in Delhi | Painless Dental Care',
  description:
    'Multi-award winning dental clinic in Delhi offering Teeth Cleaning, Root Canal, Dental Implants, Braces, Aligners, Smile Makeover & Kids Dentistry. Book instantly via WhatsApp!',
  keywords:
    'dentist in delhi, best dental clinic in delhi, dental implants delhi, root canal delhi, braces delhi, invisalign delhi, kids dentist delhi',
  authors: [{ name: 'Dental Concepts' }],
  openGraph: {
    title: 'Dental Concepts – Best Dental Clinic in Delhi',
    description: 'Painless & Affordable Dental Care in Delhi | Book Appointment Now',
    url: 'https://www.dentalconcepts.in',
    siteName: 'Dental Concepts',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Concepts Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalconcepts.in',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Dental Concepts',
              image: 'https://www.dentalconcepts.in/images/logo.png',
              '@id': 'https://www.dentalconcepts.in/#organization',
              url: 'https://www.dentalconcepts.in',
              telephone: '+91-9876543210',
              priceRange: '₹₹',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'EC Block, Maya Enclave, Hari Nagar',
                addressLocality: 'New Delhi',
                addressRegion: 'DL',
                postalCode: '110064',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.6272,
                longitude: 77.1011,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '10:00',
                closes: '20:00',
              },
              sameAs: [
                'https://facebook.com/dentalconceptsdelhi',
                'https://instagram.com/dentalconceptsdelhi',
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} bg-[#faf9f6] text-gray-800 antialiased`}>
        <Navbar />
 <main className="min-h-screen">
  {children}
</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}