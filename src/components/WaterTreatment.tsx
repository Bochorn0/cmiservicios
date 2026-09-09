import Image from "next/image";
import { DropletIcon } from "@/components/Icons";
import { waterServices } from "@/data/content";

export function WaterTreatment() {
  return (
    <section id="agua" className="relative overflow-hidden bg-cmi-water-deep text-white">
      <Image
        src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1600&q=80"
        alt="Sistema industrial de tratamiento de agua"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,77,122,0.94)_0%,rgba(34,120,194,0.72)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-sky-200 uppercase">
            División especializada
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase sm:text-5xl">
            Tratamiento de agua
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
            Soluciones para un futuro más sostenible: diseño, instalación y
            operación de sistemas de tratamiento para uso industrial, comercial y
            municipal, con control y seguimiento.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-sm bg-white px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.16em] text-cmi-water-deep uppercase transition hover:bg-sky-100"
          >
            Hablar con un especialista
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {waterServices.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cmi-water text-white">
                <DropletIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm tracking-[0.08em] uppercase">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
