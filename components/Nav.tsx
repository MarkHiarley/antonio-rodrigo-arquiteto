"use client";

import { useEffect, useState } from "react";
import { FICHA, LINK_WHATSAPP } from "@/lib/site";

const LINKS = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#obras", rotulo: "Projetos" },
  { href: "#acervo", rotulo: "Acervo" },
  { href: "#contato", rotulo: "Contato" },
];

export default function Nav() {
  const [sobreCeu, setSobreCeu] = useState(true);

  useEffect(() => {
    let limite = 0;

    const medirLimite = () => {
      const faixa = document.getElementById("inicio-media");
      limite = faixa ? faixa.getBoundingClientRect().bottom + window.scrollY - 72 : 0;
    };

    const medir = () => setSobreCeu(window.scrollY < limite);

    const reagir = () => {
      medirLimite();
      medir();
    };

    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", reagir);
    reagir();

    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", reagir);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 transition-colors duration-500"
      style={{
        background: sobreCeu ? "transparent" : "color-mix(in oklab, #f5eee1 92%, transparent)",
        borderBottom: sobreCeu ? "1px solid transparent" : "1px solid rgba(22,50,74,0.16)",
        backdropFilter: sobreCeu ? "none" : "blur(8px)",
        color: sobreCeu ? "#f7f5f0" : "#16324a",
      }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 py-4 lg:px-16">
        <a href="#inicio" className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-display text-[15px] font-semibold tracking-[-0.01em]">
            {FICHA.nome}
          </span>
          <span className="mono hidden opacity-70 sm:inline">{FICHA.profissao}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="mono opacity-85 transition-opacity hover:opacity-100">
              {l.rotulo}
            </a>
          ))}
        </nav>

        <a
          href={LINK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mono ml-auto shrink-0 border px-3 py-2.5 transition-colors sm:px-3.5 md:ml-6"
          style={{
            borderColor: "currentColor",
            background: sobreCeu ? "transparent" : "#3f6239",
            color: sobreCeu ? "inherit" : "#f7f5f0",
          }}
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">WhatsApp {FICHA.telefoneBonito}</span>
        </a>
      </div>
    </header>
  );
}
