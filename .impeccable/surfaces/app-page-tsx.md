---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: one-page do Antonio Rodrigo | ARQUITETO

## Scope & mode
Rota única (`/`), uma página com âncoras, `pt-BR`, **mobile-first** (a maior parte do tráfego vem do Google Maps e do Instagram, no celular). Modo **Persuade**: o visitante decide e age. Navegação: Início · Sobre · Serviços · Projetos · Acervo · Contato.

## Audience, job, action
Morador ou pequeno empresário de Tianguá / Serra da Ibiapaba planejando construir, reformar ou mobiliar. Chega do Google Maps ou do Instagram, muitas vezes fora do horário comercial. Trabalho dele: em menos de um minuto decidir se este arquiteto é crível e vale uma ligação. Ação: tocar no WhatsApp.

## Proof / content
Renders do próprio arquiteto: 59 arquivos originais em `ref/images/`, convertidos para 118 WebP em `public/obras/` (117 MB → 5,4 MB). 52 pranchas usadas em 14 obras, com nomes e cidades reais do site atual. Retrato real em obra (`perfil-02`). Ficha confirmada: (88) 99737-4527, R. Doze de Agosto — Centro, Tianguá–CE 62320-097, `@arquitetoantoniorodrigo`, 5,0★ no Google (4 avaliações), seg–qui 07:00–18:00 · sex 07:00–17:30.

## Constraints
Sem formulário e sem backend: os CTAs abrem `wa.me/558897374527` e `tel:`. Nenhuma imagem hotlinkada do WordPress. Nada de depoimento, preço, prêmio, anos de experiência ou logo de cliente inventado. Paleta fixada pelo cliente: azul não tão escuro + bege + branco, verde como acento.

## Direction contract

THESIS
A página é um corte de altitude da serra da Ibiapaba: o topo é céu, o pé é chão, e rolar é descer. Recusa o arranjo padrão da categoria (foto grande, nome por cima, três cards de serviço, grade de projetos) — que é justamente o que o site atual dele tenta e falha em ser.

OWN-WORLD
Faixas horizontais de altitude separadas por réguas de 1px, com um carimbo de cota que desce pela margem. Azul de hora azul em três degraus (#1e4a6e, #2e6f9e, #5c93bc), neblina (#b9cfe0), pedra (#e3d4b8), areia (#f5eee1), branco (#f7f5f0), tinta (#16324a) e verde serra (#3f6239) uma única vez, fechando a descida. Vozes: Bricolage Grotesque nos títulos, Archivo no texto, Spline Sans Mono nas cotas, fichas e legendas. Zero canto arredondado, zero sombra difusa: réguas de 1px, blocos sólidos, pranchas com ficha. Reconhecível com todo o conteúdo removido: um diagrama de altitudes.

STORY
Entende em cinco segundos: arquiteto, Tianguá, obra de verdade. Acredita porque vê, não porque lê — fachada noturna, suíte, cozinha, deck, consultório, cada um com nome de obra, cidade e legenda embaixo. Faz: toca no WhatsApp, no hero, na barra fixa do celular ou no bloco verde do fim.

FIRST VIEWPORT
1440×900 (celular: 390×844). Faixa superior com 62% da altura no desktop e 56svh no celular: o render da Fachada Noturna São José sangra de borda a borda, ancorado em `object-position: 50% 72%`, com um véu de #1e4a6e no topo para o nav; sobre o céu do próprio render, o nome "Antonio Rodrigo" em Bricolage Grotesque a `clamp(2.6rem, 10.4vw, 9.75rem)` numa linha só, precedido do rótulo mono "Arquiteto · Tianguá – CE". Faixa inferior bege (#e3d4b8): régua de 1px com o rótulo "cota 0,00 — nível da rua", o bloco verde sólido "Falar no WhatsApp" com o número, o botão contornado "Ligar", e três colunas mono (Studio, Horário, Instagram). Nav em linha no topo lendo como links, com CTA contornado. Ação primária sempre a um toque: bloco verde no desktop, barra fixa verde no celular.

FORM
Direção #1 da minha lista ordenada — a de maior ressonância, apresentada como IMPECCABLE'S PICK e escolhida pelo usuário. Seed key: `efb03899`. Build code-led (`.impeccable/config.json` → `code`).

## Interação-assinatura
Rolar é descer a serra. O scroll suave é Lenis (desligado por completo em `prefers-reduced-motion`); a régua de cota na margem esquerda acompanha o scroll, mostra a altitude de 900 m a 0 m num carimbo sólido com fundo próprio (contraste garantido sobre qualquer faixa) e troca de cor por faixa: céu → neblina → pedra → areia → mata.

## Pranchas ampliáveis
Toda prancha abre em lightbox: `role="dialog"`, foco no botão de fechar, `Esc` fecha, ← → navegam, clique fora fecha, foco volta para quem abriu, scroll travado, vizinhas pré-carregadas, botão "preencher / ver inteira". Descoberta: no hover um anel branco se abre do centro uma única vez (nunca em loop, desligado em `prefers-reduced-motion`); onde não existe hover fica um selo mudo de quatro cantos no canto superior direito.

FINISH
unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
Domínio próprio: o cliente ainda usa subdomínio grátis; o site está pronto para receber um domínio. Deploy na Vercel quando ele aprovar.
