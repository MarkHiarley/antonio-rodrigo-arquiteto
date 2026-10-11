import { FICHA, LINK_TEL, LINK_WHATSAPP } from "@/lib/site";

/**
 * No celular a página é longa: o CTA não pode ficar só no fim. Barra fixa,
 * sempre a um toque.
 */
export default function CtaFixo() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-branco/20 bg-serra text-branco lg:hidden">
      <div className="flex items-stretch">
        <a
          href={LINK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col justify-center px-5 py-3"
        >
          <span className="font-display text-[1.0625rem] leading-none font-semibold">
            Falar no WhatsApp
          </span>
          <span className="mono mt-1.5 opacity-85">{FICHA.telefoneBonito}</span>
        </a>
        <a
          href={LINK_TEL}
          className="flex items-center border-l border-branco/25 px-5 font-display text-[1.0625rem] font-semibold"
        >
          Ligar
        </a>
      </div>
    </div>
  );
}
