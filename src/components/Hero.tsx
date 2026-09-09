import Image from "next/image";
import { ChartIcon, GearIcon, HelmetIcon, PeopleIcon } from "@/components/Icons";
import { company, pillars } from "@/data/content";

const pillarIcons = [HelmetIcon, PeopleIcon, GearIcon, ChartIcon];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-cmi-navy-deep">
      <Image
        src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1920&q=80"
        alt="Estructura de acero en obra industrial"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,20,28,0.92)_0%,rgba(21,35,46,0.78)_48%,rgba(242,92,10,0.28)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-cmi-orange/20 [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)] lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-48 pt-36 lg:justify-center lg:px-8 lg:pb-40">
        <p className="font-display text-xs tracking-[0.32em] text-cmi-orange-hot uppercase">
          Construcción · Mantenimiento · Tratamiento de agua
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-wide text-white uppercase sm:text-6xl lg:text-7xl">
          Soluciones reales
          <span className="mt-2 block text-cmi-orange-hot">para un mejor mañana</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
          Mantenimiento industrial integral para que su operación no se detenga.
          Diagnóstico, ejecución y seguimiento desde Hermosillo, Sonora.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="rounded-sm bg-cmi-orange px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase transition hover:bg-cmi-orange-hot"
          >
            Solicitar cotización
          </a>
          <a
            href="#servicios"
            className="rounded-sm border border-white/35 px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase transition hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
        <p className="font-script mt-8 text-2xl text-cmi-orange-hot">{company.script}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-cmi-navy/90 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <li key={pillar.title} className="bg-cmi-navy px-5 py-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-cmi-orange text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-sm tracking-[0.14em] text-white uppercase">
                  {pillar.title}
                </p>
                <p className="mt-1 hidden text-xs leading-5 text-white/60 sm:block">
                  {pillar.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
