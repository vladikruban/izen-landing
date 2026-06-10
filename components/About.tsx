import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-[#3d2817] py-24 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(178deg, #3d2817 0%, #2a1c12 22%, #120c08 58%, #050505 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            О нас
          </h2>
          <span className="mx-auto mt-7 block h-[2px] w-16 bg-teal" />
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 text-[16px] font-light leading-[1.85] text-white/75">
            <span className="font-semibold text-white">Имплантаты IZEN</span> —
            инновационная технология, стремящаяся к созданию яркой улыбки.
            Основанная в 2016 году командой разработчиков и исследователей,
            которые посвятили более 20 лет исследованиям и разработкам в области
            дентальной имплантации, компания IZEN Implant продолжает
            разрабатывать инновационные продукты, обеспечивающие наилучший
            результат для пациентов.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 text-[16px] font-light leading-[1.85] text-white/75">
            Мы стремимся к дальнейшему росту в этой области, удовлетворяя
            потребности клиентов с помощью безопасных и высококачественных
            продуктов, основанных на доверии и постоянных исследованиях и
            разработках. Имплантат IZEN предлагает более удобную, стабильную и
            оптимизированную систему имплантатов, используя передовые технологии{" "}
            <span className="font-semibold text-white">ZENEX MULTI</span> и{" "}
            <span className="font-semibold text-white">ZENEX PLUS</span> для
            создания линейки продуктов.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
