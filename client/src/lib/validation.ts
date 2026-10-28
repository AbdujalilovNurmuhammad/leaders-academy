import { z } from 'zod';
import { BRANCHES, COURSES, FORMATS, TIMES } from '@/data/site';

export const applicationSchema = z.object({
  course: z.string().refine((v) => COURSES.some((c) => c.slug === v), 'Kursni tanlang'),
  name: z.string().trim().min(3, 'Ismingizni to‘liq kiriting').max(80, 'Ism juda uzun'),
  phone: z.string().regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, 'Telefon raqamini to‘liq kiriting'),
  age: z
    .string()
    .optional()
    .refine((v) => !v || (Number(v) >= 5 && Number(v) <= 80), 'Yosh 5 dan 80 gacha bo‘lishi kerak'),
  branch: z.string().refine((v) => BRANCHES.some((b) => b.name === v), 'Filialni tanlang'),
  format: z.enum(FORMATS),
  time: z.enum(TIMES),
  message: z.string().max(500, 'Izoh 500 belgidan oshmasin').optional(),
});

export type ApplicationValues = z.infer<typeof applicationSchema>;
