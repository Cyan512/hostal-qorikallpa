"use client";

import { Link } from "@/src/i18n/navigation";
import { Globe, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/src/components/organisms/language-switcher";
import { useState } from "react";
import SearchModal from "@/src/components/organisms/search-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/rooms", label: "Habitaciones" },
    { href: "/experiences", label: "Experiencias" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm font-light tracking-widest">
                Q
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs lg:text-sm font-light tracking-[0.3em] uppercase text-black">
                QoriKallpa
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-stone-600 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link
              href="/rooms"
              className="hidden lg:inline-flex items-center gap-2 bg-black text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
            >
              Reservar
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-black hover:bg-stone-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden absolute top-16 lg:top-20 left-0 right-0 bg-white shadow-xl border-t border-black/5"
          >
            <div className="px-4 sm:px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  className="block text-sm tracking-widest uppercase text-black py-3 px-2 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-stone-100 space-y-4">
                <SearchModal />

                <div className="flex items-center gap-4 px-2">
                  <Globe
                    size={14}
                    strokeWidth={1.5}
                    className="text-stone-400"
                  />
                  <div className="flex gap-3">
                    {/*
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`text-xs tracking-[0.1em] uppercase transition-colors ${
                          locale === loc
                            ? "text-black font-medium"
                            : "text-stone-400 hover:text-black"
                        }`}
                      >
                        {loc.toUpperCase()}
                      </button>
                    ))}
                    */}
                  </div>
                </div>
              </div>

              <Link
                href="/rooms"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-black text-white py-3 rounded-full text-center text-xs font-medium tracking-widest uppercase mt-4"
              >
                Reservar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
