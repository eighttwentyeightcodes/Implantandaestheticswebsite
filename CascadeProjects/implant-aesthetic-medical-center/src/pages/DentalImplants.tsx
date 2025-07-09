import React from 'react';

import { CheckCircle } from 'lucide-react';

const benefits = [
  'Permanent solution for missing teeth',
  'Looks, feels, and functions like natural teeth',
  'Prevents bone loss and preserves facial structure',
  'Improves speech and chewing ability',
  'Boosts confidence with a restored smile',
  'High success rate and long-term durability',
];

const processSteps = [
  { title: '1. Consultation and Planning', description: 'We conduct a comprehensive examination, including 3D imaging, to create a personalized treatment plan.' },
  { title: '2. Implant Placement', description: 'The titanium implant is surgically placed into the jawbone in a precise and minimally invasive procedure.' },
  { title: '3. Healing and Osseointegration', description: 'The implant fuses with the jawbone over a few months, creating a strong and stable foundation.' },
  { title: '4. Final Restoration', description: 'Once healed, a custom-made crown is attached to the implant, completing your new, beautiful smile.' },
];

export const DentalImplants = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-medicalBlue-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Restore Your Smile with Dental Implants</h1>
          <p className="mt-4 text-xl text-gray-700">The most advanced and permanent solution for missing teeth.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What are Dental Implants? */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">What Are Dental Implants?</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            A dental implant is a small, biocompatible titanium post that is surgically placed into the jawbone to replace the root of a missing tooth. It serves as a strong foundation for a replacement tooth (crown), bridge, or denture, providing a durable and natural-looking solution that can last a lifetime with proper care.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-6 text-center">Benefits of Dental Implants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-medicalGold flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-8 text-center">Our Dental Implant Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-medicalBlue mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-medicalBlue-extralight p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">Advanced Technology for Precision and Comfort</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We utilize state-of-the-art technology, including 3D cone-beam computed tomography (CBCT) for precise planning and guided surgery techniques to ensure accurate implant placement, optimal results, and a comfortable experience for our patients.
          </p>
        </div>
      </div>
    </div>
  );
};
