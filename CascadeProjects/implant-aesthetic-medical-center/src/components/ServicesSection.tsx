import React from 'react';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';
import implantIcon from '@/assets/implanticon.png';
import dentalCareIcon from '@/assets/dentalcareicon.png';
import dermaIcon from '@/assets/dermaicon.jpg';
import specializedTreatmentIcon from '@/assets/specializedtreatment.png';

import dentalImplantsImg from '@/assets/dental-implants.webp';
import generalDentalCareImg from '@/assets/generaldentalcare.jpg';
import dermatologyImg from '@/assets/dermatology.jpg';
import specializedTreatmentImg from '@/assets/specializedtreatment.webp';

const services = [
  {
    icon: implantIcon,
    image: dentalImplantsImg,
    title: 'Dental Implants',
    description: 'Advanced solutions for replacing missing teeth and restoring your smile.',
  },
  {
    icon: dentalCareIcon,
    image: generalDentalCareImg,
    title: 'General Dental Care',
    description: 'Comprehensive dental check-ups, cleanings, and treatments for all ages.',
  },
  {
    icon: dermaIcon,
    image: dermatologyImg,
    title: 'Dermatology Services',
    description: 'Expert care for your skin, from cosmetic procedures to medical treatments.',
  },
  {
    icon: specializedTreatmentIcon,
    image: specializedTreatmentImg,
    title: 'Specialized Treatments',
    description: 'Customized, state-of-the-art treatments tailored to your unique needs.',
  },
];

export const ServicesSection = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-medicalBlue-dark mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <AnimatedOnScroll key={service.title} variants={bounceFadeVariants} delay={idx * 0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl">
                <AnimatedOnScroll variants={bounceFadeVariants} delay={0.05}>
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover"/>
                </AnimatedOnScroll>
                <div className="p-6 text-center">
                  <AnimatedOnScroll variants={bounceFadeVariants} delay={0.1}>
                    <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 mx-auto -mt-12 bg-white rounded-full border-4 border-white p-2 shadow-md"/>
                  </AnimatedOnScroll>
                  <h3 className="text-xl font-semibold text-medicalBlue-dark mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};
