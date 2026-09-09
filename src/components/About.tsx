import { values } from "@/data/content";

export function About() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-cmi-orange uppercase">
            ¿Quiénes somos?
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cmi-navy uppercase sm:text-5xl">
            Un socio operativo, no un proveedor más
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-cmi-steel">
            CMI es una empresa de soluciones integrales en construcción,
            mantenimiento industrial y tratamiento de agua. Acompañamos a plantas,
            comercios e instituciones con trabajo en sitio, criterio técnico y
            respuesta cuando la operación lo exige.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-cmi-orange pl-4">
              <dt className="font-display text-sm tracking-[0.18em] text-cmi-navy uppercase">
                Misión
              </dt>
              <dd className="mt-2 text-sm leading-6 text-cmi-steel">
                Entregar soluciones integrales que superen las expectativas del
                cliente, con calidad, honestidad y resultados medibles.
              </dd>
            </div>
            <div className="border-l-4 border-cmi-navy pl-4">
              <dt className="font-display text-sm tracking-[0.18em] text-cmi-navy uppercase">
                Visión
              </dt>
              <dd className="mt-2 text-sm leading-6 text-cmi-steel">
                Ser el socio estratégico reconocido por calidad, compromiso y
                resultados en el noroeste de México.
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 bg-cmi-orange" />
          <div className="relative overflow-hidden bg-cmi-navy p-8 text-white sm:p-10">
            <p className="font-display text-sm tracking-[0.22em] text-cmi-orange-hot uppercase">
              Nuestros valores
            </p>
            <ul className="mt-8 space-y-5">
              {values.map((value, index) => (
                <li key={value} className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <span className="font-display text-2xl text-cmi-orange-hot">
                    0{index + 1}
                  </span>
                  <span className="font-display text-xl tracking-[0.12em] uppercase">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-script mt-8 text-2xl text-white/90">
              Tu operación en manos expertas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
