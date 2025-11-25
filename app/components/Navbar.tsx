// app/components/Navbar.tsx
'use client';   // ← very important!

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Dental Concepts Logo"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold text-teal-700">Dental Concepts</h1>
                <p className="text-xs text-gray-600 -mt-1">Delhi</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-teal-600 transition">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi! I want to book an appointment at Dental Concepts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition"
              >
                {/* Simple WhatsApp icon using SVG (no lucide needed) */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.548h-.004c-1.503-.099-2.993-.735-4.174-1.846-3.643-3.43-3.617-8.422.052-11.936a9.628 9.628 0 0 1 8.39-4.95c4.87.05 8.802 4.072 8.846 9.07.045 5.008-4.008 9.09-8.91 9.09"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger – pure CSS bars (no external library) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-8 h-8 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'top-3.5 rotate-45' : 'top-1'}`}></span>
              <span className={`absolute left-0 top-3.5 w-full h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'top-3.5 -rotate-45' : 'top-6'}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-medium text-gray-700 hover:text-teal-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WhatsApp Booking
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Your original sticky bottom CTA bar – unchanged */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
        <div className="flex justify-around py-3">
          <a href="tel:+919876543210" className="flex flex-col items-center text-teal-600 font-semibold">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs mt-1">Call</span>
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi! I want to book an appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.548h-.004c-1.503-.099-2.993-.735-4.174-1.846-3.643-3.43-3.617-8.422.052-11.936a9.628 9.628 0 0 1 8.39-4.95c4.87.05 8.802 4.072 8.846 9.07.045 5.008-4.008 9.09-8.91 9.09"/>
            </svg>
            <span className="text-xs mt-1">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}