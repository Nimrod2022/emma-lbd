'use client';

import { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@/public/AccordionIcons';
export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Visa & Study Assistance',
      details: [
        'Step-by-step guidance for student & tourist visas',
        'University admissions support',
        'Visa application & interview preparation',
        'Personalized action plans for a smooth transition',
      ],
    },
    {
      title: 'Integration & Cultural Support',
      details: [
        'Cultural orientation for living abroad',
        'Community integration programs',
        'Language learning resources and support',
      ],
    },
    {
      title: 'Parenting & Childcare Mentorship',
      details: [
        'Support for parents navigating new childcare systems',
        'Education system advice and planning',
        'Building resilience for families in transitions',
      ],
    },
    {
      title: 'German Language & Personal Growth',
      details: [
        'Customized German language coaching',
        'Personal development plans',
        'Workshops and growth mentoring',
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#E7DBCC] md:py-8 lg:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 ">
          <img
            src="/services-image.svg"
            alt="Stationery and Coffee"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Right White Card */}
        <div className="md:w-[50%] md:h-[500px] xl:h-[640px] bg-white shadow-lg p-8 relative  md:-ml-20 z-10">
          {/* Heading */}
          <h3 className="md:text-[16px] xl:text-[18px] font-semibold ">HOW I CAN HELP YOU</h3>

          {/* Subheading */}
          <p className="md:my-[10px] xl:my-[20px] text-sm max-w-md">
            I offer personalized support in four key areas:
          </p>

          {/* Services Accordion */}
          <div className="">
            <h4 className="md:text-[16px] xl:text-[18px] font-medium md:mb-4 xl:mb-2">SERVICES</h4>
            {services.map((service, index) => (
              <div
                key={index}
                className=" border-b-[1.5px] border-opacity-85 border-[#DDDDDD]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center
                   md:text-[14px] xl:text-[16px] md:py-2 xl:py-4 text-left font-semibold text-black"
                >
                  <span>
                    {index + 1}. {service.title}
                  </span>

                  {openIndex === index ? (
                    <MinusCircleIcon />
                  ) : (
                    <PlusCircleIcon />
                  )}
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className=" pb-[10px] md:text-[12px] xl:text-[16px] text-black  space-y-2">
                    <ul className="list-disc pl-5 space-y-2">
                      {service.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#7B3939] text-white py-2 px-3 xl:py-3 xl:px-6 uppercase text-sm font-semibold hover:bg-[#592828] transition ">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
