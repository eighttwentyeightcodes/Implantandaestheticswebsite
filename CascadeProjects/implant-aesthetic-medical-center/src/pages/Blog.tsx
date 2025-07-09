import React from 'react';

import implantProcedure from '@/assets/implant-procedure.jpg';
import radiantSkin from '@/assets/radiantskin.png';
import expertCare from '@/assets/expertcare.JPG';

const blogPosts = [
  {
    title: 'The Top 5 Benefits of Dental Implants',
    date: 'July 9, 2024',
    excerpt: 'Dental implants are the gold standard for replacing missing teeth. Discover the key benefits, from improved appearance to better oral health.',
    image: implantProcedure,
    alt: 'A dental implant model',
    link: '#',
  },
  {
    title: 'Your Guide to Achieving Radiant Skin This Season',
    date: 'July 2, 2024',
    excerpt: 'Unlock a glowing complexion with our expert tips on skincare routines, professional treatments, and lifestyle habits for healthy skin.',
    image: radiantSkin,
    alt: 'A woman with radiant skin',
    link: '#',
  },
  {
    title: 'Why Choosing an Experienced Practitioner Matters',
    date: 'June 26, 2024',
    excerpt: 'When it comes to aesthetic and dental procedures, the skill of your practitioner is crucial. Learn why experience is key to achieving safe and beautiful results.',
    image: expertCare,
    alt: 'A medical professional consulting with a patient',
    link: '#',
  },
];

export const Blog = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">From Our Blog</h1>
          <p className="mt-4 text-xl text-gray-600">The latest news, tips, and insights from our experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <img src={post.image} alt={post.alt} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-medicalBlue-dark mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href={post.link} className="mt-auto font-semibold text-medicalBlue hover:text-medicalGold transition-colors">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
