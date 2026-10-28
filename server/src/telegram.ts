import type { ApplicationRecord } from './schema';

export async function notifyTelegram(a: ApplicationRecord): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return;
  const text = [
    'Yangi ariza',
    `Kurs: ${a.course}`,
    `Ism: ${a.name}${a.age ? `, ${a.age} yosh` : ''}`,
    `Telefon: ${a.phone}`,
    `Filial: ${a.branch} · ${a.format} · ${a.time}`,
    a.message ? `Izoh: ${a.message}` : '',
  ].filter(Boolean).join('\n');
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text }),
  });
}
