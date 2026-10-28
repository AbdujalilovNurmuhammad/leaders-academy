import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import CourseCard from '@/components/CourseCard';
import ApplyButton from '@/components/ApplyButton';
import { COURSES, getCourse } from '@/data/site';
import { formatPrice } from '@/lib/format';

type Props = { params: { slug: string } };

export const generateStaticParams = () => COURSES.map((c) => ({ slug: c.slug }));

export function generateMetadata({ params }: Props): Metadata {
  const c = getCourse(params.slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default function CoursePage({ params }: Props) {
  const c = getCourse(params.slug);
  if (!c) notFound();
  const related = COURSES.filter((x) => x.slug !== c.slug && x.cat === c.cat).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden text-white" style={{ background: `linear-gradient(135deg, ${c.from}, #050d2b 85%)` }}>
        <div className="grid-bg" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link href="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Icon name="back" /> Barcha kurslar</Link>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">{c.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">{c.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              {[`${c.duration}`, `${c.lessons} dars`, c.level].map((t) => <span key={t} className="glass !rounded-full px-4 py-2">{t}</span>)}
            </div>
          </div>
          <div className="glass animate-float p-7 text-center">
            <Icon name={c.icon} className="mx-auto text-6xl" />
            <div className="mt-4 font-display text-4xl font-extrabold">{formatPrice(c.price)}</div>
            <div className="mb-6 text-white/70">oyiga</div>
            <ApplyButton course={c.slug} className="btn btn-white w-full">Kursga yozilish</ApplyButton>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHead title="Dastur" text="Har bir modul amaliy topshiriq bilan yakunlanadi." />
          <div className="space-y-3">
            {c.modules.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <details className="card group px-6 py-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 text-lg font-bold">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm text-white">{i + 1}</span>
                    {title}
                    <Icon name="plus" className="ml-auto text-brand transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pl-[52px] leading-relaxed text-mut">{text}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Reveal>
            <div className="card p-7">
              <h3 className="text-xl font-extrabold">Natija</h3>
              <ul className="mt-4 space-y-3">
                {c.outcomes.map((o) => <li key={o} className="flex gap-3"><Icon name="ok" className="mt-1 shrink-0 text-brand" />{o}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-7">
              <h3 className="text-xl font-extrabold">Vositalar</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tools.map((t) => <span key={t} className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold text-brand">{t}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-8">
          <SectionHead title="Shu yo‘nalishdagi boshqa kurslar" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((r) => <CourseCard key={r.slug} c={r} />)}</div>
        </section>
      )}
    </>
  );
}
