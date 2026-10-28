import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import ApplicationForm from '@/components/ApplicationForm';
import Icon, { type IconKey } from '@/components/Icon';
import { SITE } from '@/data/site';

export const metadata: Metadata = { title: 'Bog‘lanish' };

const ITEMS: { icon: IconKey; label: string; value: string; href?: string }[] = [
  { icon: 'phone', label: 'Telefon', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'telegram', label: 'Telegram', value: '@leaders_academy', href: SITE.telegram },
  { icon: 'instagram', label: 'Instagram', value: '@leaders_academy__1', href: SITE.instagram },
  { icon: 'clock', label: 'Ish vaqti', value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Bog‘lanish" text="Ariza qoldiring, 15 daqiqada qo‘ng‘iroq qilamiz." />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-5">
        <div className="grid content-start gap-4 lg:col-span-2">
          {ITEMS.map((x, i) => (
            <Reveal key={x.label} delay={i * 0.06}>
              <SpotlightCard className="card flex items-center gap-4 p-5">
                <span className="ico shrink-0"><Icon name={x.icon} /></span>
                <div>
                  <div className="text-sm text-mut">{x.label}</div>
                  {x.href ? <a href={x.href} target={x.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="relative z-10 font-extrabold hover:text-brand">{x.value}</a> : <div className="font-extrabold">{x.value}</div>}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="lg:col-span-3"><div className="card p-6 md:p-8"><ApplicationForm /></div></Reveal>
      </section>
    </>
  );
}
