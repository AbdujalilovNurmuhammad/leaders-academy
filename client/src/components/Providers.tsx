'use client';

import { ThemeProvider } from 'next-themes';
import { ApplyProvider } from './ApplyModal';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApplyProvider>{children}</ApplyProvider>
    </ThemeProvider>
  );
}
