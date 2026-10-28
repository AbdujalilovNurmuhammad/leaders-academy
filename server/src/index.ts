import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { applicationSchema } from './schema';
import { addApplication, listApplications } from './store';
import { notifyTelegram } from './telegram';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? true }));
app.use(express.json({ limit: '20kb' }));

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: 'Juda ko‘p urinish. Birozdan so‘ng qayta urinib ko‘ring.' },
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.post('/api/applications', limiter, async (req, res, next) => {
  try {
    const parsed = applicationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        message: 'Ma’lumotlar noto‘g‘ri to‘ldirilgan',
        errors: parsed.error.flatten().fieldErrors,
      });
    }
    const record = await addApplication(parsed.data);
    notifyTelegram(record).catch((e) => console.error('Telegram xatosi:', e));
    res.status(201).json({ ok: true, id: record.id });
  } catch (e) {
    next(e);
  }
});

app.get('/api/applications', async (req, res) => {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.header('x-admin-token') !== token) {
    return res.status(401).json({ ok: false, message: 'Ruxsat yo‘q' });
  }
  res.json({ ok: true, items: (await listApplications()).reverse() });
});

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ ok: false, message: 'Serverda xatolik. Keyinroq urinib ko‘ring.' });
});

app.listen(PORT, () => console.log(`Server ishga tushdi: http://localhost:${PORT}`));
