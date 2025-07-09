import React from 'react';

const serviceCategories = [
  {
    title: 'Preventive Dental Services',
    services: ['Routine dental check-ups', 'Professional teeth cleaning', 'Fluoride treatments', 'Dental sealants', 'Digital X-rays and imaging'],
  },
  {
    title: 'Restorative Dental Services',
    services: ['Dental fillings', 'Crowns and bridges', 'Dentures (complete and partial)', 'Root canal therapy', 'Inlays and onlays', 'Implant-supported restorations'],
  },
  {
    title: 'Cosmetic Dentistry',
    services: ['Teeth whitening', 'Veneers', 'Dental bonding', 'Invisalign and clear aligners', 'Smile makeovers', 'Tooth reshaping and contouring'],
  },
  {
    title: 'Specialized Services',
    services: ['Dental implants', 'Bone grafting and sinus lift procedures', 'Peri-implantitis management', 'Periodontal treatments (gum disease)', 'Oral surgery'],
  },
  {
    title: 'Orthodontics',
    services: ['Traditional braces', 'Clear braces', 'Retainers', 'Early orthodontic treatments for children'],
  },
  {
    title: 'Pediatric Dentistry',
    services: ['Child dental check-ups', 'Preventive treatments for children', 'Space maintainers', 'Habit counseling', 'Emergency dental care for kids'],
  },
  {
    title: 'Emergency Dental Care',
    services: ['Toothache relief', 'Repairing chipped or broken teeth', 'Replacing knocked-out teeth', 'Emergency root canal therapy'],
  },
  {
    title: 'Prosthodontics',
    services: ['Full-mouth rehabilitation', 'Overdentures', 'Fixed hybrid prosthetics', 'Full-arch restorations'],
  },
];

export const DentalServices = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Our Dental Services</h1>
          <p className="mt-4 text-xl text-gray-600">Comprehensive care for a healthy, beautiful smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-medicalBlue-dark mb-4">{category.title}</h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {category.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
