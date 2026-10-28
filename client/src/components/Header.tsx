'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
import ApplyButton from './ApplyButton';
import { NAV } from '@/data/site';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-extrabold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white">L</span>
          Leaders Academy
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`rounded-xl px-3.5 py-2 font-semibold transition ${active(n.href) ? 'bg-brand/10 text-brand' : 'text-mut hover:bg-brand/10 hover:text-brand'}`}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ApplyButton className="btn btn-primary !px-6 !py-3 text-sm">Yozilish</ApplyButton>
          <button className="card grid h-11 w-11 place-items-center !rounded-xl lg:hidden" aria-label="Menyu" onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 lg:hidden">
            <div className="flex flex-col gap-1 pb-4">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold ${active(n.href) ? 'bg-brand/10 text-brand' : 'text-mut'}`}>{n.label}</Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
