"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

const WHATSAPP_URL =
  "https://wa.me/77715250266?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21";
const INSTAGRAM_URL = "https://www.instagram.com/izenimplant.kz/";

const NAV = [
  { label: "О нас", href: "#about" },
  { label: "Продукты", href: "#products" },
  { label: "Почему мы?", href: "#why" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Инициализация темы при первой загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  // Функция переключения темы
  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Вынес тумблер в отдельный мини-компонент внутри для удобства рендера
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal/40"
      title={isDarkMode ? "Включить светлую тему" : "Включить темную тему"}
    >
      <span className="sr-only">Переключить тему</span>
      <span
        className={`${
          isDarkMode ? "translate-x-5 bg-neutral-950" : "translate-x-0 bg-white"
        } pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow-md ring-0 transition duration-200 ease-in-out flex items-center justify-center text-[10px] select-none`}
      >
        {isDarkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <a href="#top" className="relative z-50 flex items-center" aria-label="IZEN Implant">
          <img
            src="https://ext.same-assets.com/438059121/2754899708.png"
            alt="IZEN Implant"
            className="h-9 w-auto md:h-10 dark:brightness-110"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[15px] font-medium tracking-wide text-ink/85 dark:text-white/85 transition-colors hover:text-teal dark:hover:text-teal"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right cluster (Desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <ThemeToggle />
          <div className="h-4 w-[1px] bg-ink/10 dark:bg-white/10" /> {/* аккуратный разделитель */}
          <div className="flex items-center gap-2.5">
            <SocialCircle href={WHATSAPP_URL} label="WhatsApp">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </SocialCircle>
            <SocialCircle href={INSTAGRAM_URL} label="Instagram">
              <InstagramIcon className="h-[18px] w-[18px]" />
            </SocialCircle>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-teal px-6 py-3 text-[14px] font-medium uppercase tracking-[0.08em] text-white shadow-sm transition-all duration-300 hover:bg-teal-dark hover:shadow-md"
          >
            Узнать больше
          </a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          
          {/* Mobile toggle burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md text-ink dark:text-white"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[#2b2b2d] px-6 text-center transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <img
          src="https://ext.same-assets.com/438059121/453506697.png"
          alt="IZEN Implant"
          className="mb-2 h-10 w-auto"
        />
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg font-medium text-white/90 transition-colors hover:text-teal"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-2 flex items-center gap-4">
          <SocialCircle href={WHATSAPP_URL} label="WhatsApp" variant="light">
            <WhatsAppIcon className="h-5 w-5" />
          </SocialCircle>
          <SocialCircle href={INSTAGRAM_URL} label="Instagram" variant="light">
            <InstagramIcon className="h-5 w-5" />
          </SocialCircle>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="mt-2 rounded-md bg-teal px-8 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-white"
        >
          Узнать больше
        </a>
      </div>
    </header>
  );
}

function SocialCircle({
  href,
  label,
  children,
  variant = "dark",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
        variant === "dark"
          ? "border-ink/25 text-ink dark:border-white/25 dark:text-white hover:border-teal dark:hover:border-teal hover:bg-teal hover:text-white"
          : "border-white/40 text-white hover:border-teal hover:bg-teal"
      }`}
    >
      {children}
    </a>
  );
}