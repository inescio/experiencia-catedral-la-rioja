"use client";

import { useEffect, useRef, useState } from "react";

const CATHEDRAL_LAT = -29.4131;
const CATHEDRAL_LNG = -66.8505;
const CATHEDRAL_LABEL = "Catedral Basílica de La Rioja, Argentina";

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function GeoMap() {
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "denied">("idle");
  const [distance, setDistance] = useState<number | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) setStatus("denied");
  }, []);

  function handleLocate() {
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const km = haversineKm(latitude, longitude, CATHEDRAL_LAT, CATHEDRAL_LNG);
        setUserCoords({ lat: latitude, lng: longitude });
        setDistance(km);
        setStatus("found");
      },
      () => setStatus("denied"),
      { timeout: 10000 }
    );
  }

  function buildDirectionsUrl() {
    const dest = `${CATHEDRAL_LAT},${CATHEDRAL_LNG}`;
    if (userCoords) {
      return `https://www.google.com/maps/dir/${userCoords.lat},${userCoords.lng}/${dest}`;
    }
    return `https://www.google.com/maps/dir//${dest}`;
  }

  const mapEmbedUrl = `https://maps.google.com/maps?q=${CATHEDRAL_LAT},${CATHEDRAL_LNG}&hl=es&z=15&output=embed`;

  return (
    <div className="bg-surface-bright rounded-xl overflow-hidden soft-shadow grid grid-cols-1 md:grid-cols-2 group hover:shadow-lg transition-shadow duration-500">
      {/* Map iframe */}
      <div className="h-64 md:h-auto relative overflow-hidden">
        <iframe
          ref={iframeRef}
          src={mapEmbedUrl}
          title="Ubicación Catedral La Rioja"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gold-leaf/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Info panel */}
      <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
        <div>
          <h4 className="font-headline-md text-headline-md text-deep-slate mb-1">
            Plaza de la Catedral
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
            Pelagio B. Luna 60<br />
            F5300 La Rioja, Argentina
          </p>
        </div>

        {/* Distance badge */}
        {status === "found" && distance !== null && (
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-gold-leaf text-[18px]">
              location_on
            </span>
            <span className="font-label-lg text-label-lg">
              {distance < 1
                ? `${Math.round(distance * 1000)} m desde tu ubicación`
                : `${distance.toFixed(1)} km desde tu ubicación`}
            </span>
          </div>
        )}

        {status === "denied" && (
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">
            Permiso de ubicación no disponible.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Directions CTA */}
          <a
            href={buildDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-tuscan-sun text-deep-slate font-label-lg text-label-lg px-6 py-3 rounded hover:bg-gold-leaf transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-[18px]">directions</span>
            Cómo llegar
          </a>

          {/* Geolocation button */}
          {status !== "found" && status !== "denied" && (
            <button
              onClick={handleLocate}
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 border border-outline-variant text-on-surface-variant font-label-lg text-label-lg px-6 py-3 rounded hover:border-gold-leaf hover:text-gold-leaf transition-colors duration-300 disabled:opacity-50 disabled:cursor-wait"
            >
              <span className="material-symbols-outlined text-[18px]">
                {status === "loading" ? "sync" : "my_location"}
              </span>
              {status === "loading" ? "Localizando…" : "Mi ubicación"}
            </button>
          )}
        </div>

        {/* Accessibility notes */}
        <div className="pt-2 border-t border-outline-variant/30 space-y-1">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-gold-leaf text-[16px]">accessible</span>
            <span className="font-label-sm text-label-sm opacity-70">Acceso para personas con movilidad reducida</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-gold-leaf text-[16px]">local_parking</span>
            <span className="font-label-sm text-label-sm opacity-70">Estacionamiento en cercanías</span>
          </div>
        </div>
      </div>
    </div>
  );
}
