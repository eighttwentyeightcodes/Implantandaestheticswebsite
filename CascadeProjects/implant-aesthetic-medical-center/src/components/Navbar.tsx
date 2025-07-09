import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Dental Implants', path: '/dental-implants' },
  { title: 'Dental Services', path: '/dental-services' },
  { title: 'Dermatology', path: '/dermatology-services' },
  { title: 'About Us', path: '/about-us' },
  { title: 'Patient Resources', path: '/patient-resources' },
  { title: 'Blog', path: '/blog' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Contact Us', path: '/contact-us' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Clinic Logo" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="text-gray-600 hover:bg-medicalBlue-extralight hover:text-medicalBlue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-medicalBlue-dark hover:bg-gray-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:bg-medicalBlue-extralight hover:text-medicalBlue-dark block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
