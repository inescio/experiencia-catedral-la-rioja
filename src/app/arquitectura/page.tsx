import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Arquitectura",
  description:
    "Explorá la arquitectura ecléctica de la Catedral de La Rioja: fachada con reminiscencias del románico italiano, campanarios y cúpula de 1926, y el interior bizantino con el camarín de San Nicolás de Bari.",
  alternates: { canonical: "/arquitectura" },
  openGraph: {
    title: "Arquitectura | Catedral La Rioja",
    description:
      "Fachada ecléctica, campanarios gemelos e interior bizantino. La maestría arquitectónica de Juan Bautista Arnaldi.",
    url: "/arquitectura",
  },
};

const sections = [
  {
    number: "I",
    category: "Exterior",
    title: "Fachada Ecléctica",
    body: "Reconstruida tras el terremoto de 1894, la fachada actual fusiona reminiscencias del románico italiano con acentos bizantinos y góticos, un lenguaje ecléctico poco frecuente en el paisaje riojano. Las galerías laterales que flanquean el pórtico central y el juego de luz sobre la mampostería de piedra le dan un ritmo visual propio a lo largo del día.",
    cta: "Explorar detalles estructurales",
    image: {
      src: "/Imagenes%20catedral/catedral3.png",
      alt: "Vista nocturna del pórtico de entrada de la Catedral de La Rioja con sus columnas monumentales y el interior iluminado al fondo",
      aspect: "aspect-[4/5]",
    },
    layout: "image-left",
  },
  {
    number: "II",
    category: "Ascenso",
    title: "Campanarios y Cúpula",
    body: "Inaugurado como Santuario en 1912, el templo permaneció con su remate inconcluso hasta 1926, año en que se completaron la cúpula central y los dos campanarios gemelos que hoy dominan el perfil de la ciudad. Dirigidas por el arquitecto genovés Juan Bautista Arnaldi, estas torres se convirtieron en anclas estructurales y faros espirituales para La Rioja.",
    cta: null,
    image: {
      src: "/Imagenes%20catedral/catedral4.png",
      alt: "Vista aérea de la Catedral de La Rioja al atardecer, con su cúpula y campanarios gemelos sobre la ciudad",
      aspect: "aspect-square md:aspect-[3/4]",
    },
    layout: "image-right",
  },
  {
    number: "III",
    category: "Interior",
    title: "Nave Bizantina y Camarín de San Nicolás",
    body: "La nave central, de 19 metros de ancho y casi 40 de altura, está decorada con motivos bizantinos y cuatro murales que narran la fundación de La Rioja y sus fiestas religiosas. En el camarín de estilo renacentista se venera la antigua talla en madera de San Nicolás de Bari, traída desde Perú hacia 1640, cuyo rostro oscurecido guarda las marcas de siglos de devoción popular.",
    cta: null,
    image: {
      src: "/Imagenes%20catedral/catedral2.png",
      alt: "Detalle interior en pan de oro de un retablo con la imagen de San Nicolás de Bari en la Catedral de La Rioja",
      aspect: "aspect-[16/9] md:aspect-[4/3]",
    },
    layout: "overlay-card",
  },
];

const architectureSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Arquitectura de la Catedral Basílica de La Rioja",
  description:
    "Análisis arquitectónico: fachada ecléctica con reminiscencias del románico italiano, campanarios y cúpula de 1926, e interior bizantino con el camarín de San Nicolás de Bari.",
  about: {
    "@type": "LandmarkOrHistoricalBuilding",
    name: "Catedral Basílica de San Nicolás de Bari de La Rioja",
  },
};

export default function ArquitecturaPage() {
  return (
    <>
      <JsonLd data={architectureSchema} />

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/CATEDRAL4G.png"
            alt="Vista lateral de la Catedral de La Rioja de día, con su cúpula y cielo despejado"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-antique-white via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center px-6 mt-16 fade-in-up">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-display-lg text-deep-slate mb-4">
            Sinfonía en Piedra
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Explorá la maestría arquitectónica de la Catedral, un testamento de siglos de
            diseño, devoción y elegancia estructural.
          </p>
        </div>
      </section>

      {/* ── Editorial Sections ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {/* Desktop timeline rail */}
        <div
          className="hidden md:block timeline-rail"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />

        {sections.map((sec, idx) => (
          <EditorialSection key={sec.number} section={sec} idx={idx} />
        ))}
      </div>

      {/* Mobile bottom nav spacer */}
      <div className="h-20 md:h-0" />

      <FadeInObserver />
    </>
  );
}

function EditorialSection({
  section,
  idx,
}: {
  section: (typeof sections)[0];
  idx: number;
}) {
  const isOverlay = section.layout === "overlay-card";
  const isRight = section.layout === "image-right";

  return (
    <section
      className={`relative py-16 md:py-24 flex flex-col md:flex-row${
        isRight ? "-reverse" : ""
      } items-center gap-12 fade-in-up ${idx === sections.length - 1 ? "mb-16" : ""}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      {/* Desktop timeline node */}
      <div
        className="hidden md:block timeline-node"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)" }}
      />

      {isOverlay ? (
        <>
          {/* Text card overlapping image */}
          <div className="w-full md:w-5/12 order-2 md:order-1 relative z-10">
            <div className="bg-antique-white p-8 md:p-12 soft-shadow rounded md:-mr-16 relative">
              <SectionText section={section} />
            </div>
          </div>
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <div className={`${section.image.aspect} rounded overflow-hidden soft-shadow`}>
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Standard image + text layout */}
          <div
            className={`w-full md:w-1/2 ${
              isRight ? "md:pr-16 text-left md:text-right" : "order-2 md:order-1"
            }`}
          >
            {isRight ? (
              <SectionText section={section} />
            ) : (
              <div className={`${section.image.aspect} rounded overflow-hidden soft-shadow relative`}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            )}
          </div>
          <div
            className={`w-full md:w-1/2 ${
              isRight ? "relative" : "order-1 md:order-2 md:pl-16"
            }`}
          >
            {isRight ? (
              <div
                className={`${section.image.aspect} rounded overflow-hidden soft-shadow relative md:-mt-12`}
              >
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ) : (
              <SectionText section={section} />
            )}
          </div>
        </>
      )}
    </section>
  );
}

function SectionText({ section }: { section: (typeof sections)[0] }) {
  return (
    <>
      <span className="block text-label-sm font-label-sm uppercase tracking-widest text-gold-leaf mb-4">
        {section.number}. {section.category}
      </span>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-deep-slate mb-6">
        {section.title}
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
        {section.body}
      </p>
      {section.cta && (
        <button className="group inline-flex flex-col items-start text-deep-slate font-label-lg text-label-lg transition-all duration-300 mt-4">
          <span className="mb-1">{section.cta}</span>
          <span className="h-0.5 w-full border-b border-deep-slate group-hover:border-gold-leaf transition-all duration-300" />
        </button>
      )}
    </>
  );
}

