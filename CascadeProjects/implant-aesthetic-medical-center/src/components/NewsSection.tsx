import React from 'react';

const blogPosts = [
  {
    title: 'The Benefits of Dental Implants',
    date: 'July 8, 2024',
    excerpt: 'Learn why dental implants are the best solution for missing teeth and how they can change your life...',
    link: '#',
  },
  {
    title: 'Top 5 Skin Care Myths Debunked',
    date: 'July 1, 2024',
    excerpt: 'Our expert dermatologists separate fact from fiction when it comes to your skin care routine...',
    link: '#',
  },
  {
    title: 'A Guide to Choosing the Right Sunscreen',
    date: 'June 25, 2024',
    excerpt: 'Protecting your skin from the sun is crucial. Here\'s how to choose the best sunscreen for your needs...',
    link: '#',
  },
];

export const NewsSection = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-medicalBlue-dark mb-10">Latest News & Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-medical transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-medicalBlue-dark mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-medicalBlue hover:text-medicalBlue-dark font-semibold">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
