import Icon from './Icon';
import Reveal from './Reveal';
import { MEDIA } from '@/data/site';

// Haqiqiy rasm/video qo'yish uchun: <video src="/media/dars.mp4" .../> yoki <Image/> bilan almashtiring
export default function MediaGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {MEDIA.slice(0, limit).map((m, i) => (
        <Reveal key={m.title} delay={(i % 4) * 0.07}>
          <div className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl p-5 font-bold text-white" style={{ background: `linear-gradient(125deg, ${m.from}, #050d2b)` }}>
            <div className="absolute inset-0 animate-pan opacity-60" style={{ background: `radial-gradient(circle at 30% 20%, ${m.to}, transparent 60%)`, backgroundSize: '200% 200%' }} />
            <Icon name={m.icon} className="absolute right-5 top-5 animate-float text-4xl opacity-70" />
            <span className="absolute left-1/2 top-[42%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ring place-items-center rounded-full bg-white/90 text-brand transition-transform group-hover:scale-110"><Icon name="play" /></span>
            <span className="relative">{m.title}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
