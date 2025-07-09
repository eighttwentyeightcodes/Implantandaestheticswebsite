import React from 'react';

import { FileText, HeartPulse, DollarSign, Download } from 'lucide-react';

const resources = [
  {
    title: 'Patient Forms',
    icon: FileText,
    description: 'Save time by filling out our patient forms before your appointment. Download the forms you need below.',
    items: [
      { name: 'New Patient Registration Form', link: '#' },
      { name: 'Medical History Form', link: '#' },
      { name: 'Consent for Treatment Form', link: '#' },
    ],
  },
  {
    title: 'Care Instructions',
    icon: HeartPulse,
    description: 'Follow our expert guidelines before and after your procedure to ensure a smooth recovery and the best possible results.',
    items: [
      { name: 'Pre-Operative Instructions for Surgery', link: '#' },
      { name: 'Post-Operative Care for Dental Implants', link: '#' },
      { name: 'Aftercare for Dermatology Treatments', link: '#' },
    ],
  },
  {
    title: 'Insurance & Financing',
    icon: DollarSign,
    description: 'We are committed to making our services accessible. Learn more about the insurance plans we accept and our financing options.',
    items: [
      { name: 'View Accepted Insurance Providers', link: '#' },
      { name: 'Learn About Our Financing Plans', link: '#' },
      { name: 'Frequently Asked Billing Questions', link: '#' },
    ],
  },
];

export const PatientResources = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Patient Resources</h1>
          <p className="mt-4 text-xl text-gray-600">Everything you need to prepare for your visit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <resource.icon className="w-12 h-12 mx-auto text-medicalBlue mb-4" />
              <h2 className="text-2xl font-bold text-medicalBlue-dark mb-3">{resource.title}</h2>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <ul className="space-y-3 text-left">
                {resource.items.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="flex items-center text-medicalBlue hover:text-medicalGold transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
