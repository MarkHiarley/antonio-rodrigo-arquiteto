"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTO_AMPLIAR } from "@/lib/lightbox";
import { pararScroll } from "@/lib/scroll";
import { GALERIA } from "@/lib/site";

type Detalhe = { arquivo: string };

const eDetalhe = (valor: unknown): valor is Detalhe =>
  typeof valor === "object" &&
  valor !== null &&
  "arquivo" in valor &&
  typeof valor.arquivo === "string";

const urlPrancha = (arquivo: string) => `/obras/${arquivo}.webp`;

export default function Lightbox() {
  const [indice, setIndice] = useState<number | null>(null);
  const [preencher, setPreencher] = useState(false);
  const botaoFechar = useRef<HTMLButtonElement>(null);
  const origem = useRef<HTMLElement | null>(null);
  const aberto = indice !== null;

  const mover = useCallback((passo: number) => {
    setIndice((atual) =>
      atual === null ? null : (atual + passo + GALERIA.length) % GALERIA.length,
    );
  }, []);

  useEffect(() => {
    const ouvir = (evento: Event) => {
      if (!(evento instanceof CustomEvent) || !eDetalhe(evento.detail)) return;
      const alvo = GALERIA.findIndex((g) => g.arquivo === evento.detail.arquivo);
      if (alvo < 0) return;
      origem.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setPreencher(false);
      setIndice(alvo);
    };
    window.addEventListener(EVENTO_AMPLIAR, ouvir);
    return () => window.removeEventListener(EVENTO_AMPLIAR, ouvir);
  }, []);

  useEffect(() => {
    if (!aberto) return;

    document.documentElement.classList.add("lightbox-aberto");
    pararScroll(true);
    botaoFechar.current?.focus();

    return () => {
      document.documentElement.classList.remove("lightbox-aberto");
      pararScroll(false);
      origem.current?.focus();
    };
  }, [aberto]);

  useEffect(() => {
    if (indice === null) return;

    const tecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setIndice(null);
      else if (evento.key === "ArrowRight") mover(1);
      else if (evento.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", tecla);

    // As vizinhas chegam prontas antes do clique.
    for (const passo of [1, -1]) {
      const vizinha = GALERIA[(indice + passo + GALERIA.length) % GALERIA.length];
      const pre = new Image();
      pre.src = urlPrancha(vizinha.arquivo);
    }

    return () => window.removeEventListener("keydown", tecla);
  }, [indice, mover]);

  if (indice === null) return null;
  const placa = GALERIA[indice];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Prancha ampliada: ${placa.obra} — ${placa.legenda}`}
      className="fixed inset-0 z-50 flex flex-col bg-ceu-1/95 text-branco backdrop-blur-sm"
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-branco/20 px-4 py-3 lg:px-8">
        <p className="mono min-w-0 flex-1 truncate opacity-90">
          {placa.obra} · {placa.cidade}
        </p>
        <p className="mono shrink-0 tabular-nums opacity-90">
          {String(indice + 1).padStart(2, "0")} / {GALERIA.length}
        </p>
        <button
          ref={botaoFechar}
          type="button"
          onClick={() => setIndice(null)}
          className="mono shrink-0 border border-branco/40 px-3 py-1.5 whitespace-nowrap transition-colors hover:border-branco"
        >
          esc · fechar
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center lg:p-8"
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) setIndice(null);
        }}
      >
        <img
          src={urlPrancha(placa.arquivo)}
          srcSet={`/obras/${placa.arquivo}@760.webp 760w, ${urlPrancha(placa.arquivo)} 1800w`}
          sizes="100vw"
          alt={placa.alt}
          decoding="async"
          className={
            preencher
              ? "h-[calc(100svh-8rem)] w-full object-cover"
              : "max-h-[calc(100svh-8rem)] max-w-[100vw] object-contain"
          }
        />
      </div>

      <div className="flex shrink-0 items-center gap-3 border-t border-branco/20 px-4 py-3 lg:px-8">
        <p className="mono min-w-0 flex-1 truncate opacity-90">{placa.legenda}</p>
        <button
          type="button"
          onClick={() => setPreencher((v) => !v)}
          className="mono shrink-0 border border-branco/40 px-3 py-2 whitespace-nowrap transition-colors hover:border-branco"
        >
          {preencher ? "ver inteira" : "preencher"}
        </button>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => mover(-1)}
            aria-label="Prancha anterior"
            className="mono border border-branco/40 px-3 py-2 whitespace-nowrap transition-colors hover:border-branco"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => mover(1)}
            aria-label="Próxima prancha"
            className="mono border border-branco/40 px-3 py-2 whitespace-nowrap transition-colors hover:border-branco"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
