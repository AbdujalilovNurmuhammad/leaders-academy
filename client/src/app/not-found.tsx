import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <div className="font-display text-8xl font-extrabold text-brand">404</div>
      <h1 className="mt-4 text-3xl">Sahifa topilmadi</h1>
      <p className="mt-3 text-mut">Siz izlagan sahifa mavjud emas yoki ko‘chirilgan.</p>
      <Link href="/" className="btn btn-primary mt-8">Bosh sahifaga qaytish</Link>
    </section>
  );
}
