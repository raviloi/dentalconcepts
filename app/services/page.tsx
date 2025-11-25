// app/services/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookAndPayButton from '../components/BookAndPayButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Services Delhi | Root Canal, Implants, Braces, Smile Makeover – Dental Concepts',
  description:
    'Best dental treatments in West Delhi: Painless Root Canal from ₹4,500, Dental Implants ₹25,000+, Clear Aligners, Veneers, Kids Dentistry & Teeth Whitening at Hari Nagar.',
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Dental Care <span className="text-teal-600">Under One Roof</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10">
            From routine cleaning to full smile makeovers — painless, modern & affordable treatments with the latest technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BookAndPayButton />
            <a
              href="https://wa.me/919876543210?text=Hi! I want to know more about your services"
              className="bg-white text-teal-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition inline-flex items-center gap-3 justify-center"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Root Canal Treatment',
                price: '₹4,500 – ₹8,000',
                duration: 'Single sitting (45–60 min)',
                features: ['100% Painless', 'Laser Assisted', 'Same-day Crown Option'],
                img: '/images/root-canal.jpg',
              },
              {
                title: 'Dental Implants',
                price: '₹25,000 – ₹45,000 per tooth',
                duration: '3–6 months healing',
                features: ['Lifetime Warranty', 'Korean/Swiss Brands', 'Digital Guided Surgery'],
                img: '/images/implants.jpg',
              },
              {
                title: 'Braces & Clear Aligners',
                price: '₹35,000 – ₹2,50,000',
                duration: '6–24 months',
                features: ['Invisible Aligners Available', 'Metal/Ceramic Braces', 'Free Retainers'],
                img: '/images/braces.jpg',
              },
              {
                title: 'Smile Makeover (Veneers/Composite)',
                price: '₹8,000 – ₹25,000 per tooth',
                duration: '1–3 visits',
                features: ['Hollywood Smile', 'E-max & Composite', 'Instant Preview'],
                img: '/images/smile-makeover.jpg',
              },
              {
                title: 'Teeth Whitening & Cleaning',
                price: '₹1,999 – ₹9,999',
                duration: '30–60 min',
                features: ['Zoom! Whitening', 'Ultrasonic Scaling', 'Polishing Included'],
                img: '/images/whitening.jpg',
              },
              {
                title: 'Kids Dentistry',
                price: '₹999 onwards',
                duration: 'Fun 30-min visits',
                features: ['Child-Friendly Clinic', 'No Fear Techniques', 'Free First Checkup'],
                img: '/images/kids.jpg',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#faf9f6] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3"
              >
                <div className="grid md:grid-cols-2">
                  {/* Text Side */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-teal-600 font-bold text-2xl mb-4">{service.price}</p>
                    <p className="text-gray-600 mb-6">
                      <strong>Duration:</strong> {service.duration}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-gray-700">
                          <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <BookAndPayButton className="flex-1" />
                      <a
                        href={`https://wa.me/919876543210?text=Hi! I want to book ${encodeURIComponent(service.title)}`}
                        className="flex-1 bg-white border-2 border-teal-600 text-teal-600 font-bold py-4 px-6 rounded-full hover:bg-teal-50 transition text-center"
                      >
                        WhatsApp Now
                      </a>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={service.img}
                      alt={`${service.title} at Dental Concepts Delhi`}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJAPr8gP4OQAAAABJRU5ErkJggg=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl text-teal-50 mb-10">
            Same-day appointments available • Open 10 AM – 8 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BookAndPayButton />
            <a
              href="tel:+919876543210"
              className="bg-white text-teal-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}