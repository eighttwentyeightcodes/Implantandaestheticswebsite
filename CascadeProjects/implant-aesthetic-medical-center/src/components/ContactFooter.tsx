import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

export const ContactFooter = () => {
  return (
    <footer className="w-full bg-medicalBlue-dark text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-6 text-medicalGold">Implant & Aesthetic Medical Center</h3>
        <p className="text-gray-300 max-w-2xl mb-8">Your partners in health and beauty. We are dedicated to providing top-tier medical and aesthetic services.</p>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <a href="tel:0757818500" aria-label="Call Us" className="text-white hover:text-medicalGold transition-colors"><Phone className="w-7 h-7" /></a>
          <a href="mailto:idc.hurlingham@gmail.com" aria-label="Email Us" className="text-white hover:text-medicalGold transition-colors"><Mail className="w-7 h-7" /></a>
          <a href="http://www.idcafrica.com" target="_blank" rel="noopener noreferrer" aria-label="Our Website" className="text-white hover:text-medicalGold transition-colors"><Globe className="w-7 h-7" /></a>
          <a href="#" aria-label="Our Location" className="text-white hover:text-medicalGold transition-colors"><MapPin className="w-7 h-7" /></a>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <a href="#" aria-label="Facebook" className="text-white hover:text-medicalGold transition-colors"><Facebook className="w-7 h-7" /></a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-medicalGold transition-colors"><Twitter className="w-7 h-7" /></a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-medicalGold transition-colors"><Instagram className="w-7 h-7" /></a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 border-t border-medicalBlue pt-4">
        <p>&copy; 2024 Implant & Aesthetic Medical Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
