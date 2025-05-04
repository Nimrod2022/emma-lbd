'use client';

export function About() {
  return (
    <section className="relative bg-[#F8EDE5] md:py-[50px]  ">
      <div className="flex flex-col md:flex-row-reverse items-center ">
        {/* Right Image */}
        <div className="w-full md:w-1/2  ">
          <img
            src="/about-image.svg"
            alt="Hat and Notebook"
            className="object-cover w-full md:h-[500px] xl:h-[720px]"
          />
        </div>

        {/* Left White Card */}
        <div className="md:w-1/2   flex justify-center">
          <div
            className="bg-white text-[14px] xl:text-[16px] xl:leading-[32px]  xl:w-[650px] shadow-lg
          md:px-[20px] xl:px-[40px] md:py-[10px] xl:py-[20px] relative md:absolute md:right-[40%] xl:right-[605px] md:top-1/2 md:-translate-y-1/2 md:ml-[50px]  z-10"
          >
            {/* About Me */}
            <h3 className="text-[14px] lg:text-[18px] font-medium ">
              ABOUT ME - EMMA ONDITI
            </h3>
            <p className="my-[5px] lg:my-[10px]">
              I’m Emma Onditi, originally from Kenya, dedicated to helping{' '}
              <b>Immigrants</b> transition smoothly to <b>Austria</b> and{' '}
              <b>Europe</b>. With 13 years of personal experience navigating
              cultural adaptation, language barriers, and personal growth, I
              understand the journey firsthand. As an educator for 9+ years, I
              provide practical guidance to help you integrate, access
              opportunities, and build a fulfilling life abroad.
            </p>

            {/* Core Values */}
            <h4 className="text-[14px] lg:text-[18px] font-medium mb-[5px] lg:mb-[10px]">
              CORE VALUES
            </h4>

            <ul className="space-y-[5px] lg:space-y-[10px]">
              <li className="border-b font-normal border-[#DDDDDD] ">
                <b className="font-medium">R.I.S.E</b> - Resilience,
                Inspiration, Self-awareness, Empowerment
              </li>
              <li className="border-b font-normal border-[#DDDDDD]">
                <b className="font-medium">S.O.A.R</b> - Self-discovery,
                Optimism, Action-taking, Resilience
              </li>
              <li className="border-b font-normal border-[#DDDDDD]">
                <b className="font-medium">E.A.C.H</b> - Thoughts Empower Action
                and Clarity
              </li>
              <li className="border-b font-normal border-[#DDDDDD]">
                <b className="font-medium">T.F.R.A</b> - Take Full
                Responsibility for Actions
              </li>
              <li className="border-b font-normal border-[#DDDDDD]">
                <b className="font-medium">L.I.V.E</b> - Learn, Invest, Value,
                Embrace
              </li>
            </ul>

            {/* CTA Button */}
            <div className="md:mt-[10px] lg:mt-[22px] ">
              <button className="bg-[#7B3939] text-white  md:px-3 md:py-2  lg:py-3 lg:px-6 uppercase md:text-[12px] lg:text-[16px]font-semibold hover:bg-[#592828] transition ">
                Book a Free Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
