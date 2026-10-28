import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import Cta from '@/components/Cta';
import { TEACHERS } from '@/data/site';

export const metadata: Metadata = { title: 'O‘qituvchilar' };
const COLORS = ['#1d5bff', '#0b2a8f', '#6a3dff', '#1148d8', '#2a46d8', '#0a3bb5'];

export default function TeachersPage() {
  return (
    <>
      <PageHero title="O‘qituvchilar" text="Soha mutaxassislari: amaliyotda ishlayotgan mentorlar va tajribali pedagoglar." />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <SpotlightCard className="card h-full p-7">
                <div className="grid h-24 w-24 place-items-center rounded-3xl font-display text-4xl font-extrabold text-white" style={{ background: `linear-gradient(135deg, ${COLORS[i]}, #19d3ff)` }}>{t.name[0]}</div>
                <h3 className="mt-5 text-2xl font-extrabold">{t.name}</h3>
                <div className="mt-1 font-semibold text-brand">{t.role}</div>
                <div className="mt-1 text-sm text-mut">{t.exp}</div>
                <div className="mt-4 flex flex-wrap gap-2">{t.tags.map((x) => <span key={x} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">{x}</span>)}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
