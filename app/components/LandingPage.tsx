'use client';

import { SocialsBanner } from '@/app/components/SocialsBanner';
import { NavbarComponent } from '@/app/components/NavbarComponent';
import { Hero } from '@/app/components/Hero';
import { Contact } from '@/app/components/Contact';

export function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Sticky Header (Banner + Navbar) */}
      <div className="sticky top-0 z-50">
        <div className="hidden md:block">
          <SocialsBanner />
        </div>
        <NavbarComponent />
      </div>

      {/* Hero */}
      <div className="flex-grow">
        <Hero />
      </div>

      {/* Contact */}
      <div>
        <Contact />
      </div>
    </div>
  );
}
