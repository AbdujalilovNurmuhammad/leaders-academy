'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import Reveal from './Reveal';
import ApplyButton from './ApplyButton';
import { FAQ } from '@/data/site';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h2 className="text-4xl leading-[1.05] md:text-5xl">Savollaringiz bormi?</h2>
          <p className="mt-4 text-lg text-mut">Eng ko‘p so‘raladigan savollar. Javob topa olmasangiz, bizga yozing.</p>
          <ApplyButton className="btn btn-primary mt-7">Savol berish</ApplyButton>
        </Reveal>
        <div className="space-y-3 md:col-span-3">
          {FAQ.map(([q, a], i) => {
            const on = open === i;
            return (
              <Reveal key={q} delay={i * 0.05}>
                <div className="card px-6">
                  <button className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold" aria-expanded={on} onClick={() => setOpen(on ? null : i)}>
                    {q}
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-300 ${on ? 'rotate-45' : ''}`}><Icon name="plus" /></span>
                  </button>
                  <motion.div initial={false} animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }} className="overflow-hidden">
                    <p className="pb-5 leading-relaxed text-mut">{a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
