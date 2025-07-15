import React from 'react';

import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicSummary } from '../components/ClinicSummary';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { NewsSection } from '../components/NewsSection';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';

export const Home = () => {
  return (
    <main>
      <AnimatedOnScroll variants={bounceFadeVariants}><ClinicSummary /></AnimatedOnScroll>
      <AnimatedOnScroll variants={bounceFadeVariants} delay={0.1}><ServicesSection /></AnimatedOnScroll>
      <AnimatedOnScroll variants={bounceFadeVariants} delay={0.2}><AppointmentForm /></AnimatedOnScroll>
      <AnimatedOnScroll variants={bounceFadeVariants} delay={0.3}><Testimonials /></AnimatedOnScroll>
      <AnimatedOnScroll variants={bounceFadeVariants} delay={0.4}><NewsSection /></AnimatedOnScroll>
    </main>
  );
};
