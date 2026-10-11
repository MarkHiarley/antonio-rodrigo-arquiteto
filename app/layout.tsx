import type { Metadata, Viewport } from "next";
import { Archivo, Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Cota from "@/components/Cota";
import CtaFixo from "@/components/CtaFixo";
import Lightbox from "@/components/Lightbox";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import { FICHA } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spline = Spline_Sans_Mono({
  variable: "--font-spline",
  subsets: ["latin"],
  display: "swap",
});

const DESCRICAO =
  "Arquiteto Antonio Rodrigo, em Tianguá – CE. Projetos residenciais, comerciais e corporativos, reformas, design de interiores e acompanhamento de obra.";

/**
 * A base das URLs absolutas (Open Graph). Sem domínio próprio ainda, então:
 * NEXT_PUBLIC_SITE_URL quando o domínio existir, senão o domínio de produção
 * estável da Vercel, e só em último caso a URL deste deployment específico —
 * que muda a cada deploy e derrubaria a imagem do preview já em cache. Sem
 * nenhuma delas a chave fica de fora: nunca um domínio inventado.
 */
const urlBase =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined);

export const metadata: Metadata = {
  ...(urlBase ? { metadataBase: new URL(urlBase) } : {}),
  title: "Antonio Rodrigo | Arquiteto em Tianguá – CE",
  description: DESCRICAO,
  keywords: [
    "arquiteto Tianguá",
    "arquiteto Ceará",
    "projeto residencial Tianguá",
    "design de interiores Tianguá",
    "reforma Tianguá",
    "Antonio Rodrigo arquiteto",
  ],
  authors: [{ name: FICHA.assinatura }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Antonio Rodrigo | Arquiteto em Tianguá – CE",
    description: DESCRICAO,
    siteName: "Antonio Rodrigo | ARQUITETO",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Antonio Rodrigo, arquiteto, em obra em Tianguá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Rodrigo | Arquiteto em Tianguá – CE",
    description: DESCRICAO,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e4a6e",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${archivo.variable} ${spline.variable} h-full`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <Cota />
        <Nav />
        {children}
        <CtaFixo />
        <Lightbox />
      </body>
    </html>
  );
}
