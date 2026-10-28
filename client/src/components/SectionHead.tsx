import Reveal from './Reveal';

export default function SectionHead({ title, text, light = false }: { title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-4xl leading-[1.05] md:text-5xl">{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? 'text-white/70' : 'text-mut'}`}>{text}</p>}
    </Reveal>
  );
}
