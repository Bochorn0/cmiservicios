"use client";

import { FormEvent, useState } from "react";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { company, services } from "@/data/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-cmi-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-cmi-orange uppercase">
            Contáctanos
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cmi-navy uppercase sm:text-5xl">
            Platiquemos de su proyecto
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-cmi-steel">
            Esta maqueta concentra la información institucional. El módulo de
            cotizaciones se integrará en la siguiente etapa; por ahora puede
            dejar sus datos y el tipo de servicio.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-cmi-orange">
                <PhoneIcon />
              </span>
              <div>
                <p className="text-xs tracking-[0.16em] text-cmi-steel uppercase">Teléfono</p>
                <a href={company.phoneHref} className="text-lg font-semibold text-cmi-navy">
                  {company.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-cmi-orange">
                <MailIcon />
              </span>
              <div>
                <p className="text-xs tracking-[0.16em] text-cmi-steel uppercase">Correo</p>
                <a href={`mailto:${company.email}`} className="text-lg font-semibold text-cmi-navy">
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-cmi-orange">
                <PinIcon />
              </span>
              <div>
                <p className="text-xs tracking-[0.16em] text-cmi-steel uppercase">Ubicación</p>
                <p className="text-lg font-semibold text-cmi-navy">{company.location}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-[0_20px_50px_rgba(21,35,46,0.08)] sm:p-8">
          {sent ? (
            <div className="flex min-h-[360px] flex-col justify-center">
              <p className="font-display text-2xl text-cmi-navy uppercase">Mensaje registrado</p>
              <p className="mt-3 max-w-md text-cmi-steel">
                Gracias. En esta etapa el formulario es visual: el envío real y
                el flujo de cotizaciones se conectarán después.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 w-fit text-sm font-semibold text-cmi-orange"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-cmi-navy">
                Nombre
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full border border-slate-200 px-3 py-2.5 outline-none focus:border-cmi-orange"
                />
              </label>
              <label className="block text-sm font-medium text-cmi-navy">
                Empresa
                <input
                  name="company"
                  className="mt-1.5 w-full border border-slate-200 px-3 py-2.5 outline-none focus:border-cmi-orange"
                />
              </label>
              <label className="block text-sm font-medium text-cmi-navy">
                Teléfono
                <input
                  required
                  name="phone"
                  className="mt-1.5 w-full border border-slate-200 px-3 py-2.5 outline-none focus:border-cmi-orange"
                />
              </label>
              <label className="block text-sm font-medium text-cmi-navy">
                Correo
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1.5 w-full border border-slate-200 px-3 py-2.5 outline-none focus:border-cmi-orange"
                />
              </label>
              <label className="block text-sm font-medium text-cmi-navy sm:col-span-2">
                Servicio de interés
                <select
                  name="service"
                  className="mt-1.5 w-full border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-cmi-orange"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Tratamiento de agua">Tratamiento de agua</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-cmi-navy sm:col-span-2">
                Mensaje
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full border border-slate-200 px-3 py-2.5 outline-none focus:border-cmi-orange"
                />
              </label>
              <button
                type="submit"
                className="bg-cmi-orange px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase transition hover:bg-cmi-orange-hot sm:col-span-2"
              >
                Enviar solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
