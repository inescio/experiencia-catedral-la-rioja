export type Nationality = "argentina" | "extranjero";

export type TicketCategoryId =
  | "extranjero_adulto"
  | "argentino_adulto"
  | "argentino_jubilado"
  | "argentino_nino"
  | "argentino_menor";

export interface TicketCategory {
  id: TicketCategoryId;
  label: string;
  description: string;
  price: number;
}

export const EXTRANJERO_CATEGORIES: TicketCategory[] = [
  {
    id: "extranjero_adulto",
    label: "Entrada",
    description: "Turista extranjero",
    price: 20000,
  },
];

export const ARGENTINO_CATEGORIES: TicketCategory[] = [
  {
    id: "argentino_adulto",
    label: "Adulto",
    description: "17 a 64 años",
    price: 15000,
  },
  {
    id: "argentino_jubilado",
    label: "Jubilado",
    description: "Con credencial",
    price: 12000,
  },
  {
    id: "argentino_nino",
    label: "Niño",
    description: "10 a 16 años",
    price: 10000,
  },
  {
    id: "argentino_menor",
    label: "Menor de 10 años",
    description: "No paga",
    price: 0,
  },
];

export function categoriesFor(nationality: Nationality): TicketCategory[] {
  return nationality === "argentina" ? ARGENTINO_CATEGORIES : EXTRANJERO_CATEGORIES;
}

export function calculateTotal(
  categories: TicketCategory[],
  quantities: Partial<Record<TicketCategoryId, number>>
): number {
  return categories.reduce(
    (sum, cat) => sum + cat.price * (quantities[cat.id] ?? 0),
    0
  );
}

export function totalPeople(
  quantities: Partial<Record<TicketCategoryId, number>>
): number {
  return Object.values(quantities).reduce((sum, n) => sum + (n ?? 0), 0);
}

export function formatARS(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface TicketOrder {
  nationality: Nationality;
  country?: string;
  quantities: Partial<Record<TicketCategoryId, number>>;
  total: number;
}

/**
 * Punto de integración con OnTicket.
 * Reemplazar por la llamada real (API/checkout link) cuando esté disponible.
 */
export async function submitOrderToOnTicket(order: TicketOrder): Promise<void> {
  console.log("[OnTicket] Pedido a enviar:", order);
  return Promise.resolve();
}
