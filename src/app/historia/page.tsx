import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Recorré la línea de tiempo de la Catedral de La Rioja: desde el terremoto de 1894 y la construcción liderada por el arquitecto Juan Bautista Arnaldi hasta su declaración como Basílica Menor en 1955.",
  alternates: { canonical: "/historia" },
  openGraph: {
    title: "Historia | Catedral La Rioja",
    description:
      "Línea de tiempo: el terremoto de 1894, la reconstrucción de Arnaldi y la declaración como Basílica Menor en 1955.",
    url: "/historia",
  },
};

const timelineEvents = [
  {
    period: "1894",
    title: "El Terremoto que lo Cambió Todo",
    description:
      "Un violento terremoto arrasa gran parte de la ciudad y destruye la antigua Iglesia Matriz junto con la primitiva capilla de San Nicolás de Bari. Sobre ese mismo solar, frente a la Plaza 25 de Mayo, la comunidad riojana decide levantar un nuevo templo a la altura de su fe.",
    image: {
      src: "/Imagenes%20catedral/Catedral6.png",
      alt: "Vista de la fachada de la Catedral de La Rioja con cielo despejado durante una celebración religiosa",
    },
    align: "right",
  },
  {
    period: "1899 – 1926",
    title: "La Piedra Fundamental y la Obra de Arnaldi",
    description:
      "En 1899 se bendice la piedra fundamental. Bajo la dirección del arquitecto genovés Juan Bautista Arnaldi, la construcción avanza en un estilo ecléctico que funde reminiscencias del románico italiano con acentos bizantinos y góticos. El templo se inaugura como Santuario el 29 de junio de 1912, aunque la cúpula y los campanarios gemelos recién se completan en 1926.",
    image: {
      src: "/catedral7.jpg",
      alt: "Vista nocturna de los campanarios y el frontón de la Catedral de La Rioja, con el reloj y el cartel conmemorativo de aniversario",
    },
    align: "left",
  },
  {
    period: "1934 – 1955",
    title: "De Sede Episcopal a Basílica Menor",
    description:
      "El 20 de abril de 1934 el papa Pío XI crea la Diócesis de La Rioja y el templo se convierte en su Catedral. Dos décadas más tarde, el 14 de enero de 1955, el papa Pío XII lo distingue con el título de Basílica Menor, una de las máximas dignidades que puede recibir un templo católico.",
    image: null,
    align: "right",
  },
];

const historySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Historia de la Catedral Basílica de La Rioja",
  description:
    "Línea de tiempo desde el terremoto de 1894 y la reconstrucción dirigida por Juan Bautista Arnaldi hasta la declaración como Basílica Menor en 1955.",
  about: {
    "@type": "LandmarkOrHistoricalBuilding",
    name: "Catedral Basílica de San Nicolás de Bari de La Rioja",
  },
};

export default function HistoriaPage() {
  return (
    <>
      <JsonLd data={historySchema} />

      {/* Page padding for fixed navbar */}
      <div className="pt-16 md:pt-20" />

      {/* ── Hero heading ── */}
      <section className="px-6 md:px-16 pt-12 pb-8 max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-label-lg font-label-lg text-gold-leaf uppercase tracking-[0.2em] mb-4">
          Línea de Tiempo
        </h2>
        <h1 className="text-display-lg-mobile font-headline-lg-mobile md:text-display-lg md:font-headline-lg text-deep-slate mb-6 max-w-2xl leading-tight">
          Un Legado Tallado en Piedra
        </h1>
        <p className="text-body-lg font-body-lg text-secondary max-w-xl md:max-w-3xl">
          Explorá los hitos arquitectónicos e históricos que dieron forma a nuestra icónica
          catedral a lo largo de los siglos.
        </p>
      </section>

      {/* ── Timeline ── */}
      <section className="relative px-6 md:px-16 py-12 max-w-7xl mx-auto w-full">
        {/* The rail (desktop only — centered) */}
        <div
          className="hidden md:block timeline-rail"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />
        {/* Mobile rail (left side) */}
        <div
          className="md:hidden timeline-rail"
          style={{ left: "24px" }}
        />

        {timelineEvents.map((ev, idx) => (
          <div
            key={ev.period}
            className={`relative flex flex-col md:flex-row${
              ev.align === "left" ? "-reverse" : ""
            } items-start md:items-center mb-section-gap w-full group fade-in-up`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Mobile node */}
            <div className="md:hidden timeline-node" style={{ top: "24px", left: "20px" }} />

            {/* Desktop text side */}
            <div
              className={`hidden md:flex w-1/2 relative ${
                ev.align === "right" ? "justify-end pr-16" : "justify-start pl-16"
              }`}
            >
              {/* Desktop node */}
              <div
                className="timeline-node"
                style={
                  ev.align === "right"
                    ? { right: "-4px", top: "50%", transform: "translateY(-50%) rotate(45deg)" }
                    : { left: "-4px", top: "50%", transform: "translateY(-50%) rotate(45deg)" }
                }
              />
              <div className={ev.align === "right" ? "text-right" : "text-left"}>
                <span className="text-label-lg font-label-lg text-gold-leaf tracking-widest block mb-2">
                  {ev.period}
                </span>
                <h3 className="text-headline-lg font-headline-lg text-deep-slate mb-4">
                  {ev.title}
                </h3>
                <p className="text-body-md font-body-md text-secondary max-w-md">
                  {ev.description}
                </p>
              </div>
            </div>

            {/* Image / mobile text side */}
            <div className="w-full md:w-1/2 pl-12 md:pl-16 relative z-10">
              {/* Mobile content */}
              <div className="md:hidden mb-6">
                <span className="text-label-lg font-label-lg text-gold-leaf tracking-widest block mb-2">
                  {ev.period}
                </span>
                <h3 className="text-headline-lg-mobile font-headline-lg-mobile text-deep-slate mb-4">
                  {ev.title}
                </h3>
                <p className="text-body-md font-body-md text-secondary">{ev.description}</p>
              </div>

              {ev.image ? (
                <div className="bg-surface-container-lowest rounded overflow-hidden soft-shadow aspect-[4/3] w-full max-w-lg relative group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                  <Image
                    src={ev.image.src}
                    alt={ev.image.alt}
                    fill
                    className="object-cover object-center opacity-90"
                  />
                </div>
              ) : (
                /* Last event — ghost CTA button instead of image */
                <div className="mt-8">
                  <button className="group/btn inline-flex items-center text-label-lg font-label-lg text-deep-slate tracking-widest uppercase transition-all duration-300 hover:text-gold-leaf">
                    <span className="relative">
                      Leer el Decreto
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-leaf transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <span className="material-symbols-outlined ml-2 text-[16px] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Bottom cap */}
        <div className="absolute bottom-0 left-[24px] md:left-1/2 w-2 h-2 bg-gold-leaf rounded-full md:-translate-x-1/2 -translate-x-[3px]" />
      </section>

      {/* Mobile bottom nav spacer */}
      <div className="h-20 md:h-0" />

      <FadeInObserver />
    </>
  );
}
