import Image from "next/image";
import { commitments } from "@/data/content";

export function Commitment() {
  return (
    <section id="compromiso" className="bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?auto=format&fit=crop&w=1600&q=80"
            alt="Personal de CMI en sitio industrial"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cmi-navy/35" />
          <div className="absolute right-0 bottom-0 left-0 bg-cmi-orange px-8 py-6">
            <p className="font-script text-2xl text-white sm:text-3xl">
              Tu operación en manos expertas
            </p>
          </div>
        </div>

        <div className="bg-cmi-navy px-6 py-16 text-white sm:px-12">
          <p className="font-display text-xs tracking-[0.28em] text-cmi-orange-hot uppercase">
            Nuestro compromiso
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase">
            Calidad que se nota en planta
          </h2>
          <ul className="mt-10 space-y-7">
            {commitments.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-display text-cmi-orange-hot">0{index + 1}</span>
                <div>
                  <h3 className="font-display tracking-[0.1em] uppercase">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
