import './globals.css';

import { sen } from '@/app/fonts';

import { Providers } from '@/app/Providers';

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
