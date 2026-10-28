import Icon from './Icon';
import Reveal from './Reveal';
import ApplyButton from './ApplyButton';

export default function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-5">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0b2a8f] via-brand to-cyan p-10 text-center text-white md:p-20">
          <div className="aur -right-20 -top-24 h-[340px] w-[340px] bg-white !opacity-25" />
          <h2 className="relative text-4xl leading-[1.05] md:text-6xl">Kelajagingizni bugundan boshlang</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg opacity-90">Kasbni tanlang, bilim oling va birinchi qadamni Leaders Academy bilan tashlang.</p>
          <ApplyButton className="btn btn-white relative mt-9">Bepul konsultatsiya olish <Icon name="arrow" /></ApplyButton>
        </div>
      </Reveal>
    </section>
  );
}
