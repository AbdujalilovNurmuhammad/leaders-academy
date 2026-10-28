import { z } from 'zod';

export const COURSES = ['frontend', 'backend', 'ai', 'rus-tili', 'ingliz-tili', 'turk-tili', 'matematika'] as const;
export const BRANCHES = ['Chilonzor', 'Yunusobod', 'Mirzo Ulug‘bek', 'Sergeli', 'Samarqand'] as const;
export const FORMATS = ['Offline', 'Online'] as const;
export const TIMES = ['Ertalab', 'Kunduzi', 'Kechqurun'] as const;

export const applicationSchema = z.object({
  course: z.enum(COURSES, { errorMap: () => ({ message: 'Kursni tanlang' }) }),
  name: z.string().trim().min(3, 'Ism kamida 3 ta belgi').max(80),
  phone: z.string().regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, 'Telefon raqami noto‘g‘ri'),
  age: z.coerce.number().int().min(5).max(80).optional(),
  branch: z.enum(BRANCHES),
  format: z.enum(FORMATS),
  time: z.enum(TIMES),
  message: z.string().trim().max(500).optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
export type ApplicationRecord = ApplicationInput & { id: string; createdAt: string };
