'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ApplicationForm from './ApplicationForm';
import Icon from './Icon';

type Opts = { course?: string; branch?: string };
const Ctx = createContext<{ open: (o?: Opts) => void }>({ open: () => {} });
export const useApply = () => useContext(Ctx);

export function ApplyProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ show: boolean; opts: Opts; key: number }>({ show: false, opts: {}, key: 0 });
  const open = useCallback((o: Opts = {}) => setState((s) => ({ show: true, opts: o, key: s.key + 1 })), []);
  const close = useCallback(() => setState((s) => ({ ...s, show: false })), []);

  useEffect(() => {
    if (!state.show) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [state.show, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {state.show && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-navy/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
            role="dialog" aria-modal="true" aria-label="Kursga yozilish"
          >
            <motion.div
              className="card relative my-auto w-full max-w-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            >
              <button onClick={close} aria-label="Yopish" className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-mut transition hover:bg-brand/10 hover:text-brand">
                <Icon name="close" />
              </button>
              <ApplicationForm key={state.key} defaultCourse={state.opts.course} defaultBranch={state.opts.branch} onDone={close} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
