"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registrarLenis } from "@/lib/scroll";

/**
 * Scroll suave. Desligado por completo quando o visitante pediu menos
 * movimento no sistema — nesse caso o documento rola nativo.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (semMovimento.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      anchors: { offset: -76 },
    });
    registrarLenis(lenis);

    let quadro = requestAnimationFrame(function passo(tempo: number) {
      lenis.raf(tempo);
      quadro = requestAnimationFrame(passo);
    });

    return () => {
      cancelAnimationFrame(quadro);
      registrarLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
