'use client';

export function About() {
  return (
    <section className="relative bg-[#F8EDE5] py-16">
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[600px]">
          <img
            src="/about-image.svg" // your image here
            alt="Hat and Notebook"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Left White Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white shadow-lg p-8 md:p-12 max-w-lg relative -mt-12 md:mt-0 md:-mr-20 z-10">
            {/* About Me */}
            <h3 className="text-md font-bold mb-4">ABOUT ME - EMMA NASHIPAE</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-8">
              I’m Emma Onditi, originally from Kenya, dedicated to helping{' '}
              <b>Immigrants</b> transition smoothly to <b>Austria</b> and{' '}
              <b>Europe</b>. With 13 years of personal experience navigating
              cultural adaptation, language barriers, and personal growth, I
              understand the journey firsthand. As an educator for 9+ years, I
              provide practical guidance to help you integrate, access
              opportunities, and build a fulfilling life abroad.
            </p>

            {/* Core Values */}
            <h4 className="text-md font-bold mb-4">CORE VALUES</h4>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="border-b border-[#DDDDDD] pb-2">
                <b>R.I.S.E</b> - Resilience, Inspiration, Self-awareness,
                Empowerment
              </li>
              <li className="border-b border-[#DDDDDD] pb-2">
                <b>S.O.A.R</b> - Self-discovery, Optimism, Action-taking,
                Resilience
              </li>
              <li className="border-b border-[#DDDDDD] pb-2">
                <b>E.A.C.H</b> - Thoughts Empower Action and Clarity
              </li>
              <li className="border-b border-[#DDDDDD] pb-2">
                <b>T.F.R.A</b> - Take Full Responsibility for Actions
              </li>
              <li className="border-b border-[#DDDDDD] pb-2">
                <b>L.I.V.E</b> - Learn, Invest, Value, Embrace
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-[#7B3939] text-white py-3 px-6 uppercase text-sm font-semibold hover:bg-[#592828] transition rounded-sm">
                Book a Free Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
