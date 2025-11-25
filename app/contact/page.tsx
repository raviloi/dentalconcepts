// app/contact/page.tsx
import BookAndPayButton from '../components/BookAndPayButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dental Concepts Delhi | Best Dentist in Hari Nagar, Maya Enclave',
  description:
    'Visit Dental Concepts at EC Block, Maya Enclave, Hari Nagar, New Delhi-110064. Call/WhatsApp +91 98765 43210 for same-day appointment. Open 10 AM – 8 PM (Mon–Sat).',
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Visit Us in Hari Nagar – We’re Open!
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10">
            EC Block, Maya Enclave, Hari Nagar, New Delhi-110064 — just <strong>2 mins from Hari Nagar Clock Tower</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BookAndPayButton />
            <a
              href="https://wa.me/919876543210?text=Hi! I'm nearby / I want to book an appointment now"
              className="bg-white text-teal-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition inline-flex items-center gap-3 justify-center"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT INFO */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.987345678901!2d77.0989!3d28.6272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e6d6b6f5c7%3A0x8f9e2d5d8e9d8c7b!2sDental%20Concepts%20-%20Maya%20Enclave!5e0!3m2!1sen!2sin!4v1739000000000!5m2!1sen!2sin"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Concepts Delhi Location – Hari Nagar"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>

              <div className="space-y-8 text-lg">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Clinic Address</p>
                    <p className="text-gray-700 leading-relaxed">
                      EC Block, Maya Enclave,<br />
                      Near Hari Nagar Clock Tower,<br />
                      Hari Nagar, New Delhi – 110064<br />
                      <span className="text-teal-600 font-semibold">(Opposite Metro Pillar 347)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Call / WhatsApp</p>
                    <a href="tel:+919876543210" className="text-3xl font-bold text-teal-600 hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Clinic Timings</p>
                    <p className="text-gray-700">
                      Mon – Sat: <strong>10:00 AM – 8:00 PM</strong><br />
                      Sunday: <strong>By Appointment Only</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center shadow-lg">
                <p className="text-2xl font-bold text-red-700 mb-3">Dental Emergency?</p>
                <p className="text-gray-700 mb-6">Severe pain • Swelling • Broken tooth — we’ll see you TODAY</p>
                <a
                  href="tel:+919876543210"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-12 rounded-full text-xl transition shadow-md"
                >
                  Call Now – Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Perfect Smile is Just One Click Away!
          </h2>
          <p className="text-xl text-teal-50 mb-10">
            Same-day appointments available • Walk-ins welcome
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BookAndPayButton />
            <a
              href="https://wa.me/919876543210"
              className="bg-white text-teal-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}