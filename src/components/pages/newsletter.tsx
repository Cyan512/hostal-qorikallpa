"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/src/components/atoms/button";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
}
export default function Newsletter({ title, subtitle }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };
  
  return (
    <section className="py-16 lg:py-24 bg-t1 text-pg0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            {title || "Newsletter"}
          </h2>
          <p className="text-pg0/50 font-light mb-8">
            {subtitle ||
              "Recibe ofertas exclusivas y consejos para tu viaje a Cusco."}
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-pg0">
              <div className="w-10 h-10 bg-pg0/10 rounded-full flex items-center justify-center">
                <Check size={20} />
              </div>
              <span className="text-sm">
                ¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 bg-pg0/10 border border-pg0/20 px-6 py-4 text-sm text-pg0 placeholder:text-pg0/40 focus:outline-none focus:border-pg0/40 transition-colors"
              />
              <Button type="submit" variant="primary">
                Suscribirse
              </Button>
            </form>
          )}

          <p className="text-xs text-pg0/30 mt-6">
            No spam. Solo ofertas exclusivas. Puedes darte de baja en cualquier
            momento.
          </p>
        </div>
      </div>
    </section>
  );
}
