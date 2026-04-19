"use client";

import type { Locale } from "@/config/translations";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const FLAGS: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border/60 bg-card/80 p-0.5 shadow-sm"
      role="group"
      aria-label={t.language.label}
    >
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          title={code === "pt" ? t.language.pt : t.language.en}
          className={cn(
            "flex h-8 w-9 items-center justify-center rounded-full text-base transition-colors",
            locale === code
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <span aria-hidden>{FLAGS[code]}</span>
          <span className="sr-only">
            {code === "pt" ? t.language.pt : t.language.en}
          </span>
        </button>
      ))}
    </div>
  );
}
