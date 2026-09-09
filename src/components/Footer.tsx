import { Logo } from "@/components/Logo";
import { company, nav, values } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-cmi-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Construcción, mantenimiento industrial y tratamiento de agua en
            Hermosillo, Sonora.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.2em] text-cmi-orange-hot uppercase">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.2em] text-cmi-orange-hot uppercase">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={company.phoneHref} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>{company.location}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.2em] text-cmi-orange-hot uppercase">
            Valores
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} CMI Construcciones y Mantenimiento Integral.</p>
          <p className="uppercase tracking-[0.18em]">{company.closing}</p>
        </div>
      </div>
    </footer>
  );
}
