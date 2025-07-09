import React from 'react';

import botox from '@/assets/botox.webp';
import microneedling from '@/assets/microneedling.webp';
import skinboosters from '@/assets/skinboosters.webp';
import acnetreatment from '@/assets/acnetreatment.jpg';

const dermaServices = [
  {
    title: 'Botox & Fillers',
    description: 'Smooth fine lines and restore youthful volume with our expertly administered Botox and dermal filler treatments. Achieve natural-looking results for a refreshed and revitalized appearance.',
    image: botox,
    alt: 'Botox treatment illustration',
  },
  {
    title: 'Microneedling',
    description: 'Stimulate collagen production and improve skin texture, tone, and firmness. Microneedling is effective for reducing scars, wrinkles, and pore size.',
    image: microneedling,
    alt: 'Microneedling procedure',
  },
  {
    title: 'Skin Boosters',
    description: 'Hydrate and rejuvenate your skin from within. Our skin booster treatments improve skin quality, elasticity, and luminosity for a radiant glow.',
    image: skinboosters,
    alt: 'Glowing skin after skin booster treatment',
  },
  {
    title: 'Acne Treatment',
    description: 'We offer personalized acne treatment plans, from topical solutions to advanced therapies, to help you achieve clear and healthy skin.',
    image: acnetreatment,
    alt: 'Clear skin after acne treatment',
  },
];

export const DermatologyServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-medicalBlue-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Advanced Dermatology & Aesthetic Services</h1>
          <p className="mt-4 text-xl text-gray-700">Unlock your skin's potential with our expert care.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">Our Approach to Skin Health</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At Implant & Aesthetic Medical Center, we combine the art of aesthetics with the science of dermatology to provide personalized treatments that enhance your natural beauty. Our team of experts uses the latest technology and techniques to deliver safe, effective, and lasting results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dermaServices.map((service) => (
            <div key={service.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={service.image} alt={service.alt} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-medicalBlue-dark mb-3">{service.title}</h3>
                <p className="text-gray-700 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
