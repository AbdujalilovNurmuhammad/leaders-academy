'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CourseCard from './CourseCard';
import { CATEGORIES, COURSES, type Category } from '@/data/site';

export default function CoursesBrowser() {
  const [cat, setCat] = useState<'all' | Category>('all');
  const list = COURSES.filter((c) => cat === 'all' || c.cat === cat);
  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button key={c.key} onClick={() => setCat(c.key)} className={`opt !px-5 !py-2.5 ${cat === c.key ? 'opt-on' : ''}`}>{c.label}</button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.div key={c.slug} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }}>
              <CourseCard c={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
