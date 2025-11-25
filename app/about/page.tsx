// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import BookAndPayButton from '../components/BookAndPayButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dental Concepts – Best Dentist in Hari Nagar Delhi | Dr. Aparna Jolly',
  description:
    'Meet Dr. Aparna Jolly at Dental Concepts – West Delhi’s most trusted dental clinic since 2015 in Maya Enclave, Hari Nagar. Painless treatments, latest technology & 5000+ happy patients.',
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-teal-600">Dental Concepts Delhi</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Your trusted neighborhood dental clinic in <strong>Maya Enclave, Hari Nagar, West Delhi</strong> — where we treat every patient like family.
          </p>
        </div>
      </section>

      {/* OUR STORY + CLINIC IMAGE */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015 by <strong className="text-teal-600">Dr. Aparna Jolly</strong>, Dental Concepts was born from a simple belief:{' '}
                <em>everyone deserves painless, honest, and world-class dental care — without fear or high costs</em>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we’re proud to be one of West Delhi’s most loved clinics with over <strong>5,000 happy patients</strong>, hundreds of 5-star reviews, and a team that genuinely cares.
              </p>

              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: '5000+', label: 'Happy Patients' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '100%', label: 'Painless Promise' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-5xl font-bold text-teal-600">{stat.number}</p>
                    <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Modern dental clinic interior at Dental Concepts, Hari Nagar Delhi"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OnPfQAJJAPr8gP4OQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="section-padding bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Meet Your Dentist</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dr. Aparna Jolly</h3>
              <p className="text-teal-600 font-semibold text-xl mb-8">Chief Dentist & Smile Designer</p>

              <ul className="space-y-5 text-gray-700">
                {[
                  'BDS, MDS (Conservative Dentistry & Endodontics) – Maulana Azad Dental College, Delhi',
                  'Certified in Dental Implants (AAID, USA) & Clear Aligner Therapy',
                  '10+ years experience, 3000+ root canals, 1000+ implants placed',
                  'Known for gentle, painless treatment & warm chairside manner',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <svg className="w-7 h-7 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/dr-Aparna.jpg"
                  alt="Dr. Aparna Jolly – Best Dentist in Hari Nagar Delhi"
                  width={600}
                  height={750}
                  className="object-cover w-full"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white font-bold text-2xl">Dr. Aparna Jolly</p>
                  <p className="text-teal-300 text-lg">Your Smile is Our Priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Why Patients Love Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Pain-Free Treatments', desc: 'Latest anesthesia & laser technology' },
              { title: 'Honest Pricing', desc: 'No hidden charges, EMI available' },
              { title: 'Same-Day Appointments', desc: 'Emergency slots always open' },
              { title: 'Sterilized & Safe', desc: 'Hospital-grade sterilization' },
              { title: 'Latest Technology', desc: 'Digital X-rays, Intraoral cameras' },
              { title: 'Kids Love Us', desc: 'Play area & no-fear dentistry' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#faf9f6] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Meet Your New Dentist?
          </h2>
          <p className="text-xl text-teal-50 mb-10">
            Book your ₹499 consultation or walk in – we’re open 10 AM to 8 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BookAndPayButton />
            <a
              href="https://wa.me/919876543210?text=Hi Dr. Aparna! I'd like to book an appointment"
              className="bg-white text-teal-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition inline-flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              WhatsApp Dr. Aparna
            </a>
          </div>
        </div>
      </section>
    </>
  );
}