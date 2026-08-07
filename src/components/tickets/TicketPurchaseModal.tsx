"use client";

import { useEffect, useState } from "react";
import {
  ARGENTINO_CATEGORIES,
  EXTRANJERO_CATEGORIES,
  calculateTotal,
  categoriesFor,
  formatARS,
  submitOrderToOnTicket,
  totalPeople,
  type Nationality,
  type TicketCategoryId,
} from "./ticketPricing";

type Step = "nationality" | "quantity" | "summary" | "done";

interface TicketPurchaseModalProps {
  onClose: () => void;
}

export default function TicketPurchaseModal({ onClose }: TicketPurchaseModalProps) {
  const [step, setStep] = useState<Step>("nationality");
  const [nationality, setNationality] = useState<Nationality | null>(null);
  const [country, setCountry] = useState("");
  const [quantities, setQuantities] = useState<Partial<Record<TicketCategoryId, number>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const categories = nationality ? categoriesFor(nationality) : [];
  const total = calculateTotal(categories, quantities);
  const people = totalPeople(quantities);

  function selectNationality(value: Nationality) {
    setNationality(value);
    setQuantities({});
    if (value === "argentina") {
      setCountry("");
    }
  }

  function adjustQuantity(id: TicketCategoryId, delta: number) {
    setQuantities((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  }

  async function handleConfirm() {
    if (!nationality) return;
    setSubmitting(true);
    await submitOrderToOnTicket({
      nationality,
      country: nationality === "extranjero" ? country : undefined,
      quantities,
      total,
    });
    setSubmitting(false);
    setStep("done");
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-tierra-oscuro/60 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-antique-white rounded-xl soft-shadow p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Compra de entradas"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-label-lg text-label-lg text-gold-leaf uppercase tracking-widest mb-1">
              {step === "nationality" && "Paso 1 de 3"}
              {step === "quantity" && "Paso 2 de 3"}
              {step === "summary" && "Paso 3 de 3"}
              {step === "done" && "Listo"}
            </p>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-deep-slate">
              Comprar Entradas
            </h2>
          </div>
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="text-on-surface-variant hover:text-gold-leaf transition-colors duration-200"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Step 1 — Nationality */}
        {step === "nationality" && (
          <div className="space-y-4">
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              ¿De dónde nos visitás?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => selectNationality("argentina")}
                className={`p-6 rounded-lg border text-left transition-all duration-200 ${
                  nationality === "argentina"
                    ? "border-gold-leaf bg-tuscan-sun/10"
                    : "border-outline-variant/50 hover:border-gold-leaf"
                }`}
              >
                <span className="material-symbols-outlined text-gold-leaf mb-2 block">flag</span>
                <span className="font-headline-md text-headline-md text-deep-slate">Argentina</span>
              </button>
              <button
                onClick={() => selectNationality("extranjero")}
                className={`p-6 rounded-lg border text-left transition-all duration-200 ${
                  nationality === "extranjero"
                    ? "border-gold-leaf bg-tuscan-sun/10"
                    : "border-outline-variant/50 hover:border-gold-leaf"
                }`}
              >
                <span className="material-symbols-outlined text-gold-leaf mb-2 block">public</span>
                <span className="font-headline-md text-headline-md text-deep-slate">Otro país</span>
              </button>
            </div>

            {nationality === "extranjero" && (
              <div>
                <label
                  htmlFor="country"
                  className="font-label-lg text-label-lg text-on-surface-variant block mb-2"
                >
                  ¿De qué país nos visitás?
                </label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Ej: España"
                  autoFocus
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/50 bg-surface-container-lowest font-body-md text-body-md text-deep-slate focus:outline-none focus:border-gold-leaf"
                />
              </div>
            )}

            <button
              disabled={!nationality || (nationality === "extranjero" && country.trim() === "")}
              onClick={() => setStep("quantity")}
              className="w-full mt-4 py-3 rounded-lg bg-gold-leaf text-antique-white font-label-lg text-label-lg uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:bg-tuscan-sun transition-colors duration-200"
            >
              Continuar
            </button>
          </div>
        )}

        {/* Step 2 — Quantities */}
        {step === "quantity" && nationality && (
          <div className="space-y-4">
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              ¿Cuántas personas van a ingresar?
            </p>
            <div className="space-y-3">
              {(nationality === "argentina" ? ARGENTINO_CATEGORIES : EXTRANJERO_CATEGORIES).map(
                (cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between border-b border-outline-variant/30 pb-3"
                  >
                    <div>
                      <p className="font-headline-md text-headline-md text-deep-slate leading-tight">
                        {cat.label}
                      </p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {cat.description} · {cat.price === 0 ? "Gratis" : formatARS(cat.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        aria-label={`Restar ${cat.label}`}
                        onClick={() => adjustQuantity(cat.id, -1)}
                        className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center hover:border-gold-leaf transition-colors duration-200"
                      >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <span className="w-6 text-center font-body-md text-body-md text-deep-slate">
                        {quantities[cat.id] ?? 0}
                      </span>
                      <button
                        aria-label={`Sumar ${cat.label}`}
                        onClick={() => adjustQuantity(cat.id, 1)}
                        className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center hover:border-gold-leaf transition-colors duration-200"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-label-lg text-label-lg text-on-surface-variant">Total</span>
              <span className="font-headline-md text-headline-md text-gold-leaf">
                {formatARS(total)}
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep("nationality")}
                className="flex-1 py-3 rounded-lg border border-outline-variant/50 font-label-lg text-label-lg uppercase tracking-widest text-deep-slate hover:border-gold-leaf transition-colors duration-200"
              >
                Atrás
              </button>
              <button
                disabled={people === 0}
                onClick={() => setStep("summary")}
                className="flex-1 py-3 rounded-lg bg-gold-leaf text-antique-white font-label-lg text-label-lg uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:bg-tuscan-sun transition-colors duration-200"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Summary */}
        {step === "summary" && nationality && (
          <div className="space-y-4">
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              Revisá tu pedido antes de continuar al pago.
            </p>

            {nationality === "extranjero" && (
              <p className="font-body-md text-body-md text-deep-slate">
                <span className="text-on-surface-variant">País:</span> {country}
              </p>
            )}

            <div className="space-y-2">
              {categories
                .filter((cat) => (quantities[cat.id] ?? 0) > 0)
                .map((cat) => (
                  <div key={cat.id} className="flex justify-between font-body-md text-body-md">
                    <span className="text-deep-slate">
                      {cat.label} × {quantities[cat.id]}
                    </span>
                    <span className="text-on-surface-variant">
                      {cat.price === 0 ? "Gratis" : formatARS(cat.price * (quantities[cat.id] ?? 0))}
                    </span>
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
              <span className="font-headline-md text-headline-md text-deep-slate">Total</span>
              <span className="font-headline-md text-headline-md text-gold-leaf">
                {formatARS(total)}
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep("quantity")}
                disabled={submitting}
                className="flex-1 py-3 rounded-lg border border-outline-variant/50 font-label-lg text-label-lg uppercase tracking-widest text-deep-slate hover:border-gold-leaf transition-colors duration-200 disabled:opacity-40"
              >
                Atrás
              </button>
              <button
                onClick={handleConfirm}
                disabled={submitting}
                className="flex-1 py-3 rounded-lg bg-gold-leaf text-antique-white font-label-lg text-label-lg uppercase tracking-widest hover:bg-tuscan-sun transition-colors duration-200 disabled:opacity-60"
              >
                {submitting ? "Procesando..." : "Confirmar y pagar"}
              </button>
            </div>
          </div>
        )}

        {/* Step 4 — Done (placeholder until OnTicket is wired) */}
        {step === "done" && (
          <div className="text-center py-6 space-y-4">
            <span className="material-symbols-outlined text-gold-leaf text-[48px]">
              check_circle
            </span>
            <p className="font-headline-md text-headline-md text-deep-slate">
              ¡Pedido registrado!
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Total: {formatARS(total)} · {people} {people === 1 ? "persona" : "personas"}.
              El pago con OnTicket se habilitará en breve.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-lg bg-gold-leaf text-antique-white font-label-lg text-label-lg uppercase tracking-widest hover:bg-tuscan-sun transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
