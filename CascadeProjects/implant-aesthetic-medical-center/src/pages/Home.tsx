import React from 'react';

import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicSummary } from '../components/ClinicSummary';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { NewsSection } from '../components/NewsSection';

export const Home = () => {
  return (
    <main>

      <ClinicSummary />
      <ServicesSection />
      <AppointmentForm />
      <Testimonials />
      <NewsSection />
    </main>
  );
};
