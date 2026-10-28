'use client';

import { useRef, type MouseEvent, type ReactNode } from 'react';

export default function SpotlightCard({ children, className = '', tilt = false }: { children: ReactNode; className?: string; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (tilt) el.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 7}deg) rotateY(${(x / r.width - 0.5) * 7}deg) translateY(-8px)`;
    else el.style.transform = 'translateY(-6px)';
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`spot ${className}`}>
      {children}
    </div>
  );
}
