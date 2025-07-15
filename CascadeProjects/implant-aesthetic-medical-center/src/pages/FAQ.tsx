import React from 'react';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import bounceFadeVariants from '@/components/bounceFadeVariants';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    category: 'General Questions',
    questions: [
      { q: 'What are your clinic hours?', a: 'Our clinic is open Monday to Friday from 9:00 AM to 6:00 PM, and on Saturday from 9:00 AM to 2:00 PM.' },
      { q: 'Do I need a referral to book an appointment?', a: 'No, a referral is not necessary. You can book an appointment with us directly for any of our services.' },
      { q: 'What should I bring to my first appointment?', a: 'Please bring a valid ID, your insurance information (if applicable), and a list of any medications you are currently taking.' },
    ],
  },
  {
    category: 'Dental Implants',
    questions: [
      { q: 'Am I a suitable candidate for dental implants?', a: 'Most people with missing teeth are good candidates. A thorough consultation, including a jawbone health assessment, is needed to confirm suitability.' },
      { q: 'Is the dental implant procedure painful?', a: 'The procedure is performed under local anesthesia, so you will not feel pain. We also offer sedation options for anxious patients. Some discomfort is normal during recovery, but it is manageable with medication.' },
      { q: 'How long do dental implants last?', a: 'With proper care and regular dental check-ups, dental implants can last a lifetime. They are a durable, long-term solution for tooth loss.' },
    ],
  },
  {
    category: 'Dermatology & Aesthetics',
    questions: [
      { q: 'How long do the effects of Botox last?', a: 'The effects of Botox typically last for 3 to 4 months. Results may vary depending on the individual and the area treated.' },
      { q: 'Is there any downtime after a microneedling session?', a: 'You may experience some redness and mild swelling for 24-48 hours after the procedure, but most patients can return to their normal activities immediately.' },
    ],
  },
  {
    category: 'Appointments & Billing',
    questions: [
      { q: 'How do I book an appointment?', a: 'You can book an appointment by calling us at 0757818500, emailing us, or using the appointment request form on our website.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, credit/debit cards, and mobile money payments. We also work with major insurance providers.' },
    ],
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-3 pl-2 text-gray-600">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-medicalBlue-dark sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-600">Your questions, answered.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqData.map((categoryItem, idx) => (
            <AnimatedOnScroll key={categoryItem.category} variants={bounceFadeVariants} delay={idx * 0.1}>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-medicalBlue mb-6">{categoryItem.category}</h2>
                <div className="space-y-2">
                  {categoryItem.questions.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};
