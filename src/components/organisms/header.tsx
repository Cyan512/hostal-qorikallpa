"use client";

import {Link} from "@/src/i18n/navigation";
import {Menu, X} from "lucide-react";
import {LanguageSwitcher} from "@/src/components/organisms/language-switcher";
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        {href: "/", label: "Inicio"},
        {href: "/about", label: "Nosotros"},
        {href: "/rooms", label: "Habitaciones"},
        {href: "/experiences", label: "Experiencias"},
        {href: "/reviews", label: "Reviews"},
        {href: "/faq", label: "FAQ"},
        {href: "/offers", label: "Ofertas"},
        {href: "/gallery", label: "Galería"},
        {href: "/contact", label: "Contacto"},
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-black hover:bg-stone-100 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? (
                            <X size={24} aria-hidden="true"/>
                        ) : (
                            <Menu size={24} aria-hidden="true"/>
                        )}
                    </button>

                    <Link
                        href="/"
                        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3"
                    >
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

                    <div className="flex items-center gap-3 lg:gap-5">
                        <LanguageSwitcher/>
                    </div>
                </div>

                {isMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md animate-fade-in"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div
                            id="mobile-menu"
                            className="fixed top-0 left-0 bottom-0 w-full md:w-100 bg-white z-50 animate-slide-in flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-stone-100">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-sm font-light tracking-widest">
                      Q
                    </span>
                                    </div>
                                    <span className="text-sm font-light tracking-[0.3em] uppercase text-black">
                    QoriKallpa
                  </span>
                                </Link>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                                >
                                    <X size={20} className="text-stone-600"/>
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto p-6">
                                <ul className="space-y-1">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block text-lg font-extralight tracking-wide text-stone-700 py-3 px-2 hover:text-black hover:bg-stone-50 rounded-md transition-all duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="p-6 border-t border-stone-100 bg-stone-50">
                                <div className="mb-4">
                                    <LanguageSwitcher variant="mobile"/>
                                </div>

                                <Link
                                    href="/rooms"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full bg-black text-white py-4 rounded-sm text-center text-sm font-medium tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors duration-300"
                                >
                                    Reservar Ahora
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}
