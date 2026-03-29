"use client";

import { cn } from "@/src/lib/cn";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = ["es", "en", "fr"] as const;
type Locale = (typeof locales)[number];

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const newPathName = pathName.replace(`/${currentLocale}`, `/${newLocale}`);

    router.push(newPathName);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-stone-500 hover:text-black transition-colors"
      >
        <Globe size={14} strokeWidth={1.5} aria-hidden="true" />
        <span>{currentLocale.toUpperCase()}</span>
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-3 py-2 bg-white border border-black/5 shadow-sm z-50 min-w-35">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLanguage(loc)}
                className={cn(
                  "w-full px-4 py-2 text-left text-xs tracking-widest uppercase transition-colors",
                  currentLocale === loc
                    ? "text-black font-medium bg-stone-50"
                    : "text-stone-400 hover:text-black hover:bg-stone-50",
                )}
              >
                {loc === "es"
                  ? "Español"
                  : loc === "en"
                    ? "English"
                    : "Français"}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
