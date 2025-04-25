import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaTiktok,
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export function SocialsBanner() {
  return (
    <section className="bg-[#663333]">
      <div
        className="global_horizontal_margin font-medium flex justify-between items-center
       text-[14px] xl:text-[16px] text-white w-full h-[50px]"
      >
        <div className="flex gap-x-[8px] items-center">
          <h2 className="hidden lg:block">Connect With Me On:</h2>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaX />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
        <div className="flex gap-x-[10px] lg:gap-x-[8px] items-center">
          <h2 className="hidden lg:block">Contact Me On:</h2>
          <div className="flex gap-x-[5px] items-center">
            <FaPhoneAlt className="text-[14px]" />
            <a href="tel:+254110061256">+254110061256</a>
          </div>
          <div className="flex gap-x-[5px] items-center">
            <MdEmail />
            <a href="mailto:learningspace76@gmail.com">
              learningspace76@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
