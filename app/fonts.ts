import { Sen, Permanent_Marker, Seaweed_Script } from 'next/font/google';

// Base font for the whole site
export const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// For the "START" word
export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// For the sentence "Your Journey Today..."
export const seaweedScript = Seaweed_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
