import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import ApplyButton from '@/components/ApplyButton';
import Icon from '@/components/Icon';
import { BRANCHES, SITE } from '@/data/site';

export const metadata: Metadata = { title: 'Filiallar' };

export default function BranchesPage() {
  return (
    <>
      <PageHero title="Filiallar" text="Toshkent va Samarqandda 5 ta qulay filial." />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2a8f] to-brand p-4">
            <div className="grid-bg" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
              <path d="M0 30 Q30 20 50 40 T100 50M20 0 Q30 40 20 100M60 0 Q70 50 90 100M0 80 Q50 70 100 85" stroke="#fff" fill="none" strokeWidth=".5" />
            </svg>
            {BRANCHES.map((b, i) => (
              <div key={b.name} className="absolute" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
                <span className="absolute -inset-3 animate-ring rounded-full bg-white/40" style={{ animationDelay: `${i * 0.3}s` }} />
                <span className="relative block h-5 w-5 rounded-full border-4 border-cyan bg-white" />
                <span className="absolute -top-1 left-7 whitespace-nowrap text-sm font-bold text-white">{b.name}</span>
              </div>
            ))}
            <span className="absolute bottom-4 left-5 text-xs text-white/70">Xarita sxemasi</span>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {BRANCHES.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.07}>
              <SpotlightCard className="card flex items-center gap-5 p-5">
                <span className="ico shrink-0"><Icon name="pin" /></span>
                <div className="flex-1">
                  <div className="text-lg font-extrabold">{b.name} filiali</div>
                  <div className="text-sm text-mut">{b.address} · {SITE.hours.replace('Du–Sha ', '')}</div>
                </div>
                <ApplyButton branch={b.name} className="btn btn-primary relative z-10 !px-5 !py-2.5 text-sm">Yozilish</ApplyButton>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
