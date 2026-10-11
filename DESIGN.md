---
name: Antonio Rodrigo | Arquiteto
description: Sistema de altitudes da Serra da Ibiapaba — faixas tonais planas, réguas de 1px e carimbo de cota.
colors:
  ceu-1: "#1e4a6e"
  ceu-2: "#2e6f9e"
  ceu-3: "#5c93bc"
  neblina: "#b9cfe0"
  pedra: "#e3d4b8"
  areia: "#f5eee1"
  branco: "#f7f5f0"
  serra: "#3f6239"
  serra-claro: "#6f8f5f"
  tinta: "#16324a"
  tinta-fraca: "#4b6680"
  cota-terra: "#6f5f3d"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 10.4vw, 9.75rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.12em"
  micro-label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.1em"
    note: "Nome da faixa dentro do carimbo de cota (components/Cota.tsx)."
  wordmark:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    letterSpacing: "-0.01em"
    note: "O nome no canto esquerdo da barra do topo (components/Nav.tsx)."
  body-compact:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 400
    lineHeight: 1.625
    note: "Descrição de serviço, um degrau abaixo do corpo da bio (app/page.tsx)."
  card-title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    note: "Nome da obra na ficha do acervo (app/page.tsx)."
rounded:
  none: "0px"
  circle: "50%"
spacing:
  regra: "1px"
  gutter-mobile: "1.5rem"
  gutter-desktop: "4rem"
  secao-mobile: "5rem"
  secao-desktop: "7rem"
  pilha-obra: "3.5rem"
  trilho-cota: "76px"
  barra-cta-movel: "78px"
  container: "1600px"
components:
  cta-whatsapp:
    backgroundColor: "{colors.serra}"
    textColor: "{colors.branco}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  cta-whatsapp-hover:
    backgroundColor: "{colors.serra-claro}"
    textColor: "{colors.branco}"
  cta-ligar:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  cta-fixo-movel:
    backgroundColor: "{colors.serra}"
    textColor: "{colors.branco}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  prancha:
    backgroundColor: "{colors.branco}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
  nav-cta:
    backgroundColor: "{colors.serra}"
    textColor: "{colors.branco}"
    padding: "10px 14px"
    rounded: "{rounded.none}"
  rotulo-cota:
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
  lightbox-barra:
    backgroundColor: "{colors.ceu-1}"
    textColor: "{colors.branco}"
---

# Design System: Antonio Rodrigo | Arquiteto

## Overview

**Creative North Star: "O Corte de Altitude"**

A página não é uma pilha de seções: é um corte vertical. O topo é céu (`--color-ceu-1` `#1e4a6e`), o pé é chão (`--color-serra` `#3f6239`), e rolar é descer. Cada faixa horizontal recebe uma cor de altitude e é separada da próxima por uma régua de 1px (`--rule: 1px`), a mesma espessura do traço em qualquer lugar do sistema — borda de prancha, tick da régua de cota, sublinhado de ficha. O azul aparece em três degraus fixos e nunca em preto: não existe preto na paleta, o mais escuro é a tinta (`#16324a`).

O sistema é plano por construção. Não há sombra difusa, não há canto arredondado, não há gradiente decorativo — só um véu de nav (`from-ceu-1/80 to-transparent`, `h-44`) sobre o hero para o cabeçalho poder ficar transparente. Profundidade é dada por sobreposição tonal (céu claro nos dados, pedra nos projetos, areia nos textos, verde no fim) e pelo carimbo de cota que carrega o próprio fundo sólido para garantir contraste sobre qualquer faixa.

O acabamento é de prancha técnica: cada imagem é uma `prancha` (fundo branco, borda 1px) com ficha mono embaixo, cada título carrega o rótulo de cota acima (`cota 420,00 — pedra`), cada dado do studio é uma coluna com filete à esquerda. A única geometria não retangular do sistema é o anel da onda de hover — um círculo de 2px que se abre do centro uma vez e desaparece.

**Key Characteristics:**
- Faixas tonais planas separadas por réguas de 1px, do céu ao chão.
- Zero raio de canto e zero sombra em todo o sistema (o único círculo é o anel da onda).
- Três vozes de tipo com papéis fixos: Bricolage Grotesque em títulos, Archivo no texto, Spline Sans Mono em cotas, fichas e legendas.
- Verde (`#3f6239`) usado uma vez, como preenchimento da faixa final e dos CTAs.
- O carimbo de cota desce pela margem esquerda de 900 m a 0 m, trocando de cor a cada faixa.

## Colors

A paleta é de paisagem serrana: dois azuis de hora azul, um azul claro, dois neutros quentes de chão e um verde de mata, ancorados numa tinta azulada que substitui o preto.

### Primary
- **Azul de Hora Azul Profundo** (`#1e4a6e` / oklch(39.6% 0.0779 246.3)): a faixa do topo. É o fundo do hero atrás do render, o fundo do lightbox (`bg-ceu-1/95`) e o `themeColor` do viewport. Também o início da rampa de cotas ("céu").
- **Azul Meio** (`#2e6f9e`): a faixa de dados (`bg-ceu-2`, cotas de avaliação/projetos/base/atendimento), a segunda cor da régua de cota ("neblina") e a cor de seleção de texto (`::selection`) e do anel de foco (`:focus-visible`, 2px, offset 3px).
- **Azul Claro** (`#5c93bc`): o terceiro degrau do céu. Definido no tema como o azul de respiro da escala.
- **Neblina** (`#b9cfe0`): o azul dessaturado da transição. Definido como o tom de neblina entre o céu e a pedra.

### Secondary
- **Verde Serra** (`#3f6239`): acento único do sistema. Preenche a faixa de contato (`bg-serra`), o bloco "Falar no WhatsApp" do hero, a barra fixa do celular e o CTA do nav quando ele já saiu do céu. Sempre com texto branco por cima.
- **Verde Serra Claro** (`#6f8f5f`): exclusivamente o estado de hover do bloco verde do hero (`hover:bg-serra-claro`).

### Neutral
- **Pedra** (`#e3d4b8`): o chão do primeiro viewport (`bg-pedra`), a faixa de projetos e o tom "pedra" na régua de cota.
- **Areia** (`#f5eee1`): fundo da faixa "sobre" e do acervo; também o vidro do nav depois que ele sai do céu (`color-mix(in oklab, #f5eee1 92%, transparent)`) e o hover do CTA branco no contato.
- **Branco** (`#f7f5f0`): fundo do documento, fundo de cada ficha de prancha e faixa de serviços. É o "branco sujo" da serra, nunca `#fff`.
- **Tinta** (`#16324a`): cor de texto base do documento e cor de todas as réguas por padrão (`color-mix(in oklab, var(--color-tinta) 18%, transparent)` no `*`); as réguas explícitas usam 26% (`.regua`) e as bordas de prancha 22%.
- **Tinta Fraca** (`#4b6680`): o azul de texto secundário definido no tema para hierarquia de baixo contraste.
- **Cota Terra** (`#6f5f3d`): cor própria do carimbo da régua nas altitudes "pedra" e "areia" — o único marrom do sistema, e existe só para o carimbo se destacar das faixas bege.

### Named Rules
**A Regra do Sem-Preto.** Não existe preto no sistema. O escuro mais fundo é tinta `#16324a`; sobre faixas azuis ou verdes o texto é sempre branco `#f7f5f0`, nunca branco puro.

**A Regra do Verde Único.** O verde aparece uma vez por tela como preenchimento de CTA ou da faixa final. Ele não é usado como texto sobre fundo bege/quente nem como decoração.

## Typography

**Display Font:** Bricolage Grotesque (com `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Archivo (com `ui-sans-serif, system-ui, sans-serif`)
**Label/Mono Font:** Spline Sans Mono (com `ui-monospace, monospace`)

**Character:** Bricolage Grotesque em peso 600 faz o nome do arquiteto ocupar a largura toda (`clamp(2.6rem, 10.4vw, 9.75rem)`, entrelinha 0.86, tracking negativo) — é a voz que grita. Archivo em peso 400 carrega todo o texto corrido em 17px com entrelinha 1.625. Spline Sans Mono, sempre em caixa alta e 0.12em de tracking, é a voz de instrumento: cotas, fichas, legendas, contadores, links do nav e rótulos de dado.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 10.4vw, 9.75rem)`, 0.86, tracking -0.035em): só o nome "Antonio Rodrigo" no hero.
- **Headline** (600, `clamp(2rem, 4.6vw, 3.75rem)`, 0.98): a promessa do "sobre" ("Transformar sonho em realidade desenhada.").
- **Title** (600, `clamp(1.9rem, 4.2vw, 3.25rem)`, 1, tracking -0.025em): cabeçalhos de faixa ("O que eu faço", "Projetos", "Acervo completo") e os nomes de obra no acervo (1.4rem).
- **Body** (400, 1.0625rem, 1.625, máx. 62ch): bio e parágrafos longos; os textos de serviço caem para 0.97rem e as fichas para 0.875rem (`text-sm`).
- **Label** (400, 0.75rem, tracking 0.12em, caixa alta): classe `.mono` e `.cota` — ficha de prancha, contador de prancha, legendas do acervo, links do nav, telefone sob os CTAs.
- **Número grande** (600, `clamp(1.75rem, 5.2vw, 4rem)`, tracking -0.03em, sublinhado `decoration-branco/35 underline-offset-[10px]`): o telefone da faixa final, clicável.

### Named Rules
**A Regra da Voz de Instrumento.** Tudo que é dado — cota, contador, ficha, endereço, horário — é mono, caixa alta e 0.12em de tracking. Nada de dado em Archivo.

**A Regra do Tracking Negativo.** Só Bricolage Grotesque recebe tracking negativo (-0.01em a -0.035em), e o valor acompanha o tamanho: quanto maior o tipo, mais fechado.

## Layout

Container único de `max-w-[1600px]`, com gutter de `1.5rem` no celular e `4rem` no desktop (`px-6 lg:px-16`). A faixa tem ritmo vertical fixo: `5rem` no celular e `7rem` no desktop (`py-20 lg:py-28`), e cada bloco começa com o rótulo de cota antes do título.

No desktop a página inteira é deslocada `76px` para a direita (`lg:pl-[76px]`), abrindo espaço para o trilho de cota fixo (`w-[76px]`, linha de nível em `left-[56px]`). No celular esse trilho não existe (`hidden lg:block`) e o rodapé ganha `78px` de respiro (`pb-[78px]`) para a barra fixa de CTA, que só aparece abaixo de `lg` (`lg:hidden`).

O hero é uma faixa com duas divisões: no celular a mídia é `56svh` e a faixa de decisão vem embaixo; no desktop a seção é `h-svh` e as divisões são proporcionais — `lg:flex-[62]` de mídia e `lg:flex-[38]` de chão bege.

Grades observadas: dados do hero em `lg:grid-cols-[auto_1fr]` (ação à esquerda, fichas alinhadas à direita em três colunas); "sobre" em `lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]` com o retrato preso (`lg:sticky lg:top-24`); serviços em duas colunas com divisória vertical no ímpar (`lg:odd:border-r`); obras em grade de 12 colunas alternando 7 e 5 (`lg:col-span-7` / `lg:col-span-5`); acervo em `lg:grid-cols-[280px_minmax(0,1fr)]` com as pranchas em 2 / 3 / 4 colunas conforme a largura. Espaçamento entre pranchas: `gap-x-8 gap-y-14` nas obras e `gap-3` nas miniaturas do acervo.

Breakpoints usados pelo Tailwind: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

## Elevation & Depth

**Não existe sombra neste sistema.** A varredura do código não encontra nenhuma classe `shadow-*` nem `box-shadow`, e isso é doutrina, não omissão. Profundidade vem de três coisas: (1) faixas tonais planas empilhadas do azul ao verde; (2) a régua de 1px (`--rule: 1px`) que separa tudo; (3) o carimbo de cota, que carrega um fundo sólido próprio (`background: faixa.cor`) com borda `border-branco/30` para ler sobre qualquer faixa. O único efeito de superfície é o `backdrop-filter: blur(8px)` do nav depois que ele deixa o céu, e o `backdrop-blur-sm` sobre `bg-ceu-1/95` no lightbox.

### Named Rules
**A Regra do Plano.** Nada flutua. Se um elemento precisa se destacar de fundo, ele ganha borda de 1px ou fundo sólido — nunca sombra, nunca blur decorativo.

## Shapes

Retângulo puro. Não há `rounded-*` em nenhum ponto do código, e o frontmatter registra `rounded.none: "0px"` para deixar isso explícito. Botões, blocos de CTA, fichas, pranchas, carimbo de cota, barra de lightbox: todos com canto vivo. A borda é a assinatura de forma — `1px` sólido em `color-mix(...)` da tinta, da branco ou da própria cor atual (`borderColor: currentColor` no CTA do nav).

A exceção é o anel da onda: `border: 2px solid rgba(247, 245, 240, 0.92)` com `border-radius: 50%`, largura `22%` do lado da prancha, `aspect-ratio: 1`. É o único círculo do sistema, e ele existe apenas como animação.

## Components

### Buttons
Blocos retangulares de canto vivo que nunca arredondam e nunca projetam sombra.
- **Shape:** canto reto (`0px`), sem borda no preenchido; `1px` na variante contornada.
- **Primário (WhatsApp):** fundo `#3f6239` com texto `#f7f5f0`, `px-6 py-4` no celular e `px-8 py-5` acima de `sm`; título em Bricolage 600 (1.125rem → 1.25rem) e o telefone em `.mono` com `opacity-90`.
- **Hover:** troca para `#6f8f5f` (`hover:bg-serra-claro`), transição só de cor (`transition-colors`).
- **Secundário (Ligar):** transparente com borda `border-tinta/35`, sublinha "atendimento direto" em mono `text-tinta/75`; hover fecha a borda em `border-tinta`.
- **No fundo verde:** o CTA inverte — fundo branco `#f7f5f0` com texto verde, hover para areia; o contornado usa `border-branco/45` e hover `border-branco`.
- **Foco:** `:focus-visible` global — contorno `2px solid #2e6f9e` com `outline-offset: 3px`.

### Prancha (card de imagem) — componente de assinatura
- **Corner Style:** reto (`0px`).
- **Background:** branco `#f7f5f0`.
- **Border:** `1px solid color-mix(in oklab, var(--color-tinta) 22%, transparent)`.
- **Ficha:** `figcaption`/`p` em `.mono` com borda superior `border-tinta/20` (retrato) ou `border-tinta/15` (acervo), padding `px-3 py-2.5` / `px-2.5 py-2`.
- **Conteúdo interno:** `img` com `object-fit: cover`, proporção reservada por `aspect-ratio` inline vinda do dado real (`ar`), e `filter 0.35s ease` na transição.
- **Comportamento:** é um `<button>` (`cursor-zoom-in`) que dispara um `CustomEvent` consumido por um lightbox único; nada de contêiner de link aninhado.

### Óndinha (afordância de ampliação)
Dois anéis `::before`/`::after` que se abrem do centro ao mesmo tempo (`0.9s cubic-bezier(0.22, 1, 0.36, 1)`) com 0.14s de defasagem entre si, de `scale(0.25)` a `scale(4.6)` e opacidade 0 → 0.95 → 0. A imagem escurece para `brightness(0.93)` no hover para o anel branco sobreviver a céu ou parede clara. Dispara em `:hover` **e** `:focus-visible`, uma vez, nunca em loop; em `prefers-reduced-motion` a animação é desligada. Onde não há hover (`@media (hover: hover)` falso), o anel nunca aparece e fica no lugar um selo `.marca-zoom`: quadrado branco de canto reto com borda `border-tinta/30` e um ícone SVG de 12px de quatro cantos (`stroke-width: 1.15`).

### Régua de cota (componente de assinatura)
Trilho fixo de `76px` na margem esquerda, só no desktop, `aria-hidden`, `pointer-events-none`, `z-30`. Contém: linha de nível em `left-[56px]` com `w-px` e `opacity: 0.55`; onze marcas de nível espaçadas de 10% em 10% da altura (12px nas marcas de 500 em 500, 7px nas demais, opacidade 0.6 / 0.4); e o leitor, uma caixa de `68px` com fundo sólido na cor da faixa atual e borda `border-branco/30`. O leitor mostra a altitude em metros (`font-mono text-[12px] tracking-[0.08em] tabular-nums`) e o nome da faixa em `text-[10px] tracking-[0.1em] uppercase`, descendo com `translate3d` conforme o progresso de scroll. As cinco faixas trocam de cor: céu `#1e4a6e` → neblina `#2e6f9e` → pedra `#6f5f3d` → areia `#6f5f3d` → mata `#3f6239`.

### Rótulo de cota (`.cota`)
Linha + número, sempre em mono caixa alta: um filete de `2.5rem` por `1px` em `currentColor` com `opacity: 0.55` antes do texto, `gap: 0.625rem`. Cada faixa abre com o seu: `cota 0,00 — nível da rua`, `cota 420,00 — pedra`, `cota 380,00 — areia`, `cota 240,00 — pedra`, `cota 120,00 — transição`, `cota 0,00 — mata`. Cor: `text-tinta/70` nas faixas claras, `text-branco/82` nas escuras.

### Réguas (`.regua` / `.regua-clara`)
A linguagem de separação. `.regua` é `border-top: 1px solid color-mix(in oklab, var(--color-tinta) 26%, transparent)`; `.regua-clara` é a mesma coisa em branco a 30%. Toda grade de dados, toda linha de serviço, toda separação de ficha de obra usa uma delas — nunca um `<hr>` estilizado à parte.

### Navigation
Cabeçalho fixo (`fixed inset-x-0 top-0 z-40`), `max-w-[1600px]`, `px-6 py-4 lg:px-16`. Dois estados, alternados por scroll: sobre o céu é transparente, sem borda, `backdrop-filter: none` e texto `#f7f5f0`; depois da mídia do hero ele passa a `color-mix(in oklab, #f5eee1 92%, transparent)` com borda inferior `1px solid rgba(22,50,74,0.16)`, `blur(8px)` e texto `#16324a` — a troca é `transition-colors duration-500`. Marca à esquerda (nome em Bricolage 600 15px com tracking -0.01em + "Arquiteto" em mono com `opacity-70`, escondido no celular). Links do nav em `.mono opacity-85` → `hover:opacity-100`, em `gap-7`, visíveis a partir de `md`. CTA do nav: contornado em `currentColor` com `px-3 py-2.5`, virando bloco verde sólido quando o nav sai do céu; no celular exibe só "WhatsApp", acima de `sm` mostra "WhatsApp (88) 99737-4527".

### Barra fixa de CTA (celular)
`fixed inset-x-0 bottom-0 z-40`, `lg:hidden`, fundo `#3f6239`, borda superior `border-branco/20`, texto branco, duas metades separadas por `border-l border-branco/25`: "Falar no WhatsApp" (Bricolage 600 1.0625rem + telefone em mono) e "Ligar". Existe porque no celular a página é longa e o CTA não pode viver só no fim.

### Lightbox
`role="dialog"` com `aria-modal`, `z-50`, fundo `bg-ceu-1/95` com `backdrop-blur-sm`, três faixas separadas por `border-branco/20`: topo (obra + cidade à esquerda, contador `NN / NN` tabular, botão "esc · fechar"), meio (a imagem inteira, `object-contain` com `max-h-[calc(100svh-8rem)]`, ou `object-cover` no modo preencher, clique no vazio fecha) e base (legenda, botão "preencher"/"ver inteira" e as setas ← →). Foco vai para o botão de fechar, `Esc` fecha, ← → navegam, foco volta ao elemento de origem, o documento trava (`overflow: hidden` + `pararScroll(true)` no Lenis) e as duas vizinhas são pré-carregadas a cada troca.

## Do's and Don'ts

### Do:
- **Do** usar `--rule: 1px` (`app/globals.css`) para toda separação — réguas, bordas de prancha, ticks de cota. Espessura é sempre 1px.
- **Do** manter `rounded.none` (`0px`) em qualquer superfície nova; o único `50%` do sistema é o anel da onda.
- **Do** manter o verde como preenchimento com texto branco por cima, no máximo uma vez por tela.
- **Do** escrever todo dado — cota, contador, ficha, horário, telefone — em `.mono` (0.75rem, 0.12em, caixa alta).
- **Do** repetir o par `<div className="regua" />` + `<p className="cota">` para abrir qualquer faixa nova.
- **Do** desligar movimento em `prefers-reduced-motion`: o sistema já zera a animação globalmente e o Lenis nem inicializa nesse caso.

### Don't:
- **Don't** introduzir `box-shadow` ou `shadow-*`. O sistema é plano; relevo se resolve com borda 1px ou fundo sólido.
- **Don't** usar `#000` nem `#fff`. O fundo do documento é `#f7f5f0` e o escuro mais fundo é `#16324a`.
- **Don't** aplicar `border-radius` em botão, card ou ficha.
- **Don't** usar `--color-serra` como cor de texto sobre pedra ou areia (o verde só aparece como fundo de CTA/faixa, com branco por cima).
- **Don't** adicionar uma segunda hue de acento; a paleta é azul + bege + branco, com o verde como único acento.
- **Don't** disparar a óndinha em loop, em autoplay ou fora de `:hover` / `:focus-visible` — e nunca em telas sem hover, onde quem sinaliza é o selo `.marca-zoom`.
