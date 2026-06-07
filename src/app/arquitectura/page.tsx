import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Arquitectura",
  description:
    "Explorá la arquitectura de la Catedral de La Rioja: fachada neoclásica, campanarios y detalles en oro de su interior. Siglos de maestría constructiva.",
  alternates: { canonical: "/arquitectura" },
  openGraph: {
    title: "Arquitectura | Catedral La Rioja",
    description:
      "Fachada neoclásica, campanarios e interiores con detalles en oro. La maestría arquitectónica de la Catedral.",
    url: "/arquitectura",
  },
};

const sections = [
  {
    number: "I",
    category: "Exterior",
    title: "Fachada Neoclásica",
    body: "La fachada principal se erige como una obra maestra de la sobriedad monumental. Sin ornamentación excesiva, confía en la pura geometría de sus proporciones neoclásicas para imponer presencia. El juego de luz y sombra sobre la robusta mampostería de piedra crea un ritmo visual dinámico que cambia a lo largo del día.",
    cta: "Explorar detalles estructurales",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLuToZMfvkEnEsPliQKyfFmHMIqiPy04WEcwPAiPOLkiB93eKs2eXMSBdHdgFif742bJfPB1POyYsQz5Q7aFZOUEDPfrRc_4Iy2rjGKw63GPJCuYWW6DjJk5AjIn5snu3C8a_5W1WkK1emlmZMUeqJKp5doPiV1k6BOOtlOP1j2fH5n9JyCkZfkfUGjQOUr7rzQDCMVaPVkDP7Fk3f4xudcBTLc0VBwwJnYtcRWJjbQEG716wS3njG1lYiw",
      alt: "Detalle de la fachada neoclásica de la Catedral con columnas y arco de entrada",
      aspect: "aspect-[4/5]",
    },
    layout: "image-left",
  },
  {
    number: "II",
    category: "Ascenso",
    title: "El Campanario",
    body: "Alzándose sobre la ciudad, las torres gemelas de campanario sirven como anclas estructurales y faros espirituales. La mampostería aquí se vuelve más liviana y perforada, permitiendo que el viento pase por los arcos donde residen las campanas de bronce, enmarcando el cielo en elegantes siluetas.",
    cta: null,
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLsCF2jQc-r4M-R0WcYr-ft6v0Fbz3_6fXrrSQPd8CgQBWhZOZKTjpBtFdCd6ul-bxdZfR7AkTBPBEezWy20scmrp90-VcRj7aqJKR0DRkVqYkwTwqICqDZnPGLO4ne53DQcsE7EOwiNc8bXcXhrs4KlNkZGNdHVGH6kgimgxpprza15Lpt75pUa9Ml4agqAJTouPi-Mr8w1C-r6E4O2DzliTx6VqaJzsOgHzX45qwSiLgs_En4Oa51spQ",
      alt: "Vista vertical del campanario de la Catedral contra el cielo despejado",
      aspect: "aspect-square md:aspect-[3/4]",
    },
    layout: "image-right",
  },
  {
    number: "III",
    category: "Ornamentación",
    title: "Detalles en Oro",
    body: "En contraste con el estoico exterior, los acentos interiores utilizan pan de oro para atraer la mirada y reflejar la escasa luz en las naves más profundas. Estas sutiles intervenciones actúan como signos de puntuación dentro del vasto volumen de la catedral, resaltando relieves escultóricos clave y retablos.",
    cta: null,
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLtVufTrwrTMbjkhykElMlgSY0v80ITHhuo97iApR9wj_rLiwxjbcyRHgeALndaMRp-XkFnPTTq37MvWvITdXexErr4Rv3sXwlDvCCGDvJRLp5EMhKb6BuE7okN4b8mfas-dCjxO4KSKCUrX3DlRc-SujZvkuzZv9qxMZEmP3-afq07P1EJR7TDVlvDcqY0S5rP3TY1IBYPblWjrc6SU-j1_ODjaa-llwNHlQiqXK5fKMs5k1IzP578ySig",
      alt: "Macro detalle de elementos escultóricos dorados integrados en madera antigua y piedra",
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
    "Análisis arquitectónico: fachada neoclásica, campanarios e interior dorado de la Catedral de La Rioja, Argentina.",
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
            src="https://lh3.googleusercontent.com/aida/AP1WRLvxTAibMa4kARGOGgNBDpbpFdwRxFS9U8jQe_nfvA0WEyc4BthuNy4yABCW27Q3fBNFBlddYw2JWORYrq718jzPDPDuScwu-O72bnsy96Rr5q-g9Ga1KAoI5ksF2r3C14Ow61Moym6d8tJjky9wOnaZFs8mlnfQa9wy2FKkszm6PlMZcI7VMP7GXX0h_jb3StjA4kXJCsFefkSzE0bdlS6suluNBz4Zxqr0v3jrMHH4AC6eJ8svZew6pQ"
            alt="Catedral de La Rioja al atardecer"
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

