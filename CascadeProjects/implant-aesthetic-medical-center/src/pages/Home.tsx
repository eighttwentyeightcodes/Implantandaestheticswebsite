import React from 'react';
import { DentalCarousel } from '../components/DentalCarousel';
import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicSummary } from '../components/ClinicSummary';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { NewsSection } from '../components/NewsSection';

export const Home = () => {
  return (
    <main>
      <DentalCarousel />
      <ClinicSummary />
      <ServicesSection />
      <AppointmentForm />
      <Testimonials />
      <NewsSection />
    </main>
  );
};
