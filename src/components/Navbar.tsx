"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: "church" },
  { href: "/historia", label: "Historia", icon: "history_edu" },
  { href: "/arquitectura", label: "Arquitectura", icon: "account_balance" },
  { href: "/visita", label: "Visita", icon: "calendar_month" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ── Top App Bar ── */}
      <header
        className={`fixed top-0 w-full z-50 h-16 flex justify-between items-center px-6 transition-all duration-300 ${
          scrolled
            ? "bg-antique-white shadow-sm"
            : "bg-surface/80 backdrop-blur-md"
        }`}
      >
        {/* Hamburger (mobile) */}
        <button
          aria-label="Abrir menú"
          className="md:hidden text-on-surface-variant hover:text-gold-leaf transition-colors duration-200"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Brand (mobile center) */}
        <Link
          href="/"
          className="font-headline-md text-headline-md tracking-widest text-gold-leaf uppercase md:hidden"
        >
          CATEDRAL
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 w-full justify-between">
          <div className="flex items-center space-x-8">
            {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} active={pathname === href} />
            ))}
          </div>

          <Link
            href="/"
            className="font-headline-md text-headline-md tracking-widest text-gold-leaf uppercase"
          >
            CATEDRAL
          </Link>

          <div className="flex items-center space-x-8">
            {NAV_LINKS.slice(2).map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} active={pathname === href} />
            ))}
          </div>
        </nav>

        {/* Search */}
        <button
          aria-label="Buscar"
          className="text-on-surface-variant hover:text-gold-leaf transition-colors duration-200"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-deep-slate/40" />
          <nav
            className="absolute top-16 left-0 right-0 bg-antique-white border-b border-outline-variant/30 shadow-lg py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-label-lg font-label-lg tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? "text-gold-leaf"
                    : "text-on-surface-variant hover:text-gold-leaf"
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{
                    fontVariationSettings: pathname === href ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* ── Mobile Bottom Nav ── */}
      <nav className="md:hidden bg-antique-white border-t border-outline-variant/30 fixed bottom-0 w-full z-50 h-20 shadow-[-4px_0_20px_rgba(47,47,47,0.05)] flex justify-around items-center px-4">
        {NAV_LINKS.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                active
                  ? "text-primary scale-95"
                  : "text-secondary opacity-60 hover:opacity-100"
              }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{
                  fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {icon}
              </span>
              <span className="text-label-sm font-label-sm tracking-tighter">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-label-lg font-label-lg tracking-widest uppercase transition-colors duration-200 ${
        active
          ? "text-gold-leaf font-bold border-b-2 border-gold-leaf pb-1"
          : "text-on-surface-variant hover:text-gold-leaf"
      }`}
    >
      {label}
    </Link>
  );
}
