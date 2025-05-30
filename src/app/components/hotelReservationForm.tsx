'use client';

import { useEffect, useState } from 'react';

export default function HotelReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Get current location on mount
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          '';

        if (city) {
          setFormData(prev => ({ ...prev, location: city }));
        }
      } catch (err) {
        console.error('Failed to reverse geocode location', err);
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/sendReservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          checkIn: '',
          checkOut: '',
          guests: 1,
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.message || 'Failed to send.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Reservation form submission failed:', err);
      setErrorMessage('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
          type="text"
        />
      </div>

      <div>
        <label className="block font-semibold">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          type="email"
        />
      </div>

      <div>
        <label className="block font-semibold">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input-field"
          type="tel"
        />
      </div>

      <div>
        <label className="block font-semibold">Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="input-field"
          type="text"
          placeholder="Enter city or location"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Check-in</label>
          <input
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="input-field"
            type="date"
          />
        </div>
        <div>
          <label className="block font-semibold">Check-out</label>
          <input
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="input-field"
            type="date"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold">Guests</label>
        <input
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="input-field"
          type="number"
          min={1}
          max={10}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-4 py-2 text-white font-semibold rounded-md transition ${
          status === 'sending'
            ? 'bg-blue-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {status === 'sending' ? 'Sending...' : 'Reserve Now'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600 font-semibold">
          Thank you! A customer representative will connect with you ASAP.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
      )}
    </form>
  );
}
