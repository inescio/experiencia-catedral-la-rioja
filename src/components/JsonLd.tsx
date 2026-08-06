export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Catedral Basílica de San Nicolás de Bari de La Rioja",
  alternateName: "Catedral de La Rioja",
  description:
    "Basílica Menor y Catedral de San Nicolás de Bari. Templo de estilo ecléctico, con reminiscencias del románico italiano, lo bizantino y lo gótico, reconstruido entre 1899 y 1926 tras el terremoto de 1894, frente a la Plaza 25 de Mayo de La Rioja, Argentina.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://catedralrioja.com.ar",
  image: "/og-image.jpg",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "17:00",
    },
  ],
  touristType: ["Religious tourism", "Cultural tourism", "Heritage tourism"],
  isAccessibleForFree: true,
};
