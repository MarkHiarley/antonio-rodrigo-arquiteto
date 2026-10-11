# Antonio Rodrigo | ARQUITETO

Site de uma página para o arquiteto Antonio Rodrigo Duarte, em Tianguá – CE.
Substitui o portfólio que ele mantinha num subdomínio grátis do WordPress.com.

## Rodar

```bash
npm install
npm run dev -- --port 3000     # http://localhost:3000
npm run build                  # build de produção (estático)
npm start -- --port 3000
```

## Deploy

Vercel. Nada de backend: os CTAs abrem `wa.me` e `tel:`, então o site é
inteiramente estático.

Quando o domínio próprio existir, defina `NEXT_PUBLIC_SITE_URL` (por exemplo
`https://arquitetoantoniorodrigo.com.br`) para o `metadataBase` e as imagens de
Open Graph passarem a apontar para o endereço certo. Na Vercel a variável
`VERCEL_URL` já resolve isso nos deploys de preview.

## Estrutura

```
app/
  layout.tsx      fontes, metadados, Lenis, régua de cota, nav, barra fixa, lightbox
  page.tsx        a página inteira, em faixas de altitude
  globals.css     tokens do mundo, réguas, pranchas, ondinha, movimento
components/
  SmoothScroll    Lenis; desligado em prefers-reduced-motion
  Cota            régua de altitude (900 m → 0 m) que acompanha o scroll
  Nav             barra do topo, que troca de cor na linha da serra
  CtaFixo         barra fixa de WhatsApp no celular
  Ampliavel       prancha clicável: ondinha no hover, selo onde não há hover
  Lightbox        visualizador com teclado, foco e navegação
  Imagem          <img> com srcset a partir dos WebP gerados
lib/
  site.ts         ficha do studio, serviços e as 14 obras com suas pranchas
  scroll.ts       ponto único para parar/retomar o scroll suave
  lightbox.ts     nome do evento de ampliar
public/obras/     as pranchas em WebP (117 MB de original → 5,4 MB)
ref/images/       os arquivos originais baixados do site antigo (não vão para o deploy)
```

## Imagens

As 59 imagens originais vieram do site que o próprio arquiteto mantinha
(`arquitetoantoniorodrigo.wordpress.com`), em `ref/images/`. Nada é hotlinkado
de lá: `public/obras/` guarda versões WebP em 1800px e 760px de largura, e cada
`<img>` declara as duas em `srcset`. Os originais em `ref/` não fazem parte do
build.

## Direção visual

Um corte de altitude da Serra da Ibiapaba: o topo da página é céu, o pé é chão,
e rolar é descer. Azul de hora azul, bege de pedra, areia, branco e verde serra
usado uma única vez, fechando a descida. Detalhes em `DESIGN.md`; o contrato de
direção que guiou a construção está em `.impeccable/surfaces/app-page-tsx.md`.

## Acessibilidade

`pt-BR`, mobile-first, contraste AA nos rótulos, foco visível, lightbox com
`Esc`/setas e devolução de foco, e todo movimento — scroll suave, revelações e a
ondinha das pranchas — desligado sob `prefers-reduced-motion`.
