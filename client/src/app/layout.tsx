import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';

export const metadata: Metadata = {
  title: { default: 'Leaders Academy – kelajak liderlari shu yerda', template: '%s · Leaders Academy' },
  description: 'IT, tillar va aniq fanlar bo‘yicha o‘quv markazi: Frontend, Backend, Sun’iy intellekt, Rus, Ingliz, Turk tillari va Matematika.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Faq />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
