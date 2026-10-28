import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CoursesBrowser from '@/components/CoursesBrowser';

export const metadata: Metadata = { title: 'Kurslar' };

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Kurslar" text="IT yo‘nalishlari oyiga 690 000 so‘mdan, tillar va aniq fanlar 590 000 so‘mdan." />
      <section className="mx-auto max-w-7xl px-5 py-16"><CoursesBrowser /></section>
    </>
  );
}
