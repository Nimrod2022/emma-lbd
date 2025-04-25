import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#FBF5F5] h-full flex flex-col items-center ">
      <div
        className="md:text-3xl xl:text-5xl font-bold text-center 
      text-[#331c1b] md:mt-[40px] md:pb-[12px] xl:mt-[100px]"
      >
        <h1>Emma Nashipae</h1>
      </div>

      <div className="w-full">
        <div className=" flex  ">
          {/* Left - Portrait */}
          <div className="md:justify-start">
            <img
              src="/profile-photo.png"
              alt="Emma Nashipae"
              className="md:w-[90%]  xl:w-[100%]  object-cover"
            />
          </div>

          {/* Right - Lifestyle Image */}
          <div className="relative hidden md:block mt-[43px]
          justify-end flex-shrink-0 ml-auto">
            {/*<img*/}
            {/*  src="/home-photo.png"*/}
            {/*  alt="Lifestyle scene"*/}
            {/*  className=" object-cover"*/}
            {/*/>*/}

            {/* ✅ Center - Overlapping Card */}
            {/*<div className=" absolute   top-[40px] bottom-[40px] -translate-x-1/2  bg-[#FBFCFE]  shadow-md z-10 w-[90%] md:size-[500px] text-center md:text-left">*/}
            {/*  <div className="md:pl-[20px] md:pr-[15px] my-[70px]">*/}
            {/*    <p className="uppercase md:text-[18px] font-normal ">*/}
            {/*      Welcome to LBD – Your Empowerment Partner*/}
            {/*    </p>*/}
            {/*    <p className="text-[24px] py-[40px] font-medium  leading-relaxed">*/}
            {/*      Studying Or Moving To Austria?*/}
            {/*      <br />*/}
            {/*      Planning A European Tour? Feeling <br />*/}
            {/*      Stuck? I Can Help You Navigate <br />*/}
            {/*      Transitions, Integrate Smoothly, <br /> And Seize New*/}
            {/*      Opportunities.*/}
            {/*    </p>*/}
            {/*    <button className="bg-[#7B3939] text-white px-6 py-3 transition uppercase text-[16px]">*/}
            {/*      Get Started*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
