# Leaders Academy

Zamonaviy o‘quv markazi sayti. **Next.js 14 (React) + TypeScript + Tailwind CSS** (front) va **Node.js + Express + TypeScript** (backend).

```
leaders-academy/
├─ client/   Next.js sayt (port 3000)
└─ server/   Express API (port 4000)
```

## Ishga tushirish

Node.js 18 yoki yangisi kerak.

```bash
npm run install:all          # barcha paketlarni o‘rnatadi
cp server/.env.example server/.env
cp client/.env.example client/.env.local
npm run dev                  # sayt: http://localhost:3000, API: http://localhost:4000
```

Production uchun: `npm run build` va `npm run start`.

## Sahifalar

| Manzil | Tavsif |
|---|---|
| `/` | Bosh sahifa: hero, statistika, kurslar, afzalliklar, yo‘l xaritasi, media |
| `/courses` | 7 ta kurs, kategoriya bo‘yicha filtr |
| `/courses/[slug]` | Kurs sahifasi: dastur, natija, vositalar |
| `/teachers` | O‘qituvchilar |
| `/results` | Maosh grafigi, bitiruvchilar fikri, media |
| `/branches` | 5 ta filial va xarita sxemasi |
| `/contact` | Aloqa ma’lumotlari va ariza formasi |

Har bir sahifada savol-javob (FAQ) bo‘limi va footer bor. "Yozilish" tugmasi istalgan joyda 3 bosqichli forma oynasini ochadi. Sarlavhadagi tugma bilan dark/light rejim almashtiriladi.

## Forma va API

- Forma: `react-hook-form` + `zod`. Har bosqichda tekshiruv, telefon avtomatik `+998 XX XXX XX XX` formatiga o‘tadi.
- `POST /api/applications` — ariza qabul qiladi (zod bilan qayta tekshiradi, 10 daqiqada 10 ta so‘rovgacha).
- Arizalar `server/data/applications.json` fayliga saqlanadi.
- `GET /api/applications` — arizalar ro‘yxati. Header: `x-admin-token: <ADMIN_TOKEN>` (`server/.env`).
- Telegramga xabar: `server/.env` ichiga `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` ni yozing.
- Next.js `/api/*` so‘rovlarini Express serverga yo‘naltiradi (`client/next.config.mjs`, `API_URL`).

## Kontentni o‘zgartirish

Barcha matn, narx, kurs, filial, o‘qituvchi va havolalar bitta faylda: `client/src/data/site.ts`.
Telefon, email, Telegram, Instagram va boshqa havolalar `SITE` obyektida.

Server tomonda kurs va filial ro‘yxati `server/src/schema.ts` da — kurs yoki filial qo‘shsangiz, ikkalasini ham yangilang.

## Rasm va video

- Hero qismiga haqiqiy video: faylni `client/public/hero.mp4` ga qo‘ying va `client/.env.local` ga `NEXT_PUBLIC_HERO_VIDEO=/hero.mp4` yozing.
- Media bo‘limi: `client/src/components/MediaGrid.tsx` dagi animatsiyali kartalarni `<Image>` yoki `<video>` bilan almashtiring.

## Eslatma

Telefon raqami, manzillar, o‘qituvchilar va bitiruvchilar fikri namuna ma’lumotlar. Haqiqiylariga almashtiring.
