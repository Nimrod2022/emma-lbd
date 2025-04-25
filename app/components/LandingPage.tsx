'use client';

import { SocialsBanner } from '@/app/components/SocialsBanner';
import { NavbarComponent } from '@/app/components/NavbarComponent';
import { Hero } from '@/app/components/Hero';

export function LandingPage() {
  return (
    <div className="lg:h-screen flex flex-col">
      {/* Socials + Navbar */}
      <div className="hidden md:block">
        <SocialsBanner />
      </div>
      <NavbarComponent />

      {/* Hero fills remaining height */}
      <div className=" flex-grow">
        <Hero />
      </div>
    </div>
  );
}
