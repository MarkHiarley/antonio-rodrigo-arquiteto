type Props = {
  arquivo: string;
  alt: string;
  sizes: string;
  className?: string;
  prioridade?: boolean;
};

/**
 * Serve a placa a partir do próprio projeto: duas larguras em WebP, nenhum
 * hotlink para o WordPress antigo.
 */
export default function Imagem({ arquivo, alt, sizes, className, prioridade = false }: Props) {
  return (
    <img
      src={`/obras/${arquivo}.webp`}
      srcSet={`/obras/${arquivo}@760.webp 760w, /obras/${arquivo}.webp 1800w`}
      sizes={sizes}
      alt={alt}
      loading={prioridade ? "eager" : "lazy"}
      fetchPriority={prioridade ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}
