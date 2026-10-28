import Link from 'next/link';
import Icon, { type IconKey } from './Icon';
import ApplyButton from './ApplyButton';
import { NAV, SITE } from '@/data/site';

const SOCIALS: { icon: IconKey; label: string; href: string }[] = [
  { icon: 'telegram', label: 'Telegram', href: SITE.telegram },
  { icon: 'instagram', label: 'Instagram', href: SITE.instagram },
  { icon: 'youtube', label: 'YouTube', href: SITE.youtube },
  { icon: 'facebook', label: 'Facebook', href: SITE.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-[#c4d3f5]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-extrabold text-white">Leaders Academy</div>
          <p className="mt-3 max-w-sm opacity-80">Zamonaviy kasblarni amaliyot orqali o‘rgatamiz. 4 oyda ish topadigan mutaxassis bo‘ling.</p>
          <ApplyButton className="btn btn-primary mt-6">Kursga yozilish</ApplyButton>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white transition hover:-translate-y-1 hover:-rotate-6 hover:bg-brand">
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-bold text-white">Sahifalar</div>
          <div className="flex flex-col gap-2.5 opacity-80">
            {NAV.map((n) => <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>)}
          </div>
        </div>
        <div>
          <div className="mb-4 font-bold text-white">Aloqa</div>
          <div className="flex flex-col gap-2.5 opacity-80">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            <span>{SITE.hours}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm opacity-60">© 2026 Leaders Academy. Barcha huquqlar himoyalangan.</div>
    </footer>
  );
}
