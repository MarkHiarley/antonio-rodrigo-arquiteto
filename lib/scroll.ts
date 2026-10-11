import type Lenis from "lenis";

/**
 * O scroll suave vive num componente cliente, mas o lightbox precisa parar a
 * página enquanto está aberto. Ponto único de acesso, sem variável global.
 */
let instancia: Lenis | null = null;

export const registrarLenis = (lenis: Lenis | null) => {
  instancia = lenis;
};

export const pararScroll = (parar: boolean) => {
  if (!instancia) return;
  if (parar) instancia.stop();
  else instancia.start();
};
