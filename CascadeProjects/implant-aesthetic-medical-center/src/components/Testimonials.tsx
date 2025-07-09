import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica M.',
    quote: 'The team at Implant & Aesthetic Medical Center is phenomenal. My dental implant procedure was painless, and the results are better than I ever imagined. Highly recommend!',
    stars: 5,
  },
  {
    name: 'David L.',
    quote: 'I had a series of dermatology treatments, and my skin has never looked better. The staff is professional, knowledgeable, and truly cares about their patients.',
    stars: 5,
  },
  {
    name: 'Samantha K.',
    quote: 'From the moment I walked in, I felt at ease. The clinic is beautiful, and the level of care is exceptional. I\'m so happy with my smile makeover!',
    stars: 5,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill='currentColor' />
    );
  }
  return stars;
};

export const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medicalBlue-dark">What Our Patients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Real stories from our satisfied patients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-medicalBlue-light p-8 rounded-lg shadow-md flex flex-col">
              <div className="flex mb-4">{renderStars(testimonial.stars)}</div>
              <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
              <p className="font-bold text-medicalBlue-dark text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="#" // TODO: Add Google Reviews link here
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-medicalGold hover:bg-medicalGold-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
};
