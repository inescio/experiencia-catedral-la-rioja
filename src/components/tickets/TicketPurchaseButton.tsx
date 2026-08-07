"use client";

import { useState } from "react";
import TicketPurchaseModal from "./TicketPurchaseModal";

export default function TicketPurchaseButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold-leaf text-antique-white font-label-lg text-label-lg uppercase tracking-widest hover:bg-tuscan-sun transition-colors duration-200 soft-shadow"
      >
        <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
        Comprar Entradas
      </button>

      {open && <TicketPurchaseModal onClose={() => setOpen(false)} />}
    </>
  );
}
