import { permanentMarker, seaweedScript } from '@/app/fonts';


export function Contact() {
  return (
    <section className="bg-[#FAF6ED]  ">
      <div className="global_horizontal_margin mx-auto flex flex-col md:flex-row items-center ">
        {/* Left - Contact Form */}
        <div className=" md:w-1/2 md:py-[50px] lg:py-[60px] xl:py-[139px]">
          {/* Heading */}
          <h2 className="md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] xl:text-[40px] xl:leading-[60px] ">
            <span
              className={`${permanentMarker.className} text-[#7B3939] italic`}
            >
              START
            </span>{' '}
            <span className={`${seaweedScript.className} italic`}>
              Your Journey Today – Let's Connect!
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 w-[90%] md:py-[20px]  md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[24px]">
            Get the guidance and support you need for a smooth transition to
            Austria and beyond.
          </p>

          {/* Form */}
          <form className="flex md:text-[12px] xl:text-[16px] md:w-[100%] lg:w-[100%] xl:w-[90%] flex-col space-y-[5px]">
            <div>
              <label className="block mb-1 font-medium">
                Your Name <span className="text-[#7B3939]">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-black bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Your Phone Number <span className="text-[#7B3939]">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-black bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Your Email <span className="text-[#7B3939]">*</span>
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-black bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Additional Message
              </label>
              <textarea
                className="w-full border-b-2 border-black bg-transparent focus:outline-none resize-none"
                rows={1}
              />
            </div>

            <button
              type="submit"
              className="bg-[#7B3939] text-white md:py-2 md:px-6 lg:py-3 lg:px-6 mt-4 self-start text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center lg:pt-[50px]">
          <img
            src="/microphone.svg"
            alt="Microphone Image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
