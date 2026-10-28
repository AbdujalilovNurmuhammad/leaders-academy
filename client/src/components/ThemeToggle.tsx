'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Icon from './Icon';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === 'dark';
  return (
    <button
      aria-label="Tun va kun rejimini almashtirish"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="card grid h-11 w-11 place-items-center !rounded-xl text-lg transition hover:text-brand"
    >
      {mounted ? <Icon name={dark ? 'sun' : 'moon'} /> : <span className="h-4 w-4" />}
    </button>
  );
}
