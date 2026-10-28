'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import Counter from './Counter';
import ApplyButton from './ApplyButton';

const WORDS = ['shu yerda tug‘iladi', 'ishga tayyorlanadi', 'bizda yetishadi'];
const CODE = `const leader = {\n  name: 'Siz',\n  skills: ['React', 'AI'],\n  salary: '250$+',\n};\n\nawait leader.startToday();`;

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    let w = 0, i = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      if (!del && i === word.length) { del = true; t = setTimeout(tick, 1800); return; }
      if (del && i === 0) { del = false; w = (w + 1) % words.length; }
      t = setTimeout(tick, del ? 35 : 70);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

function useCodeTyper(src: string) {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      setText(src.slice(0, i) + '▌');
      i++;
      if (i > src.length + 25) i = 0;
      t = setTimeout(tick, i > src.length ? 60 : 55);
    };
    tick();
    return () => clearTimeout(t);
  }, [src]);
  return text;
}

// Sichqonchaga javob beradigan nuqtalar tarmog'i (video fon o'rnida)
function Network() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext('2d');
    if (!cv || !ctx) return;
    const parent = cv.parentElement as HTMLElement;
    const mouse = { x: -999, y: -999 };
    let W = 0, H = 0, raf = 0;
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const resize = () => {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
      pts = Array.from({ length: Math.min(100, Math.floor(W / 12)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.7, vy: (Math.random() - 0.5) * 0.7 }));
    };
    const move = (e: MouseEvent) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const leave = () => { mouse.x = mouse.y = -999; };
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((a, i) => {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          a.x += (mouse.x - a.x) * 0.025; a.y += (mouse.y - a.y) * 0.025;
          ctx.strokeStyle = `rgba(25,211,255,${0.8 * (1 - dm / 170)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(25,211,255,.85)';
        ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, 7); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(70,140,255,${0.4 * (1 - d / 130)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(loop);
    };
    resize();
    loop();
    window.addEventListener('resize', resize);
    parent.addEventListener('mousemove', move);
    parent.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', move);
      parent.removeEventListener('mouseleave', leave);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

export default function Hero() {
  const word = useTypewriter(WORDS);
  const code = useCodeTyper(CODE);
  const video = process.env.NEXT_PUBLIC_HERO_VIDEO;
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {video && <video className="absolute inset-0 h-full w-full object-cover opacity-40" src={video} autoPlay muted loop playsInline />}
      <Network />
      <div className="grid-bg" />
      <div className="aur -left-40 -top-24 h-[560px] w-[560px] bg-brand" />
      <div className="aur -bottom-40 -right-28 h-[480px] w-[480px] bg-cyan [animation-delay:-6s]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-32 pt-20 lg:grid-cols-2">
        <div>
          <span className="glass inline-flex items-center gap-2 !rounded-full px-4 py-2 text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" /> Yangi guruhlarga qabul ochiq
          </span>
          <h1 className="mt-7 text-5xl leading-[1.02] md:text-7xl">
            Kelajak liderlari <span className="text-cyan">{word}</span><span className="animate-pulse">|</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 md:text-xl">IT, tillar va aniq fanlar bir joyda. 4 oyda kasb o‘rganing, ish toping va oyiga 250$ dan yuqori daromad qiling.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ApplyButton className="btn btn-primary">Bepul konsultatsiya</ApplyButton>
            <Link href="/courses" className="btn btn-glass">Kurslarni ko‘rish <Icon name="arrow" /></Link>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['bg-brand', 'bg-cyan', 'bg-[#6a3dff]', 'bg-[#0b2a8f]'].map((c, i) => (
                <span key={c} className={`grid h-12 w-12 place-items-center rounded-full border-2 border-navy font-bold ${c}`}>{'LAEM'[i]}</span>
              ))}
            </div>
            <div>
              <div className="text-xl font-extrabold"><Counter to={4000} />+ o‘quvchi</div>
              <div className="text-sm text-white/60">tugatgan va hali ham o‘qiyotganlar</div>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[480px] lg:block">
          <div className="absolute inset-0 m-auto h-[440px] w-[440px] animate-spin-slow rounded-full border border-dashed border-white/25" />
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full border border-white/15" />
          <div className="glass absolute left-4 top-10 w-[400px] animate-float p-5">
            <div className="mb-3 flex gap-1.5">
              <i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/50">leader.tsx</span>
            </div>
            <pre className="min-h-[170px] whitespace-pre font-mono text-[13px] leading-[1.7] text-[#cfe0ff]">{code}</pre>
          </div>
          <div className="glass absolute bottom-16 right-0 animate-float px-5 py-4 [animation-delay:-2s]"><div className="text-xs text-white/60">Boshlang‘ich maosh</div><div className="font-display text-4xl font-extrabold">250$+</div></div>
          <div className="glass absolute bottom-6 left-0 animate-float px-5 py-4 [animation-delay:-4s]"><div className="text-xs text-white/60">Ish topish muddati</div><div className="font-display text-3xl font-extrabold">4 oy</div></div>
          <div className="glass absolute right-6 top-0 flex animate-float items-center gap-2 px-4 py-3 text-sm font-bold [animation-delay:-1s]"><Icon name="react" /> React <Icon name="python" className="ml-2" /> Python</div>
          <div className="glass absolute -bottom-2 left-[42%] flex animate-float items-center gap-2 px-4 py-3 text-sm font-bold [animation-delay:-3s]"><Icon name="node" /> Node <Icon name="js" className="ml-2" /> JS</div>
        </div>
      </div>
    </section>
  );
}
