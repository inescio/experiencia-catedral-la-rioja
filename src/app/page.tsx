import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd, { touristAttractionSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Experiencia Catedral La Rioja",
  description:
    "Descubrí la Catedral Basílica de San Nicolás de Bari de La Rioja. Historia, arquitectura, fe y un recorrido inmersivo por uno de los monumentos más importantes de Argentina.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={touristAttractionSchema} />

      {/* ── Hero Section with parallax ── */}
      <section className="relative h-screen w-full flex items-end justify-center pb-32">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/Imagenes%20catedral/catedral.png"
            alt="Fachada de la Catedral de La Rioja iluminada de noche, vista frontal con sus dos torres campanario"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 scrim-overlay z-[1]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto flex flex-col items-center">
          <span
            className="text-gold-leaf tracking-[0.2em] uppercase text-label-sm font-label-sm mb-4 block opacity-0 translate-y-4 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Experiencia Inmersiva
          </span>
          <h1
            className="text-display-lg-mobile font-headline-lg-mobile md:text-display-lg md:font-headline-lg text-white mb-6 drop-shadow-lg opacity-0 translate-y-4 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Catedral de La Rioja
          </h1>
          <p
            className="text-body-lg font-body-lg text-antique-white max-w-2xl mx-auto mb-12 opacity-0 translate-y-4 animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Un encuentro con la historia y la fe
          </p>
          <div
            className="opacity-0 translate-y-4 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Link
              href="#intro"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tuscan-sun text-deep-slate text-label-lg font-label-lg rounded hover:bg-gold-leaf transition-colors duration-300 group"
            >
              Comenzar Recorrido
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce text-white z-10">
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </div>
      </section>

      {/* ── Introduction Section ── */}
      <section
        id="intro"
        className="py-section-gap px-6 md:px-16 bg-antique-white relative overflow-hidden"
      >
        {/* Timeline rail top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gold-leaf opacity-30" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-[1px] bg-gold-leaf" />
              <span className="text-label-sm font-label-sm text-gold-leaf tracking-widest uppercase">
                El Legado
              </span>
            </div>
            <h2 className="text-headline-lg-mobile font-headline-lg-mobile md:text-headline-lg md:font-headline-lg text-deep-slate">
              Una joya arquitectónica que narra siglos de devoción.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed opacity-80">
              Levantada tras el terremoto de 1894 bajo la dirección del arquitecto Juan
              Bautista Arnaldi, la Catedral de La Rioja es hoy Basílica Menor y santuario
              de San Nicolás de Bari. Desde su fachada de reminiscencias románicas hasta
              el camarín donde se venera la histórica imagen traída de Perú, cada rincón
              de este recinto sagrado cuenta una historia de resiliencia, arte y fe
              inquebrantable.
            </p>
            <div className="pt-6">
              <Link
                href="/historia"
                className="group inline-flex items-center gap-2 text-label-lg font-label-lg text-deep-slate hover:text-gold-leaf transition-colors duration-300"
              >
                <span className="pb-1 border-b border-gold-leaf/30 group-hover:border-gold-leaf transition-colors">
                  Conocer la Historia
                </span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 relative">
            <div className="absolute -inset-4 border border-outline-variant/50 rounded-xl translate-x-4 translate-y-4 -z-10" />
            <div className="rounded-xl overflow-hidden soft-shadow aspect-[4/5] relative">
              <Image
                src="/Imagenes%20catedral/catedral4.png"
                alt="Vista aérea de la Catedral de La Rioja al atardecer, con su cúpula y campanarios gemelos sobre la ciudad"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeline rail bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gold-leaf opacity-30" />
      </section>

      {/* ── Quick Access Cards ── */}
      <section className="py-section-gap px-6 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-label-sm font-label-sm text-gold-leaf tracking-widest uppercase">
              Explorá
            </span>
            <h2 className="mt-3 text-headline-lg-mobile font-headline-lg-mobile md:text-headline-lg md:font-headline-lg text-deep-slate">
              Todo sobre la Catedral
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                href: "/historia",
                icon: "history_edu",
                title: "Historia",
                desc: "Del terremoto de 1894 a la Basílica Menor: fe, reconstrucción y patrimonio.",
              },
              {
                href: "/arquitectura",
                icon: "account_balance",
                title: "Arquitectura",
                desc: "Fachada ecléctica, campanarios de 1926 y el camarín de San Nicolás de Bari.",
              },
              {
                href: "/visita",
                icon: "calendar_month",
                title: "Planificar visita",
                desc: "Horarios, ubicación y normas de convivencia para tu recorrido.",
              },
            ].map(({ href, icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-antique-white border border-outline-variant/50 p-8 rounded-lg soft-shadow hover:-translate-y-1 hover:border-gold-leaf transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6 group-hover:bg-tuscan-sun/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-gold-leaf text-[24px]">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-slate mb-2">
                  {title}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm leading-relaxed">
                  {desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-gold-leaf text-label-lg font-label-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver más
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for mobile bottom nav */}
      <div className="h-20 md:h-0" />
    </>
  );
}
