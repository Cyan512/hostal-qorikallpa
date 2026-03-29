import { Link } from "@/src/i18n/navigation";

import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/rooms", label: "Habitaciones" },
    { href: "/experiences", label: "Experiencias" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contacto" },
  ];

  const information = [
    { label: "Check-in: 14:00" },
    { label: "Check-out: 11:00" },
    { label: "Cancelación gratuita" },
  ];
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black text-lg font-light tracking-widest">
                    Q
                  </span>
                </div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs font-light">
                Un refugio de elegancia en el corazón de Cusco. Donde la
                tradición andina se encuentra con el confort contemporáneo.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <CiInstagram size={16} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <CiTwitter size={16} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <CiFacebook size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
                Navegación
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
                Información
              </h4>
              <ul className="space-y-4">
                {information.map((item, i) => (
                  <li key={i} className="text-sm text-white/70">
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
                Contacto
              </h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li>Jr. Lima 432</li>
                <li>Cusco, Perú</li>
                <li className="pt-2">
                  <a
                    href="tel:+51984123456"
                    className="hover:text-white transition-colors"
                  >
                    +51 984 123 456
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@andean.pe"
                    className="hover:text-white transition-colors"
                  >
                    hola@andean.pe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 tracking-wide">
            © 2024 Andean. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40 tracking-wide">
            Cusco, Perú · 3,400m
          </p>
        </div>
      </div>
    </footer>
  );
}
