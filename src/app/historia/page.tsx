import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Recorré la línea de tiempo de la Catedral de La Rioja: desde los orígenes coloniales del siglo XVI hasta su declaración como Monumento Histórico Nacional.",
  alternates: { canonical: "/historia" },
  openGraph: {
    title: "Historia | Catedral La Rioja",
    description:
      "Línea de tiempo: orígenes coloniales, construcción neoclásica y declaración como Monumento Histórico.",
    url: "/historia",
  },
};

const timelineEvents = [
  {
    period: "1560 – 1580",
    title: "Orígenes Coloniales",
    description:
      "Los primeros cimientos fueron establecidos por misioneros, utilizando adobe y madera local. Una estructura modesta que sirvió como el primer centro de fe en la región.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLtiXYRhIaa6XjPmOHBSSMk2WSbhe6V4oAnieogi27vyj-O3eJ0y52TG0LZmqc0pq0JFYpCbOoOA4oPvcLChe0GIItnW2leiUgBwB5iMeFoEgu0oqYjvCsNT3CL9DJGTonsOKZt7YDyp2qTts-VmFbFzMR5Ch7MDIFMNJnnGI7Uu1urK8y4A50kYZYo7S81UAEo5ot4ofiMVuycZxPyBPTFzkXYc1h44gRRWYGEttXVG8VTiHgBef1wYqg",
      alt: "Pintura antigua mostrando la primera estructura de la iglesia colonial en adobe y madera",
    },
    align: "right",
  },
  {
    period: "1745 – 1812",
    title: "Construcción del Templo Actual",
    description:
      "Bajo la dirección del arquitecto principal, comenzó la edificación monumental en piedra de cantera. La fachada principal y las naves tomaron su forma definitiva de estilo neoclásico.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLuXalJyjiEtM6NYY4zgPv8n5pJZcj9kDha_jf4m-dID_s2j1Pd4PMM6ALoEpgxcV3JXRT2PCJm2omX0ZzYvUEcVLMTkiblX3qC2RXb2h0ZLeQkJP_n1kkqeNlWJMrXDE7oEMdC_8YFOEVOnIlTthb4OCRuQI2efiwjSn5j5iMwMTWNpwjRMqtW6BfCrCzYURkrAkqXQF1Kf4NURCQWvCeALD0V_eW7qa9o52zSj4",
      alt: "Detalle de la fachada neoclásica en piedra durante la puesta de sol",
    },
    align: "left",
  },
  {
    period: "1932",
    title: "Monumento Histórico Nacional",
    description:
      "Reconocida oficialmente por su invaluable patrimonio cultural y arquitectónico, la catedral fue declarada Monumento Histórico Nacional, asegurando su preservación para futuras generaciones.",
    image: null,
    align: "right",
  },
];

const historySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Historia de la Catedral Basílica de La Rioja",
  description:
    "Línea de tiempo desde los orígenes coloniales del siglo XVI hasta la declaración como Monumento Histórico Nacional en 1932.",
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
