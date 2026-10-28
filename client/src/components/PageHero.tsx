export default function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="grid-bg" />
      <div className="aur -right-24 -top-36 h-[460px] w-[460px] bg-brand" />
      <div className="aur -bottom-40 -left-24 h-[360px] w-[360px] bg-cyan [animation-delay:-7s]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24">
        <h1 className="text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75 md:text-xl">{text}</p>
      </div>
    </section>
  );
}
