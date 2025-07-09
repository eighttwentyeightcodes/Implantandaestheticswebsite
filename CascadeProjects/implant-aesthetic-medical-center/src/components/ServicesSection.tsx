import React from 'react';
import { Smile, Stethoscope, Sparkles, Star } from 'lucide-react';

const services = [
  {
    icon: <Smile className="w-12 h-12 text-medicalBlue" />,
    title: 'Dental Implants',
    description: 'Advanced solutions for replacing missing teeth and restoring your smile.',
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-medicalBlue" />,
    title: 'General Dental Care',
    description: 'Comprehensive dental check-ups, cleanings, and treatments for all ages.',
  },
  {
    icon: <Sparkles className="w-12 h-12 text-medicalBlue" />,
    title: 'Dermatology Services',
    description: 'Expert care for your skin, from cosmetic procedures to medical treatments.',
  },
  {
    icon: <Star className="w-12 h-12 text-medicalBlue" />,
    title: 'Specialized Treatments',
    description: 'Customized, state-of-the-art treatments tailored to your unique needs.',
  },
];

export const ServicesSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-medicalBlue-dark mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-medical transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-medicalBlue-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
