# Pendências da revisão final

Veredito do revisor: **`recapture`** — o artefato está construído e saudável (74/74 imagens carregam a 390x844 DPR3, lightbox abre por toque real, fecha no Esc, navega com ← →, devolve o foco, cota percorre 900→0 m, Lenis/onda/revelações desligam em `prefers-reduced-motion`), mas a evidência de tela não sustentava a revisão de Projetos/Acervo e ficaram 7 achados. Nenhum é bloqueante; seis são de uma linha.

## O que ainda falta

### 1. Carimbo da cota sobrepõe o "A" do wordmark (P2 · confiança 0,9)
`components/Cota.tsx:37-41` e `components/Nav.tsx:51`.
No scroll 0 a 1440x900 o carimbo ocupa x 0–68, y 16–71 e invade o retângulo de tinta do wordmark (x 64–179, y 25–47) em 4 px na horizontal — a borda direita do carimbo cai dentro do "A". O header é z-40 e o carimbo z-30, então o glifo é desenhado por cima da borda navy.
**Correção escolhida (a que preserva o alcance do carimbo):** alinhar o header à coluna de conteúdo, que já está recuada 76 px pela régua — em `components/Nav.tsx`, trocar `lg:px-16` por `lg:pl-[140px] lg:pr-16`, para o wordmark começar na mesma vertical dos títulos de seção.

### 2. Anel de foco invisível sobre o verde e sobre o azul do lightbox (P2 · 0,85)
`app/globals.css:57-59`. O `:focus-visible` global usa #2e6f9e: dá 1,29:1 contra o verde serra (#3f6239) e 1,72:1 contra o ceu-1 do lightbox — abaixo dos 3:1 da WCAG 2.2 (SC 1.4.11 / 2.4.11). Atinge todos os controles de `#contato` (o telefone grande, "Falar no WhatsApp", "Ligar agora", "abrir no Google Maps", @instagram), a barra verde fixa do celular e os quatro botões do lightbox.
**Correção:** `outline-color: currentColor` no `:focus-visible` global resolve nav/verde/azul de uma vez (branco mede 6,39:1 sobre o verde e 8,53:1 sobre o ceu-1). Aproveitar para themar o scrollbar do documento — único item do checklist de "browser surfaces" do craft-floor ainda no padrão do navegador.

### 3. Rótulos mono de 12px abaixo de 4,5:1 (P2 · 0,9)
`app/page.tsx:78-90`, `214`, `235`, `325`.
`text-tinta/70` sobre pedra = 4,29:1 ("Studio"/"Horário"/"Instagram" e o rótulo "cota 240,00 — pedra"); `text-tinta/65` sobre areia = 4,20:1 e sobre branco = 4,30:1 (contador "NN / 14" do Acervo e os números dos serviços). Os valores em tinta cheia passam com 9,05–12,13:1 — o problema é só a camada secundária, que é justamente a informação de contato no desktop.
**Correção:** no mínimo `/70` sobre areia e branco (4,83:1 / 4,96:1) e `/75` sobre pedra (4,87:1); `/72` sobre pedra passa com 4,51:1, mas sem margem.

### 4. Lightbox não contém o foco (P2 · 0,9)
`components/Lightbox.tsx:60-75`. O diálogo se declara `aria-modal="true"` e trava o scroll, mas nada torna a página inerte e o handler só trata Escape e setas. Tab a partir do fechar vai: preencher → ← → → BODY → links do nav → CTA — ou seja, o foco pousa em links escondidos atrás do overlay.
**Correção:** no mesmo efeito que adiciona `lightbox-aberto`, marcar como inerte o resto do documento (`document.body.children` exceto o diálogo) ou adicionar um ramo de Tab que cicla entre os focáveis do próprio diálogo.

### 5. Carimbo da cota repete a cor em pedra e areia (P3 · 0,85)
`components/Cota.tsx:14-19`. A sequência de fundo do carimbo é #1e4a6e → #2e6f9e → #6f5f3d → #6f5f3d → #3f6239: cinco faixas, quatro cores, então a troca de cor prometida pela interação-assinatura não acontece entre pedra e areia (cerca de um terço da rolagem). Além disso #6f5f3d não está entre as cores declaradas no OWN-WORLD.
**Correção:** areia ganha degrau próprio — #7f6c46 mede 4,66:1 com o branco (`#8a7550` cai para 4,07:1 e não serve). Registrar a escala do carimbo no contrato.

### 6. Descritores 760w/1800w não batem com as larguras reais (P3 · 0,75)
`components/Imagem.tsx:15-18`. Toda imagem declara `@760.webp 760w` e `.webp 1800w`, mas os arquivos reais são 608x760 (os retratos — 760 é a ALTURA), 589x589, 790x790, 800x450, 1024x1280, 1600x1280, 1680x1344 e um único 1800x1440. Descritor `w` precisa ser a largura intrínseca, então a conta de densidade está errada de 12% a 250%.
**Correção:** emitir a largura real por arquivo (derivada no build, como `PROPORCAO` já faz com `ar`) ou servir um único `src`. Um gerador chegou a ser esboçado em `lib/larguras.ts` mas foi abortado — o arquivo não existe.

### 7. O contrato ainda promete o véu do hero (P3 · 0,95)
`.impeccable/surfaces/app-page-tsx.md:34`. O bloco FIRST VIEWPORT diz que o render sangra de borda a borda "com um véu de #1e4a6e no topo para o nav", e nenhum véu existe no build. A mudança é defensável e está registrada em `DESIGN.md` e `.impeccable/design.json`, mas o contrato ficou para trás.
**Correção:** atualizar a cláusula do véu em FIRST VIEWPORT e registrar a escala de cores do carimbo.

### Recaptura obrigatória
`desktop.png` e `mobile.png` não valem para as seções Projetos/Acervo: 33,5% (desktop) e 35,2% (mobile) da faixa do Acervo é o branco de fundo da `.prancha`, porque no scroll 0 só 2 das 74 imagens lazy estão carregadas. Prova emparelhada no mesmo build: sem rolar = 0,412 de painéis vazios; depois de rolar a página toda (74/74) = 0,113. **Os painéis em branco são a captura, não a página.** Regenerar rolando a página em passos antes da captura final.

## Estado do que já está fechado
- Detector de anti-padrões: 0 achados em `app`, `components`, `lib`.
- Build de produção: compila, TypeScript passa, páginas estáticas.
- 118 rasters em `public/obras/` com procedência embutida; `app/icon.png` e `app/favicon.ico` idem.
- Contraste verificado por amostragem de pixel: o nav mede 11,17:1 atrás dos links e 11,63:1 atrás do nome sem o véu.
- Sem overflow horizontal de 320 a 1920 px; o rodapé escapa da barra fixa no celular.
- Contrato, DESIGN.md e .impeccable/design.json existem e descrevem o que foi construído (exceto o item 7).
