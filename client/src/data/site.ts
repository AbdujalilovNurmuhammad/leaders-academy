import type { IconKey } from '@/components/Icon';

export const SITE = {
  name: 'Leaders Academy',
  phone: '+998 90 123 45 67',
  email: 'info@leaders.uz',
  telegram: 'https://t.me/leaders_academy',
  instagram: 'https://www.instagram.com/leaders_academy__1',
  youtube: 'https://www.youtube.com/@leaders_academy',
  facebook: 'https://www.facebook.com/leaders.academy',
  hours: 'Du–Sha 09:00 – 20:00',
};

export type Category = 'it' | 'til' | 'fan';

export type Course = {
  slug: string;
  title: string;
  cat: Category;
  icon: IconKey;
  price: number;
  from: string;
  to: string;
  duration: string;
  lessons: number;
  level: string;
  summary: string;
  modules: [string, string][];
  outcomes: string[];
  tools: string[];
};

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Hammasi' },
  { key: 'it', label: 'IT' },
  { key: 'til', label: 'Tillar' },
  { key: 'fan', label: 'Aniq fanlar' },
];

export const COURSES: Course[] = [
  {
    slug: 'frontend', title: 'Frontend dasturlash', cat: 'it', icon: 'code', price: 690000, from: '#1d5bff', to: '#19d3ff',
    duration: '4 oy', lessons: 48, level: 'Noldan',
    summary: 'Saytlar va interfeyslarni noldan yarating: HTML, CSS, JavaScript, React va TypeScript.',
    modules: [
      ['HTML5 va CSS3', 'Semantik markup, flex va grid, animatsiyalar, responsive dizayn'],
      ['JavaScript ES6+', 'O‘zgaruvchilar, funksiyalar, DOM, asinxron kod va API bilan ishlash'],
      ['Tailwind va dizayn tizimi', 'Komponentlar, mavzular (dark mode) va Figma maketlarini kodlash'],
      ['React va TypeScript', 'Hooklar, routing, form va holat boshqaruvi, Next.js asoslari'],
      ['Git va real loyiha', 'Jamoada ishlash, code review va portfolio uchun yakuniy loyiha'],
    ],
    outcomes: ['Zamonaviy saytlarni mustaqil yaratasiz', 'Portfolioda 3 ta real loyiha bo‘ladi', 'Junior frontend lavozimiga tayyor bo‘lasiz'],
    tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Git'],
  },
  {
    slug: 'backend', title: 'Backend dasturlash', cat: 'it', icon: 'server', price: 690000, from: '#0b2a8f', to: '#4d8bff',
    duration: '4 oy', lessons: 48, level: 'Noldan',
    summary: 'Server, API va ma’lumotlar bazasi bilan Node.js orqali ishlashni o‘rganing.',
    modules: [
      ['Node.js va Express', 'Server arxitekturasi, middleware, xatolarni boshqarish'],
      ['REST API va xavfsizlik', 'JWT autentifikatsiya, validatsiya, rate limit'],
      ['Ma’lumotlar bazalari', 'PostgreSQL, MongoDB, so‘rovlar va indekslar'],
      ['Docker va deploy', 'Konteynerlar, CI/CD, serverga joylash'],
      ['Real loyiha', 'To‘liq API yaratib, frontend bilan ulash'],
    ],
    outcomes: ['Ishonchli API va server yozasiz', 'Ma’lumotlar bazasini loyihalay olasiz', 'Junior backend lavozimiga tayyor bo‘lasiz'],
    tools: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Git'],
  },
  {
    slug: 'ai', title: 'Sun’iy intellekt', cat: 'it', icon: 'brain', price: 690000, from: '#6a3dff', to: '#19d3ff',
    duration: '4 oy', lessons: 48, level: 'Noldan',
    summary: 'Python, mashinaviy o‘qitish va zamonaviy AI vositalari bilan amaliy ishlang.',
    modules: [
      ['Python asoslari', 'Sintaksis, ma’lumot tuzilmalari, fayllar va kutubxonalar'],
      ['Ma’lumotlar tahlili', 'NumPy, Pandas, vizualizatsiya'],
      ['Machine Learning', 'Regressiya, klassifikatsiya, modelni baholash'],
      ['Neyron tarmoqlar va LLM', 'Chuqur o‘rganish, til modellari va ularni ilovaga ulash'],
      ['AI loyiha', 'O‘z AI mahsulotingizni yaratish va taqdim etish'],
    ],
    outcomes: ['Ma’lumotlar bilan ishlay olasiz', 'AI modellarini ilovaga ulaysiz', 'Junior AI mutaxassisi lavozimiga tayyor bo‘lasiz'],
    tools: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'PyTorch', 'LLM API', 'Jupyter'],
  },
  {
    slug: 'rus-tili', title: 'Rus tili', cat: 'til', icon: 'language', price: 590000, from: '#1148d8', to: '#6aa7ff',
    duration: '6 oy', lessons: 72, level: 'Noldan',
    summary: 'Nutq, grammatika va yozuvni noldan yuqori darajagacha o‘rgatamiz.',
    modules: [
      ['Alifbo va talaffuz', 'Harflar, tovushlar, o‘qish qoidalari'],
      ['Grammatika asoslari', 'Kelishiklar, fe’llar, gap tuzilishi'],
      ['Suhbat amaliyoti', 'Kundalik mavzular va speaking klub'],
      ['Yozma nutq', 'Xat, insho va rasmiy yozishmalar'],
      ['Sertifikatga tayyorgarlik', 'Imtihon formati va mock testlar'],
    ],
    outcomes: ['Erkin muloqot qilasiz', 'Rus tilida yozma ish bajara olasiz', 'Sertifikat imtihoniga tayyor bo‘lasiz'],
    tools: ['Speaking klub', 'Audio darslar', 'Lug‘at', 'Mock test'],
  },
  {
    slug: 'ingliz-tili', title: 'Ingliz tili', cat: 'til', icon: 'globe', price: 590000, from: '#1d5bff', to: '#00c2ff',
    duration: '6 oy', lessons: 72, level: 'Noldan',
    summary: 'IELTS va kundalik muloqot uchun tizimli kurs, toza talaffuz.',
    modules: [
      ['Grammar va Vocabulary', 'Asosiy grammatika va faol lug‘at'],
      ['Speaking klub', 'Har hafta suhbat amaliyoti'],
      ['Listening va Reading', 'Akademik matnlar va audio bilan ishlash'],
      ['Writing', 'Essay va xat yozish usullari'],
      ['IELTS mock', 'To‘liq sinov imtihonlari va tahlil'],
    ],
    outcomes: ['Ravon gapira olasiz', 'IELTS formatini puxta bilasiz', 'Chet elda o‘qish yoki ishlashga tayyor bo‘lasiz'],
    tools: ['Speaking klub', 'Listening lab', 'Writing tekshiruvi', 'Mock test'],
  },
  {
    slug: 'turk-tili', title: 'Turk tili', cat: 'til', icon: 'crescent', price: 590000, from: '#2a46d8', to: '#8ab0ff',
    duration: '6 oy', lessons: 72, level: 'Noldan',
    summary: 'Turkiyada o‘qish va ishlash istagidagilar uchun amaliy turk tili.',
    modules: [
      ['Alifbo va asoslar', 'Tovushlar, ildiz va qo‘shimchalar'],
      ['Kundalik muloqot', 'Do‘kon, transport, tanishuv mavzulari'],
      ['Grammatika', 'Zamonlar, kelishiklar va gap qurilishi'],
      ['Biznes turk tili', 'Ish suhbati va rasmiy yozishmalar'],
      ['TÖMER tayyorgarlik', 'Imtihon formati va mock testlar'],
    ],
    outcomes: ['Kundalik hayotda erkin muloqot qilasiz', 'Ish suhbatidan o‘ta olasiz', 'TÖMER imtihoniga tayyor bo‘lasiz'],
    tools: ['Speaking klub', 'Audio darslar', 'Lug‘at', 'Mock test'],
  },
  {
    slug: 'matematika', title: 'Matematika', cat: 'fan', icon: 'math', price: 590000, from: '#0a3bb5', to: '#5a96ff',
    duration: '6 oy', lessons: 72, level: 'Maktab dasturi',
    summary: 'Maktab va OTM imtihonlariga puxta tayyorgarlik, mantiqiy fikrlashni rivojlantirish.',
    modules: [
      ['Algebra', 'Tenglamalar, funksiyalar, progressiyalar'],
      ['Geometriya', 'Planimetriya va stereometriya'],
      ['Mantiqiy masalalar', 'Nostandart masalalarni yechish usullari'],
      ['Test strategiyasi', 'Vaqtni to‘g‘ri taqsimlash va xatolar tahlili'],
      ['Mock imtihon', 'Haqiqiy format asosidagi sinov testlari'],
    ],
    outcomes: ['Murakkab masalalarni yecha olasiz', 'Imtihon strategiyasini bilasiz', 'Natijangiz sezilarli oshadi'],
    tools: ['Masalalar bazasi', 'Mock test', 'Xatolar tahlili'],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);

export const BRANCHES = [
  { name: 'Chilonzor', address: 'Bunyodkor ko‘chasi, 12', x: 30, y: 38 },
  { name: 'Yunusobod', address: 'Amir Temur shoh ko‘chasi, 88', x: 62, y: 22 },
  { name: 'Mirzo Ulug‘bek', address: 'Mustaqillik ko‘chasi, 45', x: 74, y: 55 },
  { name: 'Sergeli', address: 'Yangi Sergeli, 7-kvartal', x: 38, y: 74 },
  { name: 'Samarqand', address: 'Registon ko‘chasi, 20', x: 18, y: 66 },
] as const;

export const FORMATS = ['Offline', 'Online'] as const;
export const TIMES = ['Ertalab', 'Kunduzi', 'Kechqurun'] as const;

export const FAQ: [string, string][] = [
  ['O‘qish qanday tashkil etilgan?', 'Darslar nazariya va amaliyotni birlashtiradi. Har bir modul mini-loyiha bilan yakunlanadi, mentorlar esa har qadamda yordam beradi.'],
  ['4 oyda ish topish haqiqatmi?', 'IT yo‘nalishlarida o‘quvchilarimiz o‘rtacha 4 oyda ish topadi, boshlang‘ich maosh 250$ dan yuqori bo‘ladi. Portfolio va suhbatga birga tayyorlanamiz.'],
  ['Darslar online yoki offline?', 'Ikkala format ham mavjud. 5 ta filialda offline, xohlasangiz online ham o‘qiysiz.'],
  ['Oldindan bilim kerakmi?', 'Yo‘q. Barcha kurslar noldan boshlanadi.'],
  ['Kursdan keyin sertifikat beriladimi?', 'Ha, muvaffaqiyatli tugatganlarga Leaders Academy sertifikati beriladi.'],
  ['Narxlar qancha?', 'Frontend, Backend va Sun’iy intellekt — oyiga 690 000 so‘m. Boshqa fanlar — oyiga 590 000 so‘m.'],
];

export const FEATURES: { icon: IconKey; title: string; text: string }[] = [
  { icon: 'laptop', title: 'Amaliy loyihalar', text: 'Har bir modul real mahsulot bilan tugaydi.' },
  { icon: 'mentor', title: 'Tajribali mentorlar', text: 'Soha mutaxassislari har bir o‘quvchiga e’tibor beradi.' },
  { icon: 'briefcase', title: 'Karyera yordami', text: 'Rezyume, portfolio va suhbatga tayyorlov.' },
  { icon: 'award', title: 'Sertifikat', text: 'Kursni tugatganlarga Leaders Academy sertifikati beriladi.' },
  { icon: 'wifi', title: 'Online va offline', text: '5 ta filialda yoki uydan turib o‘qing.' },
  { icon: 'wallet', title: 'Qulay narx', text: 'Oyiga 590 000 so‘mdan boshlanadi.' },
];

export const ROADMAP: { icon: IconKey; month: string; title: string; text: string }[] = [
  { icon: 'book', month: '1-oy', title: 'Asoslar', text: 'Nazariya va birinchi amaliy vazifalar' },
  { icon: 'gears', month: '2-oy', title: 'Chuqurlashish', text: 'Zamonaviy vositalar va mini-loyihalar' },
  { icon: 'rocket', month: '3-oy', title: 'Real loyiha', text: 'Jamoada haqiqiy mahsulot yaratish' },
  { icon: 'briefcase', month: '4-oy', title: 'Ish topish', text: 'Portfolio, rezyume va suhbat simulyatsiyasi' },
];

export const STEPS: { icon: IconKey; title: string; text: string }[] = [
  { icon: 'form', title: 'Ariza qoldiring', text: 'Saytdagi qisqa formani to‘ldiring.' },
  { icon: 'phone', title: 'Biz qo‘ng‘iroq qilamiz', text: 'Maslahatchi yo‘nalish tanlashga yordam beradi.' },
  { icon: 'users', title: 'Guruhga qo‘shiling', text: 'Qulay vaqt va filialni tanlaysiz.' },
  { icon: 'rocket', title: 'O‘qishni boshlang', text: 'Birinchi darsdan amaliyot boshlanadi.' },
];

export const TESTIMONIALS = [
  { name: 'Jasur', role: 'Frontend · Chilonzor', salary: '270$', text: 'Kursdan 4 oy keyin kompaniyaga junior bo‘lib kirdim. Real loyihalar ishga olinishimda asosiy rol o‘ynadi.' },
  { name: 'Madina', role: 'Sun’iy intellekt · Yunusobod', salary: '300$', text: 'Mentorlar har bir savolga javob berdi. Portfolio bilan suhbatdan oson o‘tdim.' },
  { name: 'Sardor', role: 'Backend · Sergeli', salary: '320$', text: 'Noldan boshladim. Hozir masofaviy ishlayman va oilamga yordam beryapman.' },
];

export const SALARY = [
  { label: 'Kursdan oldin', value: 0, text: '0$' },
  { label: '1-oy', value: 0, text: '0$' },
  { label: '4-oy', value: 250, text: '250$' },
  { label: '8-oy', value: 450, text: '450$' },
  { label: '12-oy', value: 700, text: '700$' },
];

// Namuna ma'lumotlar: haqiqiy o'qituvchilar bilan almashtiring
export const TEACHERS = [
  { name: 'Azizbek Karimov', role: 'Frontend mentor', exp: '6 yil tajriba', tags: ['React', 'TypeScript'] },
  { name: 'Dilshod Rahimov', role: 'Backend mentor', exp: '7 yil tajriba', tags: ['Node.js', 'PostgreSQL'] },
  { name: 'Nodira Yusupova', role: 'AI mutaxassisi', exp: '5 yil tajriba', tags: ['Python', 'ML'] },
  { name: 'Malika Aliyeva', role: 'Ingliz tili o‘qituvchisi', exp: 'IELTS 8.0', tags: ['IELTS', 'Speaking'] },
  { name: 'Timur Sobirov', role: 'Rus tili o‘qituvchisi', exp: '8 yil tajriba', tags: ['Grammatika', 'Suhbat'] },
  { name: 'Aysel Demir', role: 'Turk tili o‘qituvchisi', exp: 'TÖMER sertifikati', tags: ['TÖMER', 'Biznes'] },
];

export const MEDIA: { title: string; from: string; to: string; icon: IconKey }[] = [
  { title: 'Dars jarayoni', from: '#1d5bff', to: '#19d3ff', icon: 'laptop' },
  { title: 'Hackathon', from: '#0b2a8f', to: '#4d8bff', icon: 'trophy' },
  { title: 'Bitiruv kechasi', from: '#6a3dff', to: '#19d3ff', icon: 'grad' },
  { title: 'Mentor bilan', from: '#1148d8', to: '#00c2ff', icon: 'handshake' },
  { title: 'Ochiq dars', from: '#1148d8', to: '#8ab0ff', icon: 'bullhorn' },
  { title: 'Sertifikat topshirish', from: '#0a3bb5', to: '#5a96ff', icon: 'cert' },
  { title: 'Filial sayohati', from: '#2a46d8', to: '#19d3ff', icon: 'building' },
  { title: 'Jamoaviy loyiha', from: '#6a3dff', to: '#4d8bff', icon: 'puzzle' },
];

export const NAV = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/courses', label: 'Kurslar' },
  { href: '/teachers', label: 'O‘qituvchilar' },
  { href: '/results', label: 'Natijalar' },
  { href: '/branches', label: 'Filiallar' },
  { href: '/contact', label: 'Bog‘lanish' },
];

