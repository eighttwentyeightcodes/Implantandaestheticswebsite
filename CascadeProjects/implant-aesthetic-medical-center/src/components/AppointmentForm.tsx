import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    procedure: '',
    date: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // Simulate backend submission
    setTimeout(() => {
      console.log('Form Data:', formData);
      // TODO: Link to backend database
      setSubmissionStatus('success');
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', procedure: '', date: '' });
    setSubmissionStatus('idle');
  };

  if (submissionStatus === 'success') {
    return (
      <div className="w-full max-w-2xl mx-auto my-12 p-8 bg-medicalGold-light rounded-lg shadow-medical border border-medicalGold text-center">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-medicalBlue-dark mb-4">Appointment Requested!</h2>
        <p className="text-gray-700 text-lg mb-6">Thank you, {formData.name}. We have received your request and will call you at {formData.phone} shortly to confirm your appointment.</p>
        <Button onClick={resetForm} className="bg-medicalBlue hover:bg-medicalBlue-dark text-white font-bold py-2 px-6 rounded-lg">
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 bg-medicalGold-light rounded-lg shadow-medical border border-medicalGold">
      <h2 className="text-3xl font-bold text-center text-medicalBlue-dark mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-medicalBlue-dark">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medicalBlue focus:border-medicalBlue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-medicalBlue-dark">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medicalBlue focus:border-medicalBlue"
          />
        </div>
        <div>
          <label htmlFor="procedure" className="block text-sm font-medium text-medicalBlue-dark">Select Procedure</label>
          <select
            id="procedure"
            name="procedure"
            value={formData.procedure}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medicalBlue focus:border-medicalBlue"
          >
            <option value="" disabled>--Please choose an option--</option>
            <option value="dental-implant">Dental Implant</option>
            <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
            <option value="dermatology">Dermatology</option>
            <option value="general-checkup">General Check-up</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-medicalBlue-dark">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medicalBlue focus:border-medicalBlue"
          />
        </div>
        <div className="text-center">
            <Button 
              type="submit" 
              className="w-full bg-medicalBlue hover:bg-medicalBlue-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center"
              disabled={submissionStatus === 'submitting'}
            >
              {submissionStatus === 'submitting' ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Requesting...</>
              ) : (
                'Request Appointment'
              )}
            </Button>
        </div>
      </form>
    </div>
  );
};
