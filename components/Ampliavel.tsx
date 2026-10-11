"use client";

import type { ReactNode } from "react";
import { EVENTO_AMPLIAR } from "@/lib/lightbox";

type Props = {
  arquivo: string;
  className?: string;
  children: ReactNode;
};

/**
 * Torna uma prancha ampliável. No hover um anel branco se abre a partir do
 * centro (a "ondinha"); em telas sem hover fica um ícone mudo no canto, porque
 * ali a onda nunca dispara.
 */
export default function Ampliavel({ arquivo, className, children }: Props) {
  return (
    <button
      type="button"
      className={`prancha-onda group relative block cursor-zoom-in text-left ${className ?? ""}`}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(EVENTO_AMPLIAR, { detail: { arquivo } }))
      }
    >
      {children}
      <span className="marca-zoom pointer-events-none absolute top-0 right-0 items-center border border-tinta/30 bg-branco px-2 py-2 text-tinta">
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path
            d="M1 3.6V1h2.6M6.4 1H9v2.6M9 6.4V9H6.4M3.6 9H1V6.4"
            stroke="currentColor"
            strokeWidth="1.15"
          />
        </svg>
      </span>
    </button>
  );
}
