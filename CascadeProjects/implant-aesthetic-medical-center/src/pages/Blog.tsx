import React from 'react';
import { Link } from 'react-router-dom';
import radiantSkin from '@/assets/radiantskin.png';
import botox from '@/assets/botox.webp';
import microneedling from '@/assets/microneedling.webp';
import skinboosters from '@/assets/skinboosters.webp';
import acnetreatment from '@/assets/acnetreatment.jpg';

const blogPosts = [
  {
    title: 'Achieving Radiant Skin: A Comprehensive Guide',
    date: 'July 8, 2024',
    excerpt: 'Discover professional tips and treatments for achieving a healthy, radiant glow. From daily routines to advanced therapies, we cover it all.',
    image: radiantSkin,
    alt: 'A woman with radiant skin',
    link: '#', // Placeholder link
  },
  {
    title: 'Botox 101: Everything You Need to Know',
    date: 'July 1, 2024',
    excerpt: 'Thinking about Botox? Our experts break down the benefits, what to expect during the procedure, and how to maintain your results.',
    image: botox,
    alt: 'Botox treatment illustration',
    link: '#', // Placeholder link
  },
  {
    title: 'The Magic of Microneedling: Rejuvenate Your Skin',
    date: 'June 25, 2024',
    excerpt: 'Learn how microneedling can stimulate collagen, reduce scars, and improve your skin\'s overall texture and firmness.',
    image: microneedling,
    alt: 'Microneedling procedure',
    link: '#', // Placeholder link
  },
  {
    title: 'Skin Boosters: The Secret to Deep Hydration',
    date: 'June 18, 2024',
    excerpt: 'Explore how skin boosters work to hydrate your skin from the inside out, improving elasticity and luminosity for a youthful look.',
    image: skinboosters,
    alt: 'Glowing skin after skin booster treatment',
    link: '#', // Placeholder link
  },
  {
    title: 'A Personalized Approach to Acne Treatment',
    date: 'June 10, 2024',
    excerpt: 'Tired of acne breakouts? We discuss personalized treatment plans that target the root cause of acne for clear, healthy skin.',
    image: acnetreatment,
    alt: 'Clear skin after acne treatment',
    link: '#', // Placeholder link
  },
];

export const Blog = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Our Blog</h1>
          <p className="mt-4 text-xl text-gray-600">Insights and advice on dental health and aesthetic treatments.</p>
        </div>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div key={post.title} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="md:col-span-1">
                <img src={post.image} alt={post.alt} className="rounded-lg w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-medicalBlue-dark mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link to={post.link} className="text-medicalBlue hover:text-medicalGold font-semibold">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
