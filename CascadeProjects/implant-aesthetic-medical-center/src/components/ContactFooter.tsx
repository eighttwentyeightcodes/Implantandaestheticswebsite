import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { XIcon } from './icons/XIcon';
import tiktokIcon from '@/assets/tiktokicon.png';

interface LinkItem {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

interface FooterDropDownProps {
  title: string;
  links: LinkItem[];
  isContact?: boolean;
}

const FooterDropDown: React.FC<FooterDropDownProps> = ({ title, links, isContact = false }) => (
  <div className="w-full md:w-auto">
    <h4 className="font-bold text-medicalGold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {isContact ? (
            <a href={link.href} className="text-gray-300 hover:text-medicalGold transition-colors flex items-center">
              {link.icon}
              <span className="ml-2">{link.text}</span>
            </a>
          ) : (
            <Link to={link.href} className="text-gray-300 hover:text-medicalGold transition-colors">
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const ContactFooter = () => {
  const allPages = [
    { href: '/', text: 'Home' },
    { href: '/dental-implants', text: 'Dental Implants' },
    { href: '/dental-services', text: 'Dental Services' },
    { href: '/dermatology-services', text: 'Dermatology Services' },
    { href: '/about-us', text: 'About Us' },
    { href: '/patient-resources', text: 'Patient Resources' },
    { href: '/blog', text: 'Blog' },
    { href: '/faq', text: 'FAQ' },
    { href: '/contact-us', text: 'Contact Us' },
  ];

  const quickLinks = [
    { href: '/contact-us', text: 'Book Appointment' },
    { href: '/faq', text: 'FAQ' },
    { href: '/patient-resources', text: 'Patient Resources' },
    { href: '/blog', text: 'Our Blog' },
  ];

  const contactInfo = [
    { href: 'tel:0757818500', text: '0757 818 500', icon: <Phone size={18}/> },
    { href: 'mailto:idc.hurlingham@gmail.com', text: 'idc.hurlingham@gmail.com', icon: <Mail size={18}/> },
    { href: '#', text: 'Nairobi, Hurlingham', icon: <MapPin size={18}/> }, // Replace # with google maps link
  ];

  return (
    <footer className="w-full bg-medicalBlue-dark text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Map Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-4 text-medicalGold">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817213893366!2d36.79975891534486!3d-1.283559999064197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5b1116c43%3A0xdf533c69b47e209a!2sHurlingham%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1628588358911!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <FooterDropDown title="All Pages" links={allPages} />
          <FooterDropDown title="Quick Links" links={quickLinks} />
          <FooterDropDown title="Contact Us" links={contactInfo} isContact={true} />
        </div>

        {/* Social Media and Copyright */}
        <div className="text-center border-t border-medicalBlue pt-4">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-medicalGold transition-colors"><Facebook className="w-7 h-7 text-white" /></a>
            <a href="#" aria-label="X" className="hover:text-medicalGold transition-colors"><XIcon className="w-7 h-7 text-white" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-medicalGold transition-colors"><Instagram className="w-7 h-7 text-white" /></a>
            <a href="#" aria-label="TikTok" className="hover:opacity-80 transition-opacity"><img src={tiktokIcon} alt="TikTok" className="w-7 h-7 object-cover" /></a>
          </div>
          <p className="text-gray-400">&copy; 2025 Implant & Aesthetic Medical Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
