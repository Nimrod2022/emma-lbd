import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#FBF5F5] h-full flex flex-col items-center ">
      <div
        className="md:text-3xl xl:text-5xl font-bold text-center 
      text-[#331c1b] md:pb-[12px] md:mt-[30px] lg:mt-[50px]"
      >
        <h1>Emma Onditi</h1>
      </div>

      <div className="w-full">
        <div className=" flex  ">
          {/* Left - Portrait */}
          <div className="md:justify-start">
            <img
              src="/profile-photo.png"
              alt="Emma Nashipae"
              className="md:w-[90%] sm:mt-[28px]  lg:mt-[90px] xl:mt-[60px]
               xl:w-[100%]  object-cover"
            />
          </div>

          {/* Right - Lifestyle Image */}
          <div
            className="relative hidden md:block md:mt-[20px] lg:mt-[43px]
          justify-end  xl:flex-shrink-0 xl:ml-auto"
          >
            <img
              src="/home-photo.png"
              alt="Lifestyle scene"
              className="object-cover lg:mt-[50px] xl:mt-[30px]"
            />

            {/* ✅ Center - Overlapping Card */}
            <div
              className=" absolute md:top-[20px] md:bottom-[20px]
            lg:top-[85px] lg:bottom-[40px] xl:top-[70px] xl:bottom-[40px]
             -translate-x-1/2  bg-[#FBFCFE]
             shadow-md z-10 md:size-[270px] lg:size-[350px] xl:size-[500px]
              text-center md:text-left"
            >
              <div
                className="md:pl-[20px]  md:pr-[15px] md:my-[20px] 
              lg:my-[30px] xl:my-[50px]"
              >
                <p
                  className="uppercase md:text-[12px] lg:text-[16px]
                 xl:text-[20px] font-normal "
                >
                  Welcome to LBD – Your Empowerment Partner
                </p>
                <p
                  className="md:text-[14px] lg:text-[18px] xl:text-[24px]
                 md:py-[14px] lg:py-[20px]  xl:py-[32px] font-medium
                  leading-relaxed"
                >
                  Studying Or Moving To Austria? Planning A European Tour?
                  Feeling Stuck? I Can Help You Navigate Transitions, Integrate
                  Smoothly, And Seize New Opportunities.
                </p>
                <button
                  className="bg-[#7B3939] text-white px-6 py-3 
                transition uppercase md:text-[12px] lg:text-[16px] xl:text-[18px]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
