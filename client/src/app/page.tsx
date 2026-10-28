import Link from 'next/link';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Counter from '@/components/Counter';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import SpotlightCard from '@/components/SpotlightCard';
import CourseCard from '@/components/CourseCard';
import MediaGrid from '@/components/MediaGrid';
import Cta from '@/components/Cta';
import { COURSES, FEATURES, ROADMAP, STEPS } from '@/data/site';

const STATS = [
  { icon: 'student', to: 4000, suffix: '+', label: 'o‘quvchi' },
  { icon: 'pin', to: 5, suffix: '', label: 'filial' },
  { icon: 'calendar', to: 4, suffix: '', label: 'oyda ish topish' },
  { icon: 'money', to: 250, suffix: '$+', label: 'boshlang‘ich maosh' },
] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-5">
        <div className="card grid grid-cols-2 gap-4 p-6 text-center shadow-2xl md:grid-cols-4">
          {STATS.map((s) => (
            <SpotlightCard key={s.label} className="rounded-2xl p-4">
              <div className="ico mx-auto mb-3"><Icon name={s.icon} /></div>
              <div className="font-display text-4xl font-extrabold text-brand md:text-5xl"><Counter to={s.to} suffix={s.suffix} /></div>
              <div className="mt-1 text-mut">{s.label}</div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-display text-3xl font-extrabold opacity-30">
          {[0, 1].map((k) => COURSES.map((c) => (
            <span key={`${k}-${c.slug}`} className="flex items-center gap-3"><Icon name={c.icon} className="text-brand" />{c.title}</span>
          )))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pt-24">
        <SectionHead title="7 yo‘nalish, bitta maqsad" text="Har bir kurs amaliyotga asoslangan. IT yo‘nalishlari sizni 4 oyda ishga tayyorlaydi." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((c, i) => <Reveal key={c.slug} delay={(i % 3) * 0.08}><CourseCard c={c} /></Reveal>)}
        </div>
        <div className="mt-12 text-center"><Link href="/courses" className="btn btn-primary">Barcha kurslar <Icon name="arrow" /></Link></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-24">
        <SectionHead title="Nega aynan Leaders Academy?" text="Natija beradigan ta’lim uchun hamma narsa bir joyda." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <SpotlightCard className="card h-full p-7">
                <div className="ico"><Icon name={f.icon} /></div>
                <h3 className="mt-5 text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-mut">{f.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mt-24 overflow-hidden bg-navy py-24 text-white">
        <div className="grid-bg" />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionHead light title="4 oyda ishgacha yo‘l" text="Noldan ishga qabul qilingan kungacha aniq reja." />
          <div className="grid gap-5 md:grid-cols-4">
            {ROADMAP.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <SpotlightCard className="glass h-full p-7">
                  <div className="ico"><Icon name={s.icon} /></div>
                  <div className="mt-4 text-sm font-bold text-cyan">{s.month}</div>
                  <div className="mt-1 font-display text-2xl font-extrabold">{s.title}</div>
                  <p className="mt-3 text-white/70">{s.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead title="Qanday yozilaman?" text="To‘rt oddiy qadam." />
        <div className="grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <SpotlightCard className="card h-full p-7">
                <div className="ico"><Icon name={s.icon} /></div>
                <div className="mt-4 text-sm font-bold text-brand">{i + 1}-qadam</div>
                <h3 className="mt-1 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-mut">{s.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <SectionHead title="Akademiyadan lavhalar" text="Darslar, tadbirlar va bitiruvchilar bilan uchrashuvlar." />
        <MediaGrid limit={4} />
      </section>
      <Cta />
    </>
  );
}
