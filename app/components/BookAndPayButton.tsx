// app/components/BookAndPayButton.tsx
'use client';

import { useState } from 'react';

export default function BookAndPayButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount_inr: 499,
          purpose: 'Dental Consultation Booking Fee',
        }),
      });

      const order = await res.json();
      if (!order.id) throw new Error('Order failed');

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => loadRazorpay(order);
      script.onerror = () => {
        alert('Failed to load payment gateway. Try WhatsApp booking.');
        setLoading(false);
      };
      document.body.appendChild(script);
    } catch (err) {
      alert('Payment failed. Booking via WhatsApp instead?');
      setLoading(false);
    }
  };

  const loadRazorpay = (order: any) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: order.currency,
      name: 'Dental Concepts',
      description: 'Consultation Fee ₹499',
      image: '/images/logo.png',
      order_id: order.id,
      handler: (response: any) => {
        window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: { contact: '', name: '', email: '' },
      theme: { color: '#14b8a6' },
      modal: { ondismiss: () => setLoading(false) },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`btn-primary text-lg flex items-center justify-center gap-3 ${loading ? 'opacity-80' : ''}`}
    >
      {loading ? (
        <>Processing...</>
      ) : (
        <>
          Book & Pay ₹499 (Instant Slot)
        </>
      )}
    </button>
  );
}