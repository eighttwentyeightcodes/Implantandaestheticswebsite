import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>;
};
