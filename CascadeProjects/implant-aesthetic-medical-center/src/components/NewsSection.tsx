import React from 'react';
import { Link } from 'react-router-dom';
import radiantSkin from '@/assets/radiantskin.png';
import botox from '@/assets/botox.webp';
import microneedling from '@/assets/microneedling.webp';

const blogPosts = [
  {
    title: 'Achieving Radiant Skin: A Guide',
    date: 'July 8, 2024',
    excerpt: 'Discover professional tips and treatments for achieving a healthy, radiant glow...',
    image: radiantSkin,
    link: '/blog',
  },
  {
    title: 'Botox 101: Everything You Need to Know',
    date: 'July 1, 2024',
    excerpt: 'Thinking about Botox? Our experts break down the benefits, process, and results...',
    image: botox,
    link: '/blog',
  },
  {
    title: 'The Magic of Microneedling',
    date: 'June 25, 2024',
    excerpt: 'Learn how microneedling can rejuvenate your skin, reduce scars, and improve texture...',
    image: microneedling,
    link: '/blog',
  },
];

import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';

export const NewsSection = () => {
  return (
    <div className="w-full py-12 bg-medicalBlue-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-medicalBlue-dark mb-10">Latest News & Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedOnScroll key={index} variants={bounceFadeVariants} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <AnimatedOnScroll variants={bounceFadeVariants} delay={0.05}>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                </AnimatedOnScroll>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-medicalBlue-dark mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <Link to={post.link} className="text-medicalBlue hover:text-medicalBlue-dark font-semibold self-start">Read More &rarr;</Link>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};
