import type { Metadata } from "next";
import Image from "next/image";
import GeoMap from "@/components/GeoMap";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Planificar Visita",
  description:
    "Horarios de visita, ubicación con mapa interactivo y normas de convivencia para tu recorrido por la Catedral Basílica de La Rioja.",
  alternates: { canonical: "/visita" },
  openGraph: {
    title: "Planificar Visita | Catedral La Rioja",
    description:
      "Horarios, cómo llegar y normas para visitar la Catedral. Lunes a viernes 9-18h, sábados 10-19h, domingos 12-17h.",
    url: "/visita",
  },
};

const visitSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "Visita a la Catedral Basílica de La Rioja",
  description: "Visitas guiadas y recorrido libre por la Catedral de La Rioja.",
  location: {
    "@type": "Place",
    name: "Catedral Basílica de San Nicolás de Bari de La Rioja",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pelagio B. Luna 60",
      addressLocality: "La Rioja",
      postalCode: "F5300",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -29.4131,
      longitude: -66.8505,
    },
  },
};

const hours = [
  {
    days: "Lunes – Viernes",
    time: "09:00 – 18:00",
    note: "Ingreso libre y oración personal.",
  },
  {
    days: "Sábado",
    time: "10:00 – 19:00",
    note: "Visitas guiadas cada hora.",
  },
  {
    days: "Domingo",
    time: "12:00 – 17:00",
    note: "Abierto para turistas luego de la misa matutina.",
  },
];

const rules = [
  {
    icon: "volume_off",
    title: "Silencio",
    desc: "Se solicita mantener un silencio respetuoso para preservar la atmósfera de recogimiento.",
  },
  {
    icon: "no_photography",
    title: "Sin Flash",
    desc: "Se permite fotografiar, pero está prohibido el uso de flash y trípodes.",
  },
  {
    icon: "checkroom",
    title: "Vestimenta",
    desc: "Se requiere vestimenta apropiada. Hombros y rodillas deben estar cubiertos para ingresar a la nave.",
  },
];

export default function VisitaPage() {
  return (
    <>
      <JsonLd data={visitSchema} />

      {/* Padding for fixed navbar */}
      <div className="pt-16" />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24">

        {/* ── Hero Banner ── */}
        <section className="mb-section-gap">
          <div className="w-full h-64 md:h-[530px] rounded-xl overflow-hidden relative soft-shadow group">
            <div className="absolute inset-0 bg-deep-slate/20 group-hover:bg-deep-slate/10 transition-colors duration-700 z-10" />
            <Image
              src="/Imagenes%20catedral/catedral5.png"
              alt="Fieles reunidos frente a la Catedral de La Rioja iluminada durante una procesión nocturna"
              fill
              priority
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s] ease-out"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
              <p className="font-label-lg text-label-lg text-antique-white uppercase tracking-widest mb-3 opacity-90">
                Planificá tu visita
              </p>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-display-lg text-antique-white drop-shadow-lg">
                Visitá la Catedral
              </h1>
            </div>
          </div>
        </section>

        {/* ── Visiting Hours ── */}
        <section className="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4 md:sticky md:top-24">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-deep-slate mb-4">
              Horarios de Visita
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
              Viví la tranquilidad de la catedral durante el horario de apertura. Las visitas
              guiadas están disponibles los sábados.
            </p>
          </div>

          <div className="md:col-span-8 relative">
            {/* Timeline rail */}
            <div className="absolute left-0 top-2 bottom-2 timeline-rail hidden md:block" />
            <div className="space-y-6 md:pl-12">
              {hours.map(({ days, time, note }) => (
                <div
                  key={days}
                  className="group border-b border-outline-variant/30 pb-6 hover:border-gold-leaf transition-colors duration-300 cursor-default"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-headline-md text-headline-md text-deep-slate group-hover:text-gold-leaf transition-colors duration-300">
                      {days}
                    </h3>
                    <span className="font-label-lg text-label-lg text-gold-leaf">{time}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location / Geo Map ── */}
        <section className="mb-section-gap">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-deep-slate mb-8 text-center md:text-left">
            Ubicación
          </h2>
          <GeoMap />
        </section>

        {/* ── Rules ── */}
        <section className="mb-section-gap">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-deep-slate mb-4">
              Normas de Convivencia
            </h2>
            <div className="h-px w-24 bg-gold-leaf mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rules.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-antique-white border border-outline-variant/50 p-8 rounded-lg soft-shadow hover:-translate-y-1 hover:border-gold-leaf transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-6 group-hover:bg-tuscan-sun/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-gold-leaf text-[30px]">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-slate mb-2">
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile bottom nav spacer */}
      <div className="h-20 md:h-0" />
    </>
  );
}
