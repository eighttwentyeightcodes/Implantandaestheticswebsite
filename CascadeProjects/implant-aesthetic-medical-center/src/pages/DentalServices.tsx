import React from 'react';
import dentalCareIcon from '@/assets/dentalcareicon.png';
import implantIcon from '@/assets/implanticon.png';
import specializedTreatmentIcon from '@/assets/specializedtreatment.png';

const serviceCategories = [
  {
    title: 'Preventive & Restorative',
    icon: dentalCareIcon,
    services: ['Routine Check-ups', 'Teeth Cleaning', 'Fillings', 'Crowns & Bridges', 'Root Canal Therapy'],
  },
  {
    title: 'Cosmetic Dentistry',
    icon: dentalCareIcon, // Using a general icon, can be replaced
    services: ['Teeth Whitening', 'Veneers', 'Dental Bonding', 'Invisalign', 'Smile Makeovers'],
  },
  {
    title: 'Dental Implants',
    icon: implantIcon,
    services: ['Single Tooth Implants', 'Implant-Supported Bridges', 'All-on-4 Implants', 'Bone Grafting'],
  },
  {
    title: 'Specialized Services',
    icon: specializedTreatmentIcon,
    services: ['Periodontal Treatments', 'Oral Surgery', 'Orthodontics', 'Pediatric Dentistry', 'Emergency Care'],
  },
  {
    title: 'Prosthodontics',
    icon: specializedTreatmentIcon, // Using a general icon, can be replaced
    services: ['Full-Mouth Rehabilitation', 'Overdentures', 'Fixed Hybrid Prosthetics', 'Full-Arch Restorations'],
  },
];

import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';

export const DentalServices = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Our Dental Services</h1>
          <p className="mt-4 text-xl text-gray-600">Comprehensive care for a healthy, beautiful smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, idx) => (
            <AnimatedOnScroll key={category.title} variants={bounceFadeVariants} delay={idx * 0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <AnimatedOnScroll variants={bounceFadeVariants} delay={0.05}>
                  <div className="flex items-center mb-4">
                    <img src={category.icon} alt={`${category.title} icon`} className="w-12 h-12 mr-4"/>
                    <h2 className="text-2xl font-bold text-medicalBlue-dark">{category.title}</h2>
                  </div>
                </AnimatedOnScroll>
                <ul className="space-y-2 text-gray-700 list-disc list-inside flex-grow">
                  {category.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};
