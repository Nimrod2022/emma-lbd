import './globals.css';

import { Sen } from 'next/font/google';
import { Providers } from '@/app/Providers';

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sen.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
