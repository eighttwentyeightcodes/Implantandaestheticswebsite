import React from 'react';
import { DentalCarousel } from '../components/DentalCarousel';
import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicSummary } from '../components/ClinicSummary';
import { ServicesSection } from '../components/ServicesSection';
import { NewsSection } from '../components/NewsSection';

export const Home = () => {
  return (
    <main>
      <DentalCarousel />
      <AppointmentForm />
      <ClinicSummary />
      <ServicesSection />
      <NewsSection />
    </main>
  );
};
