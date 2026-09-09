"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, nav } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cmi-navy-deep/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-gradient-to-b from-cmi-navy-deep/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo variant="light" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:text-cmi-orange-hot"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-sm bg-cmi-orange px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-cmi-orange-hot lg:inline-flex"
        >
          Solicitar cotización
        </a>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-cmi-navy-deep px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-sm bg-cmi-orange px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white"
            >
              Solicitar cotización
            </a>
            <a href={company.phoneHref} className="text-sm text-white/70">
              {company.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
