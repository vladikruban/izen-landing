import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-36 pb-20 sm:pt-40 lg:pt-52 lg:pb-32"
    >
      {/* subtle atmosphere */}
      <div className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-teal/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] top-[28%] hidden h-2.5 w-2.5 rounded-full bg-teal/70 lg:block" />
      <div className="pointer-events-none absolute right-[14%] top-[55%] hidden h-1.5 w-1.5 rounded-full bg-teal/40 lg:block" />

      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-ink/55">
              Корейская универсальная имплантационная
              <br className="hidden sm:block" /> система с мировым именем
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[64px]">
              Официальный представитель{" "}
              <span className="whitespace-nowrap">IZEN Implant</span> в
              Казахстане!
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-[17px] font-light leading-[1.7] text-ink/55">
              Мы предлагаем современную корейскую систему дентальных имплантатов,
              ориентированную на качество, доступность и клиническую
              универсальность. Отличается высокой приживаемостью (~99&nbsp;%),
              комплексными хирургическими комплектами и глобальным
              распространением.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
