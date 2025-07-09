import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, CalendarPlus } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await fetch('http://localhost:3001/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Server response:', result);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally, set an error state to show a message to the user
      setSubmissionStatus('idle'); // Reset to allow another attempt
      alert('Failed to book appointment. Please try again later.');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', procedure: '', date: '' });
    setSubmissionStatus('idle');
  };

    if (submissionStatus === 'success') {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:grid md:grid-cols-3">
          <div className="bg-medicalBlue-dark p-8 text-white flex flex-col justify-center items-center md:rounded-l-lg">
            <CheckCircle className="w-24 h-24 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold text-center">Request Sent!</h2>
          </div>
          <div className="p-8 md:col-span-2 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-medicalBlue-dark mb-4">Thank You, {formData.name}!</h3>
            <p className="text-gray-700 text-lg mb-6">We have received your request and will call you at <strong>{formData.phone}</strong> shortly to confirm your appointment.</p>
            <Button onClick={resetForm} className="bg-medicalGold hover:bg-medicalGold-dark text-white font-bold py-2 px-6 rounded-lg">
              Book Another Appointment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:grid md:grid-cols-3">
        <div className="bg-medicalBlue-dark p-8 text-white flex flex-col justify-center items-center md:rounded-l-lg">
          <CalendarPlus className="w-24 h-24 text-medicalGold mb-4" />
          <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
          <p className="text-center mt-2 text-medicalBlue-light">Schedule your visit with us today!</p>
        </div>
        <div className="p-8 md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                <option value="" disabled>-- Select a Service --</option>
                <optgroup label="Dental Services">
                  <option value="dental-checkup">Routine Dental Check-up</option>
                  <option value="dental-implant">Dental Implant Consultation</option>
                  <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                  <option value="teeth-whitening">Teeth Whitening</option>
                  <option value="orthodontics">Orthodontics (Braces/Invisalign)</option>
                </optgroup>
                <optgroup label="Dermatology & Aesthetics">
                  <option value="dermatology-consultation">Dermatology Consultation</option>
                  <option value="botox-fillers">Botox & Fillers</option>
                  <option value="microneedling">Microneedling</option>
                  <option value="skin-boosters">Skin Boosters</option>
                  <option value="acne-treatment">Acne Treatment</option>
                </optgroup>
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
            <div className="text-right pt-2">
                <Button 
                  type="submit" 
                  className="bg-medicalGold hover:bg-medicalGold-dark text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform hover:scale-105 flex items-center justify-center ml-auto"
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
      </div>
    </div>
  );
};
