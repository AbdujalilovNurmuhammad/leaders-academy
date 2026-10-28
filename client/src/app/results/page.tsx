import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import SalaryChart from '@/components/SalaryChart';
import SpotlightCard from '@/components/SpotlightCard';
import MediaGrid from '@/components/MediaGrid';
import Icon from '@/components/Icon';
import Cta from '@/components/Cta';
import { TESTIMONIALS } from '@/data/site';

export const metadata: Metadata = { title: 'Natijalar' };

export default function ResultsPage() {
  return (
    <>
      <PageHero title="Natijalar" text="4000 dan ortiq o‘quvchi, minglab muvaffaqiyatli hikoyalar." />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <SectionHead title="Maosh o‘sishi" text="IT bitiruvchilarimizning o‘rtacha oylik maoshi (namuna ma’lumot)." />
        <Reveal><SalaryChart /></Reveal>
      </section>
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead title="Bitiruvchilar fikri" text="Ular ham noldan boshlagan." />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-3xl border border-line bg-bg p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-xl font-extrabold text-white">{t.name[0]}</span>
                    <div><div className="font-extrabold">{t.name}</div><div className="text-sm text-mut">{t.role}</div></div>
                  </div>
                  <Icon name="quote" className="mt-5 text-2xl text-brand/40" />
                  <p className="mt-2 leading-relaxed text-mut">{t.text}</p>
                  <div className="mt-5 inline-block rounded-xl bg-brand px-4 py-2 font-bold text-white">Maosh: {t.salary}</div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead title="Media" text="Akademiya hayotidan lavhalar." />
        <MediaGrid />
      </section>
      <Cta />
    </>
  );
}
