"use client";

import { cn } from "@/src/lib/cn";
import { Globe, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = ["es", "en", "fr"] as const;
type Locale = (typeof locales)[number];

const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export const LanguageSwitcher = ({
  variant = "desktop",
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const newPathName = pathName.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathName);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-white border border-stone-200 rounded-md text-sm tracking-wide text-stone-700 hover:border-stone-300 transition-colors"
        >
          <span className="flex items-center gap-3">
            <Globe size={18} strokeWidth={1.5} className="text-stone-400" />
            {localeNames[currentLocale as Locale]}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "text-stone-400 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>
        {isOpen && (
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-white border border-stone-200 rounded-md overflow-hidden shadow-lg">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLanguage(loc)}
                className={cn(
                  "w-full px-4 py-3 text-left text-sm tracking-wide transition-colors",
                  currentLocale === loc
                    ? "bg-stone-100 text-black font-medium"
                    : "text-stone-600 hover:bg-stone-50 hover:text-black",
                )}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

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
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
