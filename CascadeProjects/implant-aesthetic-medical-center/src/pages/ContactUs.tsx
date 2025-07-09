import React from 'react';

import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We're here to help and answer any question you might have.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-medicalBlue-dark mb-6">Contact Information</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <Phone className="w-6 h-6 mr-4 mt-1 text-medicalBlue" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:0757818500" className="hover:text-medicalGold">0757818500</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 mr-4 mt-1 text-medicalBlue" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:idc.hurlingham@gmail.com" className="hover:text-medicalGold">idc.hurlingham@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-medicalBlue" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Hurlingham, Nairobi, Kenya</p>
                  <a href="#" className="text-medicalBlue hover:text-medicalGold font-semibold mt-1 inline-block">Get Directions</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-medicalBlue-dark mb-6">Send Us a Message</h2>
            {/* Placeholder for a future contact form component */}
            <div className="text-gray-500">A contact form will be available here soon.</div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-medicalBlue-dark mb-6">Our Location</h2>
          {/* Placeholder for a future map component */}
          <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-gray-500">A map showing our clinic location will be here soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
