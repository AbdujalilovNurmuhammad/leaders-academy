import Link from 'next/link';
import Icon from './Icon';
import SpotlightCard from './SpotlightCard';
import ApplyButton from './ApplyButton';
import type { Course } from '@/data/site';
import { formatPrice } from '@/lib/format';

export default function CourseCard({ c }: { c: Course }) {
  return (
    <SpotlightCard tilt className="card h-full overflow-hidden">
      <div className="relative grid h-44 place-items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
        <div className="absolute h-64 w-64 animate-spin-slow rounded-full border border-dashed border-white/30" />
        <div className="absolute h-40 w-40 rounded-full border border-white/30" />
        <Icon name={c.icon} className="relative animate-float text-7xl text-white drop-shadow-xl" />
        {c.cat === 'it' && <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b2a8f]">250$+ maosh</span>}
        <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">{c.duration}</span>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-extrabold">{c.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-mut">{c.summary}</p>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-line pt-5">
          <div>
            <div className="font-display text-2xl font-extrabold text-brand">{formatPrice(c.price)}</div>
            <div className="text-xs text-mut">oyiga · {c.lessons} dars</div>
          </div>
          <div className="relative z-10 flex gap-2">
            <Link href={`/courses/${c.slug}`} className="btn btn-ghost !px-4 !py-2.5 text-sm">Batafsil</Link>
            <ApplyButton course={c.slug} className="btn btn-primary !px-5 !py-2.5 text-sm">Yozilish</ApplyButton>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
