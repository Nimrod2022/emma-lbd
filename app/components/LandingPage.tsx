'use client';
import { SocialsBanner } from '@/app/components/SocialsBanner';
import { NavbarComponent } from '@/app/components/NavbarComponent';

export function LandingPage() {
  return (
    <div>
      <div className="hidden md:block">
        <SocialsBanner />
      </div>
      <NavbarComponent />
    </div>
  );
}
