import type { NextConfig } from "next";

/**
 * Quando EXPORT_ESTATICO=1, o build sai como site puramente estatico em `out/`
 * (HTML, CSS, JS e imagens, sem servidor). Serve para hospedar no Cloudflare
 * Pages, que permite uso comercial no plano gratuito. Sem a variavel, o build
 * continua o padrao do Next, que e o que o `next start` e a Vercel usam.
 */
const estatico = process.env.EXPORT_ESTATICO === "1";

const nextConfig: NextConfig = {
  /* config options here */
  // `partialPrefetching` depende de `cacheComponents`; no export estatico os dois saem.
  ...(estatico
    ? { output: "export" as const, cacheComponents: false, partialPrefetching: false }
    : { cacheComponents: true, partialPrefetching: true }),
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
