// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">

Dental Concepts</h3>
          <p className="text-teal-100">
            Your trusted family dentist in Delhi since 2015. Pain-free, modern & affordable dental care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-teal-100">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Before & After</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-teal-100 text-sm">
            <li>Dental Implants</li>
            <li>Root Canal Treatment</li>
            <li>Braces & Aligners</li>
            <li>Smile Makeover</li>
            <li>Kids Dentistry</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <p className="text-teal-100">
            EC Block, Maya Enclave, Hari Nagar, New Delhi-110064<br />
            Mon–Sat: 10 AM – 8 PM<br />
            <strong>Phone:</strong> +91 98765 43210<br />
            <strong>WhatsApp:</strong> +91 98765 43210
          </p>
        </div>
      </div>

      <div className="bg-teal-900 py-4 text-center text-sm">
        © {new Date().getFullYear()} Dental Concepts Delhi. All rights reserved.
      </div>
    </footer>
  );
}