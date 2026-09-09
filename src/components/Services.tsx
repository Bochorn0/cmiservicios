import Image from "next/image";
import { serviceIcons } from "@/components/Icons";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="servicios" className="bg-cmi-mist">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs tracking-[0.28em] text-cmi-orange uppercase">
            Nuestros servicios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cmi-navy uppercase sm:text-5xl">
            Infraestructura, funcionalidad y confianza
          </h2>
          <p className="mt-5 text-base leading-7 text-cmi-steel">
            Cubrimos el ciclo de mantenimiento industrial: desde la instalación y
            la obra hasta el servicio, las refacciones y la operación diaria.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <li
                key={service.title}
                className="group relative min-h-[280px] overflow-hidden bg-cmi-navy text-white"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,28,0.2)_0%,rgba(11,20,28,0.88)_70%)]" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-cmi-orange text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl tracking-[0.08em] uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{service.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
