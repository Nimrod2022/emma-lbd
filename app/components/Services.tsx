'use client';

import { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@/public/AccordionIcons';
export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Visa & Study Assistance',
      details: [
        'Guidance through university and school admissions',
        'Step-by-step visa application support',
        'Help filling out visa forms and preparing for embassy/university interviews',
        'Personalized action plans for your situation',
        'Help maneuver local systems: integration, language, essential services',
        'Understanding of German documents/letters',
        'Support integrating into local communities and meeting new people',
      ],
    },
    {
      title: 'Mentorship for Parents and Educators age 3-15',
      details: [],
      subSections: [
        {
          subheading: 'Mobile Childcare Services:',
          points: [
            "Give parents time to recharge while children enjoy safe, enriching activities including excursions, sports, creative workshops, playdates, and educational trips.'",
          ],
        },
        {
          subheading: 'Homework and Learning Support for Kids (Ages 6–11):',
          points: [
            'Tutoring, building effective study habits, boosting confidence, and overcoming language barriers.',
          ],
        },
        {
          subheading: 'Parenting Mentorship:',
          points: [
            'Helping parents set practical, realistic goals for their children’s success without overwhelm.',
          ],
        },
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
    <section className="relative bg-[#E7DBCC] md:py-8 lg:py-[50px]">
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
        <div
          className="md:w-[50%] md:h-[530px] xl:h-[680px] bg-white
        shadow-lg md:p-4 lg:p-8 xl:p-7 relative  md:-ml-20 z-10"
        >
          {/* Heading */}
          <h3 className="md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold ">
            HOW I CAN HELP YOU
          </h3>

          {/* Subheading */}
          <p className="md:my-[5px] lg:my-[10px] xl:my-[16px] text-[16px] max-w-md">
            I offer personalized support in four key areas:
          </p>

          {/* Services Accordion */}
          <div className="">
            <h4 className="md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium mb-2">
              SERVICES
            </h4>
            {services.map((service, index) => (
              <div
                key={index}
                className=" border-b-[1.5px] border-opacity-85 border-[#DDDDDD]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center
                   md:text-[14px] xl:text-[16px] md:py-1 xl:py-4 text-left font-semibold text-black"
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
                  className={`overflow-hidden  ${
                    openIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className=" pb-[10px] md:text-[12px] xl:text-[16px] text-black  space-y-1">
                    {service.details.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2">
                        {service.details.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {service.subSections &&
                      service.subSections.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <h5 className="font-semibold md:text-[12px] xl:text-[16px] pl-5">
                            {sub.subheading}
                          </h5>
                          <ul className="list-disc pl-8 ">
                            {sub.points.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="md:mt-2 lg:mt-4">
            <button className="bg-[#7B3939] text-white md:py-2 md:px-3 xl:py-3 xl:px-6 uppercase text-sm font-semibold hover:bg-[#592828] transition ">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
