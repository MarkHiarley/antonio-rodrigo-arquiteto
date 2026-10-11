"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A régua de cota. A página é um corte de altitude da serra: o topo é céu
 * (900 m), o pé é chão (0 m). Rolar é descer, e a régua mostra onde estamos —
 * o número, a faixa e a cor mudam conforme a altitude.
 *
 * O leitor anda sobre o que estiver atrás dele (foto escura no topo, bege e
 * verde abaixo), então ele carrega o próprio fundo: um carimbo sólido com
 * texto branco, contraste garantido em qualquer faixa.
 */
const FAIXAS = [
  { ate: 0.2, nome: "céu", cor: "#1e4a6e" },
  { ate: 0.42, nome: "neblina", cor: "#2e6f9e" },
  { ate: 0.68, nome: "pedra", cor: "#6f5f3d" },
  { ate: 0.86, nome: "areia", cor: "#6f5f3d" },
  { ate: 1.01, nome: "mata", cor: "#3f6239" },
];

const TOPO = 900;

export default function Cota() {
  const trilho = useRef<HTMLDivElement>(null);
  const [altitude, setAltitude] = useState(TOPO);
  const [faixa, setFaixa] = useState(FAIXAS[0]);

  useEffect(() => {
    let raf = 0;

    const medir = () => {
      const limite = document.documentElement.scrollHeight - window.innerHeight;
      const p = limite > 0 ? Math.min(1, Math.max(0, window.scrollY / limite)) : 0;

      setAltitude(Math.round(TOPO * (1 - p)));
      setFaixa(FAIXAS.find((f) => p <= f.ate) ?? FAIXAS[FAIXAS.length - 1]);

      const y = 16 + p * (window.innerHeight - 100);
      if (trilho.current) trilho.current.style.transform = `translate3d(0,${y}px,0)`;
    };

    const agendar = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(medir);
    };

    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    agendar();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 hidden h-svh w-[76px] select-none lg:block"
    >
      {/* linha de nível do corte */}
      <span
        className="absolute top-5 bottom-5 left-[56px] w-px"
        style={{ background: faixa.cor, opacity: 0.55 }}
      />

      {/* marcas de 100 em 100 metros */}
      {Array.from({ length: 11 }, (_, i) => (
        <span
          key={i}
          className="absolute left-[56px] h-px"
          style={{
            top: `${(i * 100) / 10}%`,
            width: i % 5 === 0 ? 12 : 7,
            background: faixa.cor,
            opacity: i % 5 === 0 ? 0.6 : 0.4,
          }}
        />
      ))}

      {/* o leitor: desce junto com a página, com fundo próprio */}
      <div
        ref={trilho}
        className="absolute left-0 w-[68px] will-change-transform"
      >
        <div
          className="border border-branco/30 px-2 py-1.5"
          style={{ background: faixa.cor }}
        >
          <span className="font-mono text-[12px] leading-none tracking-[0.08em] text-branco tabular-nums">
            {altitude}
          </span>
          <p className="mt-1 font-mono text-[10px] leading-tight tracking-[0.1em] text-branco/90 uppercase">
            {faixa.nome}
          </p>
        </div>
      </div>
    </aside>
  );
}
