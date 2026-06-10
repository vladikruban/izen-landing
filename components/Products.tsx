import { Reveal } from "@/components/Reveal";

type Feature = { lead: string; text: string };

const PLUS_FEATURES: Feature[] = [
  {
    lead: "Верхняя резьба и винтовая резьба:",
    text: "микро-канавка уменьшает потерю костной массы. Обратная коническая форма уменьшает повреждение твердой костной ткани. Расширяющаяся кверху винтовая резьба для улучшения плотности кости в мягкой кости.",
  },
  {
    lead: "Двойная резьба с шагом 1,0 и широкая резьба:",
    text: "помогает сократить время установки имплантата. Широкая и глубокая форма винта.",
  },
  {
    lead: "Корпус с конической конструкцией:",
    text: "коническая конструкция корпуса помогает обеспечить первоначальную устойчивость.",
  },
  {
    lead: "SLA Поверхность:",
    text: "обеспечивает идеальную форму поверхности. Шероховатость Ra 2,0-3,0 мкм. Безопасная поверхность без остаточной кислоты. Безопаснее, чем другие.",
  },
  {
    lead: "Широкая апикальная резьба:",
    text: "возможность обеспечить первичную стабильность имплантата за счет агрессивной резьбы в апикальной части.",
  },
  {
    lead: "Режущая кромка спирали:",
    text: "предотвращает перегрузку во время установки. Способствует стабильной остеоинтеграции за счет улучшения кровотока.",
  },
];

const MULTI_FEATURES: Feature[] = [
  {
    lead: "Открытая резьба:",
    text: "легко контролируемая глубина установки имплантата предотвращает некроз кости.",
  },
  {
    lead: "Двойная резьба с шагом 0,8:",
    text: "обеспечивает ширину внутреннего соединения и легкость введения. Помогает сократить время установки имплантата.",
  },
  {
    lead: "Корпус с конической конструкцией:",
    text: "коническая конструкция корпуса помогает обеспечить первоначальную устойчивость.",
  },
  {
    lead: "SLA Поверхность:",
    text: "обеспечивает идеальную форму поверхности. Шероховатость Ra 2,0-3,0 мкм. Безопасная поверхность без остаточной кислоты. Безопаснее, чем другие.",
  },
  {
    lead: "Широкая апикальная резьба:",
    text: "возможность обеспечить первичную стабильность имплантата за счет агрессивной резьбы в апикальной части.",
  },
  {
    lead: "Режущая кромка спирали:",
    text: "предотвращает перегрузку во время установки. Способствует стабильной остеоинтеграции за счет улучшения кровотока.",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-black pb-24 pt-4 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Product
          title="Имплантаты PLUS"
          features={PLUS_FEATURES}
          image="https://ext.same-assets.com/438059121/4035644807.png"
          productName="ZENEX PLUS"
        />
        <div className="mt-20 lg:mt-28">
          <Product
            title="Имплантаты MULTI"
            features={MULTI_FEATURES}
            image="https://ext.same-assets.com/438059121/2577008092.png"
            productName="ZENEX MULTI"
          />
        </div>
      </div>
    </section>
  );
}

function Product({
  title,
  features,
  image,
  productName,
}: {
  title: string;
  features: Feature[];
  image: string;
  productName: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <Reveal className="order-2 lg:order-1">
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        <ul className="mt-6 space-y-4">
          {features.map((f) => (
            <li key={f.lead} className="flex gap-3 text-white/65">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/80" />
              <p className="text-[15px] leading-[1.6]">
                <span className="italic text-white/85">{f.lead}</span> {f.text}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="order-1 lg:order-2">
        <figure className="flex flex-col items-center">
          <div className="group relative flex w-full items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-teal/[0.06] blur-2xl" />
            <img
              src={image}
              alt={productName}
              className="relative max-h-[460px] w-auto max-w-[78%] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-6 w-full max-w-[78%] self-center text-left lg:self-start">
            <span className="block text-[15px] tracking-wide text-white/65">
              ПРОДУКТЫ
            </span>
            <span className="mt-0.5 block text-[12px] italic tracking-[0.15em] text-white/40">
              {productName}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
