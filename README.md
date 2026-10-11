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

Nada de backend: os CTAs abrem `wa.me` e `tel:`, e o site é inteiramente estático.
Isso dá dois caminhos.

### Cloudflare Pages — recomendado

O plano gratuito do Cloudflare Pages **permite uso comercial**, ao contrário do Hobby da
Vercel. E como o site é estático, não precisa de adaptador nenhum: o `next-on-pages`
está descontinuado e o adaptador OpenNext só é necessário para app com servidor.

```bash
# 1. gera o site estático em out/
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br npm run build:static

# 2. publica (o primeiro comando abre o navegador para login)
npx wrangler pages deploy out --project-name antonio-rodrigo-arquiteto
```

Ou conecte o repositório no painel do Pages:

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build:static` |
| Output directory | `out` |
| Variável de ambiente | `NEXT_PUBLIC_SITE_URL` = o domínio final |

O `NEXT_PUBLIC_SITE_URL` **precisa** existir no momento do build. Num site estático não
há servidor depois para corrigir a URL absoluta, e sem ele a `og:image` sai apontando
para `localhost` — o que quebra o preview do link no WhatsApp. Se você não definir nada,
o Cloudflare injeta `CF_PAGES_URL` (a URL `*.pages.dev`) e o preview ao menos funciona
no domínio provisório.

### Vercel

Funciona, com uma ressalva: as [Fair Use
Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) do plano **Hobby**
restringem o uso a projetos pessoais não comerciais. Site de cliente exige **Pro**
(US$ 20/mês ≈ R$ 110). Para uma landing page estática, o Cloudflare Pages entrega o
mesmo resultado por R$ 0.

```bash
vercel deploy --prod -y --scope <time>
```

### Sobre o domínio

Em qualquer um dos dois: registre o domínio **no nome do cliente** e aponte o DNS para o
serviço de hospedagem. A Vercel e o Cloudflare ganham o domínio próprio por CNAME ou
pelos nameservers, sem custo adicional.

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
