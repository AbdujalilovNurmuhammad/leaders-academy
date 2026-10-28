'use client';

import { motion } from 'framer-motion';
import { SALARY } from '@/data/site';

export default function SalaryChart() {
  const max = Math.max(...SALARY.map((s) => s.value));
  return (
    <div className="card p-8">
      <div className="flex h-64 items-end justify-between gap-4">
        {SALARY.map((s, i) => (
          <div key={s.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-sm font-bold">{s.text}</span>
            <motion.div
              className="w-full rounded-t-2xl bg-gradient-to-b from-cyan to-brand"
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.max(4, (s.value / max) * 82)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            />
            <span className="text-center text-xs text-mut">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
