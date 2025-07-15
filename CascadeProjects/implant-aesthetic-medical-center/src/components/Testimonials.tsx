import React from 'react';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Faalaq Ahmedali',
    quote: 'I had a dental implant done by Dr. Ahmed and couldn’t be happier with the experience. He explained the process clearly, made me feel at ease, and the results look and feel completely natural. The clinic is clean, calming, and the staff is very friendly. Highly recommend Dr. Ahmed and his team for anyone considering implants!',
    stars: 5,
  },
  {
    name: 'Ahmed Allawy',
    quote: 'I highly recommend Implant & Aesthetic medical center. They professionally and effectively treated all my teeth problems. I had a wisdom tooth surgical extraction, a root canal treatment, polishing, and filling for another tooth. All operations went really well AlhamduLELLAH. The whole team was very supportive and helpful throughout the treatment time and Dr. Ahmed took all the time to make sure I understand my diagnosis and my operations well ahead of it. I’d highly recommend their services.',
    stars: 5,
  },
  {
    name: 'Amal Radwan',
    quote: 'Best experience with both implant and Aesthetic for both of my daughters. The laser sessions in the Aesthetic clinic have been extremely easy, smooth, painless and reasonably priced. The doctor is very attentive and proactive. Thank you and much appreciation for following up. We are so happy with the services.',
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
          {testimonials.map((testimonial, idx) => (
            <AnimatedOnScroll key={testimonial.name} variants={bounceFadeVariants} delay={idx * 0.1}>
              <div className="bg-medicalBlue-light p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex mb-4">{renderStars(testimonial.stars)}</div>
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                <p className="font-bold text-medicalBlue-dark text-right">- {testimonial.name}</p>
              </div>
            </AnimatedOnScroll>
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
