import React from 'react';
import familySmiling from '@/assets/familysmiling.jpg';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import { bounceFadeVariants, slideInLeft } from '@/components/bounceFadeVariants';

export const ClinicSummary = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-none mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <AnimatedOnScroll variants={slideInLeft}>
            <div className="relative h-full">
              <img src={familySmiling} alt="A happy family smiling" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll variants={bounceFadeVariants} delay={0.15}>
            <div className="bg-medicalBlue-dark text-white p-12 flex flex-col justify-center">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4 text-medicalGold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Welcome to Your New Smile</h2>
                <p className="text-lg leading-relaxed text-gray-200" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  At the Implant and Aesthetic Medical Center, we blend artistry with advanced technology to deliver unparalleled dental and dermatological care. Our team of dedicated professionals is committed to providing you with a comfortable and transformative experience. From state-of-the-art dental implants to rejuvenating skin treatments, we are here to help you look and feel your absolute best. Your journey to confidence starts here.
                </p>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};
