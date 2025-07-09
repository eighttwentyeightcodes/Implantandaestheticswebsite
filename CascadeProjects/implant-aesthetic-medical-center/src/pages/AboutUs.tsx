import React from 'react';
import drAhmed from '@/assets/dr.ahmed.jpg';

export const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-medicalBlue-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">About Implant & Aesthetic Medical Center</h1>
          <p className="mt-4 text-xl text-gray-700">Science meets beauty, and care meets compassion.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Company Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">About Our Company</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Implant and Aesthetic Medical Center is a premier healthcare facility dedicated to providing comprehensive and specialized medical services in dental care. With state-of-the-art technology, a team of highly qualified professionals, and a commitment to patient-centered care, we strive to enhance the health, confidence, and well-being of our patients.
          </p>
        </div>

        {/* CEO Message Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-6 text-center">Message from the CEO</h2>
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/3 text-center">
              <img src={drAhmed} alt="Dr. Ahmed Elbanna" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
              <h3 className="text-2xl font-bold text-medicalGold">Dr. Ahmed Elbanna</h3>
              <p className="text-gray-600">CEO & Medical Director</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 italic mb-4">
                "At Implant & Aesthetic Medical Center, we believe that healthcare is not just about treating conditions — it’s about caring for people. Our mission has always been to provide exceptional, patient-centered care in a safe, welcoming environment..."
              </p>
              <p className="text-lg text-gray-700">
                As the CEO and founder, my vision is to create a center where excellence meets empathy — a place where every patient feels heard, respected, and empowered. We continuously invest in technology, staff training, and clinical excellence to ensure the highest standards of care. Thank you for trusting us. We look forward to being part of your health and wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy and Values Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">Our Corporate Philosophy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-medicalGold">Mission</h3>
                <p className="text-lg text-gray-700">To deliver exceptional medical and aesthetic solutions tailored to the unique needs of our patients, ensuring quality, safety, and satisfaction at every step.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-medicalGold">Vision</h3>
                <p className="text-lg text-gray-700">To be a leading healthcare provider in dental services, recognized for excellence, innovation, and compassionate care.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">Our Core Values</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="font-semibold"><strong>Excellence:</strong> We are committed to the highest standards of clinical care.</li>
              <li className="font-semibold"><strong>Patient-Centered Care:</strong> Your needs, comfort, and satisfaction are at the heart of our practice.</li>
              <li className="font-semibold"><strong>Comfort & Compassion:</strong> We create a warm, comfortable environment where patients are treated with respect and empathy.</li>
              <li className="font-semibold"><strong>Integrity:</strong> We operate with honesty, transparency, and professionalism.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-medicalBlue-extralight p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4 text-center">Why Choose Us</h2>
          <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
            <li><strong>Experienced Professionals:</strong> Our team consists of skilled and qualified dentists and aesthetic practitioners.</li>
            <li><strong>Personalized Care:</strong> We create customized treatment plans that deliver the best results.</li>
            <li><strong>State-of-the-Art Technology:</strong> We use advanced equipment to ensure safety, comfort, and optimal outcomes.</li>
            <li><strong>Comfortable Environment:</strong> Our clinic is designed to provide a relaxing and stress-free experience.</li>
            <li><strong>Affordable Options:</strong> We offer competitive pricing and flexible payment plans.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
