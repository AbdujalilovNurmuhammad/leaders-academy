'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { BRANCHES, COURSES, FORMATS, TIMES } from '@/data/site';
import { applicationSchema, type ApplicationValues } from '@/lib/validation';
import { formatPhone, formatPrice } from '@/lib/format';

type Props = { defaultCourse?: string; defaultBranch?: string; onDone?: () => void };
type StepFields = (keyof ApplicationValues)[];
const STEP_FIELDS: StepFields[] = [['course'], ['name', 'phone', 'age', 'branch', 'format', 'time'], ['message']];

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold">{label}</span>
      {children}
      {error && <span role="alert" className="mt-1.5 block text-sm font-medium text-red-500">{error}</span>}
    </label>
  );
}

function Confetti() {
  const pieces = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({ left: Math.random() * 100, delay: Math.random() * 0.8, dur: 2 + Math.random() * 2, color: ['#1d5bff', '#19d3ff', '#ffffff', '#6a3dff'][i % 4] })),
    [],
  );
  return (
    <>
      {pieces.map((p, i) => (
        <i key={i} className="pointer-events-none fixed -top-5 z-[80] h-4 w-2.5 animate-[fall_3s_linear_forwards]" style={{ left: `${p.left}vw`, background: p.color, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </>
  );
}

export default function ApplicationForm({ defaultCourse, defaultBranch, onDone }: Props) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, watch, setValue, trigger, getValues, formState: { errors } } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    mode: 'onTouched',
    defaultValues: {
      course: defaultCourse ?? '', name: '', phone: '', age: '', message: '',
      branch: defaultBranch ?? BRANCHES[0].name, format: 'Offline', time: 'Kunduzi',
    },
  });
  const v = watch();
  const course = COURSES.find((c) => c.slug === v.course);

  const next = async () => {
    const ok = await trigger(STEP_FIELDS[step]);
    if (ok) setStep((s) => s + 1);
  };

  const onSubmit = async (data: ApplicationValues) => {
    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, age: data.age ? Number(data.age) : undefined, message: data.message || undefined }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.message || 'Xatolik yuz berdi');
      setStatus('done');
    } catch (e) {
      setStatus('idle');
      setServerError(e instanceof TypeError ? 'Server bilan aloqa yo‘q. Iltimos, telefon orqali bog‘laning.' : (e as Error).message);
    }
  };

  if (status === 'done') {
    return (
      <div className="py-6 text-center">
        <Confetti />
        <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 12 }} className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan text-5xl text-white">
          <Icon name="check" />
        </motion.div>
        <h3 className="mt-6 text-3xl font-extrabold">Ariza qabul qilindi!</h3>
        <p className="mt-3 text-mut">{v.name}, 15 daqiqa ichida <b className="text-fg">{v.phone}</b> raqamiga qo‘ng‘iroq qilamiz.</p>
        {course && (
          <div className="mt-6 space-y-1 rounded-2xl border border-line bg-bg p-4 text-left text-sm">
            <div><Icon name="book" className="mr-2 inline text-brand" /><b>{course.title}</b> · {formatPrice(course.price)}/oy</div>
            <div><Icon name="pin" className="mr-2 inline text-brand" />{v.branch} · {v.format} · {v.time}</div>
          </div>
        )}
        <button className="btn btn-primary mt-6" onClick={onDone}>Yopish</button>
      </div>
    );
  }

  const titles = ['Qaysi kursni tanlaysiz?', 'Ma’lumotlaringiz', 'Tasdiqlang'];
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-6 flex gap-2 pr-10">
        {titles.map((_, i) => <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-brand' : 'bg-line'}`} />)}
      </div>
      <h3 className="text-3xl font-extrabold">{titles[step]}</h3>
      <p className="mb-5 mt-1 text-mut">{step + 1}-qadam · 3 tadan</p>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.22 }}>
          {step === 0 && (
            <div>
              <div className="grid grid-cols-2 gap-3">
                {COURSES.map((c) => (
                  <button type="button" key={c.slug} onClick={() => setValue('course', c.slug, { shouldValidate: true })} className={`opt ${v.course === c.slug ? 'opt-on' : ''}`}>
                    <Icon name={c.icon} className="text-2xl text-brand" />
                    <div className="mt-1 text-sm font-bold">{c.title}</div>
                    <div className="text-xs font-normal text-mut">{formatPrice(c.price)}/oy</div>
                  </button>
                ))}
              </div>
              {errors.course && <p role="alert" className="mt-3 text-sm font-medium text-red-500">{errors.course.message}</p>}
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-4">
              <Field label="Ism va familiya" error={errors.name?.message}>
                <input className={`input ${errors.name ? 'input-error' : ''}`} placeholder="Masalan: Aziz Karimov" autoComplete="name" {...register('name')} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-5">
                <div className="sm:col-span-3">
                  <Field label="Telefon raqami" error={errors.phone?.message}>
                    <input className={`input ${errors.phone ? 'input-error' : ''}`} placeholder="+998 90 123 45 67" inputMode="tel" autoComplete="tel"
                      {...register('phone', { onChange: (e) => { e.target.value = formatPhone(e.target.value); } })} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Yoshingiz" error={errors.age?.message}>
                    <input className={`input ${errors.age ? 'input-error' : ''}`} placeholder="18" inputMode="numeric" maxLength={2}
                      {...register('age', { onChange: (e) => { e.target.value = e.target.value.replace(/\D/g, ''); } })} />
                  </Field>
                </div>
              </div>
              <Field label="Filial" error={errors.branch?.message}>
                <select className="input appearance-none" {...register('branch')}>
                  {BRANCHES.map((b) => <option key={b.name} value={b.name}>{b.name} — {b.address}</option>)}
                </select>
              </Field>
              <div>
                <span className="mb-1.5 block text-sm font-bold">Format</span>
                <div className="grid grid-cols-2 gap-3">
                  {FORMATS.map((f) => <button type="button" key={f} onClick={() => setValue('format', f)} className={`opt text-center ${v.format === f ? 'opt-on' : ''}`}>{f}</button>)}
                </div>
              </div>
              <div>
                <span className="mb-1.5 block text-sm font-bold">Qulay vaqt</span>
                <div className="grid grid-cols-3 gap-3">
                  {TIMES.map((t) => <button type="button" key={t} onClick={() => setValue('time', t)} className={`opt text-center ${v.time === t ? 'opt-on' : ''}`}>{t}</button>)}
                </div>
              </div>
            </div>
          )}

          {step === 2 && course && (
            <div className="grid gap-4">
              <div className="rounded-3xl p-6 text-white" style={{ background: `linear-gradient(135deg, ${course.from}, ${course.to})` }}>
                <Icon name={course.icon} className="text-5xl" />
                <div className="mt-2 font-display text-2xl font-extrabold">{course.title}</div>
                <div className="mt-1 text-sm opacity-90">{course.duration} · {course.lessons} dars · {formatPrice(course.price)}/oy</div>
              </div>
              <div className="grid gap-2 rounded-2xl border border-line bg-bg p-5 text-sm">
                <div><Icon name="student" className="mr-2 inline text-brand" /><b>{getValues('name')}</b>{getValues('age') ? `, ${getValues('age')} yosh` : ''}</div>
                <div><Icon name="phone" className="mr-2 inline text-brand" />{getValues('phone')}</div>
                <div><Icon name="pin" className="mr-2 inline text-brand" />{getValues('branch')} · {getValues('format')} · {getValues('time')}</div>
              </div>
              <Field label="Izoh (ixtiyoriy)" error={errors.message?.message}>
                <textarea className="input min-h-[88px] resize-none" placeholder="Savol yoki istaklaringiz bo‘lsa yozing" {...register('message')} />
              </Field>
              {serverError && <p role="alert" className="rounded-2xl bg-red-500/10 p-3 text-sm font-medium text-red-500">{serverError}</p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex gap-3">
        {step > 0 && <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}>Orqaga</button>}
        {step < 2 ? (
          <button type="button" className="btn btn-primary flex-1" onClick={next}>Davom etish <Icon name="arrow" /></button>
        ) : (
          <button type="submit" className="btn btn-primary flex-1" disabled={status === 'sending'}>{status === 'sending' ? 'Yuborilmoqda…' : 'Arizani yuborish'}</button>
        )}
      </div>
    </form>
  );
}
