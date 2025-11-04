import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability."
    },
    {
      question: "Does the hotel offer airport transportation?",
      answer: "Yes, we provide airport transportation services. Please contact our concierge desk to arrange pickup and drop-off times. Additional charges may apply."
    },
    {
      question: "Does the hotel have dining options?",
      answer: "We feature multiple dining options including our signature restaurant, casual cafe, and room service available 24/7. Our culinary team specializes in both local and international cuisine."
    },
    {
      question: "Do you host weddings or special events?",
      answer: "Yes, we have dedicated event spaces perfect for weddings, corporate events, and special celebrations. Our events team will work with you to create a memorable experience tailored to your needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#f6f4e9] flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[16px] tracking-widest text-gray-800 mb-6 font-['Cormorant_Garamond']">FAQ</p>
          <h1 className="text-5xl text-gray-900 font-['Satoshi-Light']">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-sm overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-4 flex justify-between items-center hover:bg-stone-50 transition-colors"
              >
                <span className="text-lg font-['Satoshi-Light'] text-left text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all font-['Satoshi-Light'] duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}