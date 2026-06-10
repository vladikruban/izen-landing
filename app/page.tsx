"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Activity, 
  Layers, 
  Users, 
  MapPin, 
  Mail, 
  Building, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Hash
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("plus");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const WHATSAPP_URL = "https://wa.me/77041240129"; 

  // Строгая типизация параметра id для устранения ошибки TS
  const scrollToSection = (id: string): void => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Строгая типизация события формы для устранения ошибки TS
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const subject = encodeURIComponent("Заявка с сайта IZEN Implant");
    const body = encodeURIComponent(`Новая заявка:\n\nИмя: ${name}\nEmail/Телефон: ${email}\nСообщение: ${message}`);
    window.location.href = `mailto:izenimplantkz@mail.ru?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-neutral-100 antialiased selection:bg-[#64b1af] selection:text-white transition-colors duration-300">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="IZEN Implant" className="h-9 w-auto object-contain brightness-100" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
            {["О нас", "Продукты", "Почему мы?", "Контакты"].map((item, idx) => {
              const ids = ["about", "products", "why-us", "contacts"];
              return (
                <button 
                  key={idx} 
                  onClick={() => scrollToSection(ids[idx])} 
                  className="hover:text-[#64b1af] transition-colors duration-200 relative group py-1"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64b1af] transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection("contacts")}
                className="rounded-full bg-[#64b1af] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:bg-[#529e9c] hover:shadow-xl hover:shadow-[#64b1af]/20 active:scale-95 transition-all duration-200"
              >
                Связаться
              </button>
            </div>

            <button className="md:hidden text-neutral-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 space-y-3 animate-fadeIn">
            {["О нас", "Продукты", "Почему мы?", "Контакты"].map((item, idx) => {
              const ids = ["about", "products", "why-us", "contacts"];
              return (
                <button 
                  key={idx} 
                  onClick={() => scrollToSection(ids[idx])} 
                  className="block w-full text-left py-2 text-neutral-300 hover:text-[#64b1af] transition-colors"
                >
                  {item}
                </button>
              );
            })}
            <button 
              onClick={() => scrollToSection("contacts")}
              className="w-full text-center rounded-lg bg-[#64b1af] py-2.5 text-sm font-semibold text-neutral-950 active:scale-[0.98] transition-transform"
            >
              Связаться с нами
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-neutral-800 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,177,175,0.06)_0,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#64b1af] md:text-sm animate-pulse">
            КОРЕЙСКАЯ УНИВЕРСАЛЬНАЯ ИМПЛАНТАЦИОННАЯ СИСТЕМА С МИРОВЫМ ИМЕНЕМ
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Официальный представитель <span className="text-[#64b1af] drop-shadow-[0_0_15px_rgba(100,177,175,0.15)]">IZEN Implant</span> в Казахстане!
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-400 md:text-lg">
            Мы предлагаем корейскую систему дентальных имплантатов, ориентированную на качество, доступность и клиническую универсальность. Отличается высокой приживаемостью (~99%), комплексными хирургическими комплектами и глобальным распространением.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <button 
              onClick={() => scrollToSection("about")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#64b1af] px-8 py-4 text-sm font-semibold tracking-wide text-neutral-950 hover:bg-[#529e9c] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#64b1af]/20 active:scale-[0.98] transition-all duration-300"
            >
              Узнать больше
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* UPDATED WHATSAPP BUTTON */}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-neutral-950 hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98] transition-all duration-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.011 11.966.011c3.182.001 6.174 1.242 8.426 3.496 2.252 2.253 3.491 5.244 3.491 8.425 0 6.613-5.34 11.951-11.953 11.951-2.006-.002-3.97-.504-5.711-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.86-9.849 0-2.64-1.03-5.122-2.903-6.994-1.872-1.873-4.36-2.903-7.006-2.903-5.44 0-9.863 4.414-9.863 9.85 0 1.693.445 3.344 1.292 4.811l-.974 3.556 3.651-.956zm10.912-3.52c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Консультация в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-b border-neutral-800 bg-neutral-950 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#64b1af]">КОМПАНИЯ IZEN</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">О нас</p>
            <div className="mx-auto mt-4 h-1 w-12 rounded bg-[#64b1af]" />
          </div>

          <div className="mt-16 space-y-8 text-neutral-300 font-light leading-relaxed md:text-lg">
            <p className="border-l-2 border-[#64b1af] pl-6 text-white font-normal text-xl md:text-2xl transition-all duration-300 hover:border-l-4">
              Имплантаты IZEN — инновационная технология, стремящаяся к созданию яркой улыбки.
            </p>
            <p>
              Основанная в 2016 году командой разработчиков и исследователей, которые посвятили более 20 лет исследованиям и разработкам в области дентальной implанатации, компания IZEN Implant продолжает разрабатывать инновационные продукты, обеспечивающие наилучший результат для пациентов.
            </p>
            <p>
              Мы стремимся к дальнейшему росту в этой области, удовлетворяя потребности клиентов с помощью безопасных и высококачественных продуктов, основанных на доверии и постоянных исследованиях и разработкам.
            </p>
            <p>
              Имплантат IZEN предлагает более удобную, стабильную и оптимизированную систему имплантатов, используя передовые технологии <span className="font-semibold text-[#64b1af]">ZENEX MULTI</span> и <span className="font-semibold text-[#64b1af]">ZENEX PLUS</span> для создания превосходной линейки продуктов.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-neutral-900 px-6 py-24 md:py-32 border-b border-neutral-800 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#64b1af]">КАТАЛОГ ПРОДУКЦИИ</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Продукты и Линейки</p>
            <div className="mx-auto mt-4 h-1 w-12 rounded bg-[#64b1af]" />
          </div>

          <div className="mt-12 flex justify-center relative z-20">
            <div className="inline-flex rounded-xl bg-neutral-950 p-1.5 border border-neutral-800">
              <button
                onClick={() => setActiveTab("plus")}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === "plus" 
                    ? "bg-[#64b1af] text-neutral-950 shadow-md" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ZENEX PLUS
              </button>
              <button
                onClick={() => setActiveTab("multi")}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === "multi" 
                    ? "bg-[#64b1af] text-neutral-950 shadow-md" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ZENEX MULTI
              </button>
            </div>
          </div>

          <div className="mt-16 relative z-10">
            {activeTab === "plus" ? (
              <div className="animate-fadeIn">
                <div className="mb-8 rounded-2xl bg-[#64b1af]/5 border border-[#64b1af]/20 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Имплантаты PLUS</h3>
                  <p className="text-sm text-neutral-400 font-light">Флагманские решения для максимальной остеоинтеграции и надежности.</p>
                </div>
                
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-4 flex justify-center">
                    <img src="/plus.png" alt="ZENEX PLUS Implant" className="max-h-[420px] w-auto object-contain rounded-xl shadow-xl bg-neutral-950/30 p-4 border border-neutral-800 hover:scale-102 transition-transform duration-500" />
                  </div>
                  
                  <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                    {[
                      { t: "Верхняя резьба и винтовая резьба", d: "Микро-канавка уменьшает потерю костной массы. Обратная коническая форма уменьшает повреждение твердой костной ткани. Расширяющаяся кверху винтовая резьба для улучшения плотности кости в мягкой кости." },
                      { t: "Двойная резьба с шагом 1,0 и широкая резьба", d: "Помогает сократить время установки имплантата. Широкая и глубокая форма винта." },
                      { t: "Корпус с конической конструкцией", d: "Коническая конструкция корпуса помогает обеспечить первоначальную устойчивость." },
                      { t: "SLA Поверхность", d: "Обеспечивает идеальную форму поверхности. Шероховатость Ra 2,0-3,0 мкм. Безопасная поверхность без остаточной кислоты. Безопаснее, чем другие." },
                      { t: "Широкая апикальная резьба", d: "Возможность обеспечить первичную стабильность имплантата за счет агрессивной резьбы в апикальной части." },
                      { t: "Режущая кромка спирали", d: "Предотвращает перегрузку во время установки. Способствует стабильной остеоинтеграции за счет улучшения кровотока." }
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#64b1af]/10 text-[#64b1af] text-xs font-bold mb-3">{i+1}</div>
                        <h4 className="text-base font-semibold text-white">{item.t}</h4>
                        <p className="mt-2 text-xs font-light leading-relaxed text-neutral-400">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <div className="mb-8 rounded-2xl bg-[#64b1af]/5 border border-[#64b1af]/20 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Имплантаты MULTI</h3>
                  <p className="text-sm text-neutral-400 font-light">Универсальная адаптируемая система для гибких клинических сценариев.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-4 flex justify-center">
                    <img src="/multi.png" alt="ZENEX MULTI Implant" className="max-h-[420px] w-auto object-contain rounded-xl shadow-xl bg-neutral-950/30 p-4 border border-neutral-800 hover:scale-102 transition-transform duration-500" />
                  </div>
                  
                  <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                    {[
                      { t: "Открытая резьба", d: "Легко контролируемая глубина установки имплантата предотвращает некроз кости." },
                      { t: "Двойная резьба с шагом 0,8", d: "Обеспечивает ширину внутреннего соединения и легкость введения. Помогает сократить время установки имплантата." },
                      { t: "Корпус с конической конструкцией", d: "Коническая конструкция корпуса помогает обеспечить первоначальную устойчивость." },
                      { t: "SLA Поверхность", d: "Обеспечивает идеальную форму поверхности. Шероховатость Ra 2,0-3,0 мкм. Безопасная поверхность без остаточной кислоты. Безопаснее, чем другие." },
                      { t: "Широкая апикальная резьба", d: "Возможность обеспечить первичную стабильность имплантата за счет агрессивной резьбы в апикальной части." },
                      { t: "Режущая кромка спирали", d: "Предотвращает перегрузку во время установки. Способствует стабильной остеоинтеграции за счет улучшения кровотока." }
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#64b1af]/10 text-[#64b1af] text-xs font-bold mb-3">{i+1}</div>
                        <h4 className="text-base font-semibold text-white">{item.t}</h4>
                        <p className="mt-2 text-xs font-light leading-relaxed text-neutral-400">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PLATFORMS */}
          <div className="border-t border-neutral-800 pt-16 mt-20 relative z-10">
            <h4 className="text-center text-xl font-bold text-white tracking-wide mb-12 uppercase">
              ВНУТРЕННИЕ ОРТОПЕДИЧЕСКИЕ ПЛАТФОРМЫ ZENEX
            </h4>
            
            <div className="grid gap-8 md:grid-cols-3">
              
              {/* I-SYSTEM */}
              <div className="rounded-xl border border-green-500/20 bg-neutral-950/40 p-8 shadow-[0_0_20px_rgba(34,197,94,0.04)] transition-all duration-300 hover:bg-neutral-950/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.08)] hover:border-green-500/40 hover:-translate-y-1.5">
                <span className="text-xs font-bold text-green-500/80 uppercase tracking-widest">Платформа</span>
                <h5 className="mt-2 text-2xl font-black text-white tracking-wide">І-СИСТЕМА</h5>
                <ul className="mt-6 space-y-4 text-sm font-light text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>11° конструкция конического двухконтактного соединения для предотвращения ослабления винта.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>Благодаря узкому имплантату Narrow, возможно использовать в узкой кости.</span>
                  </li>
                </ul>
              </div>

              {/* T-SYSTEM */}
              <div className="rounded-xl border border-orange-500/20 bg-neutral-950/40 p-8 shadow-[0_0_20px_rgba(249,115,22,0.04)] transition-all duration-300 hover:bg-neutral-950/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.08)] hover:border-orange-500/40 hover:-translate-y-1.5">
                <span className="text-xs font-bold text-orange-500/80 uppercase tracking-widest">Платформа</span>
                <h5 className="mt-2 text-2xl font-black text-white tracking-wide">Т-СИСТЕМА</h5>
                <ul className="mt-6 space-y-4 text-sm font-light text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>Глубокое шестигранное отверстие для предотвращения вращения абатмента.</span>
                  </li>
                </ul>
              </div>

              {/* R-SYSTEM */}
              <div className="rounded-xl border border-blue-500/20 bg-neutral-950/40 p-8 shadow-[0_0_20px_rgba(59,130,246,0.04)] transition-all duration-300 hover:bg-neutral-950/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)] hover:border-blue-500/40 hover:-translate-y-1.5">
                <span className="text-xs font-bold text-blue-500/80 uppercase tracking-widest">Платформа</span>
                <h5 className="mt-2 text-2xl font-black text-white tracking-wide">R-СИСТЕМА</h5>
                <ul className="mt-6 space-y-4 text-sm font-light text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>5° коническое соединение для обеспечения прочной фиксации для внутреннего винта.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Легкое затягивание и отделение абатмента.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="border-b border-neutral-800 bg-neutral-950 px-6 py-24 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#64b1af]">НАШИ ПРЕИМУЩЕСТВА</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Почему мы?</p>
            <div className="mx-auto mt-4 h-1 w-12 rounded bg-[#64b1af]" />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { i: ShieldCheck, t: "Передовые технологии", d: "Разработка и поставка инновационных продуктов, основанные на гибких и динамичных идеях." },
              { i: Users, t: "Опытная команда", d: "Наши специалисты имеют богатый опыт и высокую квалификацию, что позволяет нам предоставлять качественные услуги." },
              { i: Activity, t: "Контроль качества", d: "Поставка клиентам сертифицированной, надежной продукции через строгий контроль качества." },
              { i: Layers, t: "Универсальное решение", d: "Предоставление универсального решения для комплексного ухода за зубами для удобства клиентов. Подходят для начинающих и опытных имплантологов." },
              { i: GraduationCap, t: "Образование", d: "Мы проводим офис-курсы с демонстрацией и практикой на регулярной основе, а также предлагаем ежегодные поездки на международные образовательные программы." },
              { i: Award, t: "Гарантия качества", d: "Мы гарантируем высокое качество предоставляемых услуг и продуктов." }
            ].map((box, idx) => (
              <div key={idx} className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 hover:bg-neutral-900 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-lg hover:shadow-[#64b1af]/5 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 border border-neutral-800 text-[#64b1af] group-hover:bg-[#64b1af] group-hover:text-neutral-950 transition-all duration-300">
                  <box.i size={22} />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-xs font-bold text-neutral-600 font-mono">0{idx+1}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#64b1af] transition-colors duration-200">{box.t}</h3>
                </div>
                <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-neutral-900 px-6 py-24 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 items-stretch">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#64b1af]">ОБРАТНАЯ СВЯЗЬ</h2>
                <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Контактная информация</p>
                <div className="mt-4 h-1 w-12 rounded bg-[#64b1af]" />
                
                <p className="mt-6 text-sm font-light text-neutral-400 leading-relaxed">
                  Если у вас возникли вопросы по поводу закупок, партнерства или обучения, свяжитесь с нами через форму обратной связи или используйте официальные реквизиты компании.
                </p>
              </div>

              <div className="mt-10 rounded-xl bg-neutral-950 border border-neutral-800 p-6 space-y-4 text-sm font-light flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">Юридические данные компании</div>
                  <div className="flex items-center gap-3 text-neutral-300 group">
                    <Building size={16} className="text-[#64b1af] shrink-0 group-hover:scale-110 transition-transform" />
                    <span><strong>Компания:</strong> ИП IZEN IMPLANT</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300 group">
                    <Hash size={16} className="text-[#64b1af] shrink-0 group-hover:scale-110 transition-transform" />
                    <span><strong>БИН (ИИН):</strong> 760412401295</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300 group">
                    <ShieldCheck size={16} className="text-[#64b1af] shrink-0 group-hover:scale-110 transition-transform" />
                    <span><strong>Банк:</strong> АО &quot;Kaspi Bank&quot; (КБе: 19, БИК: CASPKZKA)</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300 group">
                    <Layers size={16} className="text-[#64b1af] shrink-0 group-hover:scale-110 transition-transform" />
                    <span><strong>Номер счёта:</strong> KZ17722S000039865954</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-300 pt-2 border-t border-neutral-800 group">
                    <MapPin size={16} className="text-[#64b1af] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span><strong>Адрес:</strong> Казахстан, Астана, ул. А.Бокейхана 11/1</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300 group">
                    <Mail size={16} className="text-[#64b1af] shrink-0 group-hover:scale-110 transition-transform" />
                    <span><strong>e-mail:</strong> <a href="mailto:izenimplantkz@mail.ru" className="text-[#64b1af] hover:underline">izenimplantkz@mail.ru</a></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 mt-auto flex flex-col gap-2">
                  <a 
                    href="https://2gis.kz/astana/search/izen%20roott/firm/70000001102713480/71.430959%2C51.083848?m=71.443112%2C51.129773%2F11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-4 py-2.5 text-xs font-medium tracking-wide text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60 active:scale-[0.99] transition-all duration-200 w-full justify-center"
                  >
                    <span>Открыть филиал на карте 2GIS</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/izenimplant.kz/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg border border-pink-500/30 bg-pink-500/5 px-4 py-2.5 text-xs font-medium tracking-wide text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/60 active:scale-[0.99] transition-all duration-200 w-full justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="lg:col-span-7 rounded-2xl bg-neutral-950 border border-neutral-800 p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10 w-full block box-border">
                
                {/* ИМЯ */}
                <div className="w-full block box-border">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">ВАШЕ ИМЯ</label>
                  <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Нурланов Нурлан" 
                    className="block w-full box-border rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#64b1af] focus:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#64b1af]/20 focus:shadow-[0_0_15px_rgba(100,177,175,0.25)] transition-all duration-200" 
                  />
                </div>

                {/* ПОЧТА / ТЕЛЕФОН */}
                <div className="w-full block box-border">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">EMAIL ДЛЯ СВЯЗИ</label>
                  <input 
                    type="text" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="example@mail.com" 
                    className="block w-full box-border rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#64b1af] focus:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#64b1af]/20 focus:shadow-[0_0_15px_rgba(100,177,175,0.25)] transition-all duration-200" 
                  />
                </div>

                {/* СООБЩЕНИЕ */}
                <div className="w-full block box-border">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">СООБЩЕНИЕ ИЛИ ВОПРОС</label>
                  <textarea 
                    rows={6} 
                    required 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Здравствуйте! Меня интересуют условия сотрудничества..." 
                    className="block w-full box-border min-h-[180px] rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#64b1af] focus:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#64b1af]/20 focus:shadow-[0_0_15px_rgba(100,177,175,0.25)] transition-all duration-200 resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="block w-full box-border rounded-xl bg-[#64b1af] py-4 text-sm font-bold uppercase tracking-wider text-neutral-950 hover:bg-[#529e9c] hover:shadow-[0_0_25px_rgba(100,177,175,0.35)] active:scale-[0.99] transition-all text-center"
                >
                  Отправить заявку
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}