import Ampliavel from "@/components/Ampliavel";
import Imagem from "@/components/Imagem";
import {
  FICHA,
  GALERIA,
  LINK_INSTAGRAM,
  LINK_MAPS,
  LINK_TEL,
  LINK_WHATSAPP,
  OBRAS,
  SERVICOS,
  TOTAL_PLACAS,
} from "@/lib/site";

const DESTAQUE = ["sao-jose", "mare-cheia-pousada", "deco-garden-clezio", "suite-i-e-f", "cozinha-rosa", "consultorio-joana"];
const OBRAS_DESTAQUE = OBRAS.filter((o) => DESTAQUE.includes(o.slug));

export default function Home() {
  return (
    <main className="pb-[78px] lg:pb-0 lg:pl-[76px]">
      {/* ------------------------------------------------------------------
          1. Céu — hora azul. O topo do corte: o nome assentado na serra.
          ------------------------------------------------------------------ */}
      <section id="inicio" className="flex min-h-svh flex-col lg:h-svh">
        <div
          id="inicio-media"
          className="relative h-[56svh] shrink-0 overflow-hidden bg-ceu-1 lg:h-auto lg:flex-[62]"
        >
          <Imagem
            arquivo="cena-03-1"
            alt="Fachada noturna da Casa São José, em Tianguá, com céu estrelado"
            sizes="100vw"
            prioridade
            className="absolute inset-0 h-full w-full object-cover object-[50%_72%]"
          />

          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-5 lg:px-16 lg:pb-6">
            <p className="mono text-branco/75">
              Arquiteto · {FICHA.cidade} – {FICHA.uf}
            </p>
            <h1 className="font-display mt-2 text-[clamp(2.6rem,10.4vw,9.75rem)] leading-[0.86] font-semibold tracking-[-0.035em] text-branco">
              Antonio Rodrigo
            </h1>
          </div>
        </div>

        {/* Nível da rua: aqui começa o chão. */}
        <div className="flex shrink-0 flex-col justify-between bg-pedra lg:flex-[38]">
          <div className="regua mx-6 lg:mx-16" />
          <div className="mx-auto w-full max-w-[1600px] px-6 pt-4 lg:px-16">
            <p className="cota text-tinta/72">cota 0,00 — nível da rua</p>
          </div>

          <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-6 py-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-14 lg:px-16 lg:py-10">
            <div className="flex flex-wrap items-stretch gap-3">
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-center bg-serra px-6 py-4 text-branco transition-colors hover:bg-serra-claro sm:px-8 sm:py-5"
              >
                <span className="font-display text-lg leading-none font-semibold sm:text-xl">
                  Falar no WhatsApp
                </span>
                <span className="mono mt-2 opacity-90">{FICHA.telefoneBonito}</span>
              </a>
              <a
                href={LINK_TEL}
                className="flex flex-col justify-center border border-tinta/35 px-6 py-4 transition-colors hover:border-tinta sm:px-8 sm:py-5"
              >
                <span className="font-display text-lg leading-none font-semibold sm:text-xl">
                  Ligar
                </span>
                <span className="mono mt-2 text-tinta/75">atendimento direto</span>
              </a>
            </div>

            <dl className="grid gap-x-10 gap-y-5 text-sm sm:grid-cols-3 lg:justify-items-end">
              <div>
                <dt className="mono text-tinta/70">Studio</dt>
                <dd className="mt-1.5">{FICHA.endereco} — {FICHA.cidade}, {FICHA.uf}</dd>
              </div>
              <div>
                <dt className="mono text-tinta/70">Horário</dt>
                <dd className="mt-1.5">seg–qui 07:00–18:00 · sex 07:00–17:30</dd>
              </div>
              <div>
                <dt className="mono text-tinta/70">Instagram</dt>
                <dd className="mt-1.5">
                  <a href={LINK_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline decoration-tinta/30 underline-offset-4 hover:decoration-tinta">
                    @{FICHA.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. Faixa de cotas — os dados do studio, como anotação de prancha.
          ------------------------------------------------------------------ */}
      <section id="cotas" className="bg-ceu-2 text-branco">
        <div className="mx-auto grid max-w-[1600px] gap-y-4 px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {[
            { k: "Avaliação no Google", v: `${FICHA.googleNota} ★ · ${FICHA.googleAvaliacoes} avaliações` },
            { k: "Projetos no acervo", v: `${OBRAS.length} obras · ${TOTAL_PLACAS} pranchas` },
            { k: "Base", v: `${FICHA.cidade} – ${FICHA.uf}, Serra da Ibiapaba` },
            { k: "Atendimento", v: "Projeto, reforma e interiores" },
          ].map((item) => (
            <div key={item.k} className="border-l border-branco/25 pl-4">
              <p className="mono text-branco/82">{item.k}</p>
              <p className="mt-1.5 text-sm">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. Neblina → pedra. Quem é o arquiteto.
          ------------------------------------------------------------------ */}
      <section id="sobre" className="bg-areia">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20 lg:px-16 lg:py-28">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <figure className="prancha">
              <div style={{ aspectRatio: 1 }}>
                <Imagem
                  arquivo="perfil-02"
                  alt="Antonio Rodrigo, arquiteto, sentado em uma obra em Tianguá"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mono border-t border-tinta/20 px-3 py-2.5 text-tinta/75">
                {FICHA.assinatura} — em obra, Tianguá
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="cota text-tinta/70">cota 420,00 — pedra</p>
            <h2 className="font-display mt-6 text-[clamp(2rem,4.6vw,3.75rem)] leading-[0.98] font-semibold tracking-[-0.025em]">
              Transformar sonho em
              <br />
              realidade desenhada.
            </h2>

            <div className="mt-8 grid max-w-[62ch] gap-5 text-[1.0625rem] leading-relaxed text-tinta/85">
              <p>
                Sou arquiteto e trabalho com arquitetura e design de interiores. Minha jornada
                começou com uma paixão por criar espaços que não apenas atendem às necessidades
                funcionais, mas também elevam a qualidade de vida de quem habita neles.
              </p>
              <p>
                Ao longo dos anos trabalhei em projetos diversos — de residências contemporâneas a
                espaços comerciais e corporativos. Minha abordagem combina estética e
                funcionalidade, buscando sempre soluções que unam beleza e utilidade. Cada escolha
                é ponderada para que o resultado seja uma fusão entre beleza e propósito prático.
              </p>
              <p>
                Acredito que a colaboração é a chave de qualquer projeto. Trabalho de perto com os
                clientes para entender suas visões e necessidades: cada projeto é uma oportunidade
                de criar algo único e significativo.
              </p>
            </div>

            <div className="regua mt-10 grid gap-6 pt-6 sm:grid-cols-3">
              <div>
                <p className="mono text-tinta/70">Atuação</p>
                <p className="mt-1.5 text-sm">Residencial, comercial e corporativo</p>
              </div>
              <div>
                <p className="mono text-tinta/70">Escritório</p>
                <p className="mt-1.5 text-sm">{FICHA.endereco}, {FICHA.cidade} – {FICHA.uf}</p>
              </div>
              <div>
                <p className="mono text-tinta/70">Google</p>
                <p className="mt-1.5 text-sm">
                  {FICHA.googleNota} ★ em {FICHA.googleAvaliacoes} avaliações —{" "}
                  <a href={LINK_MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-tinta/30 underline-offset-4 hover:decoration-tinta">
                    ver no Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. Areia clara. Os quatro serviços, em camadas.
          ------------------------------------------------------------------ */}
      <section id="servicos" className="bg-branco">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="cota text-tinta/70">cota 380,00 — areia</p>
              <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,3.25rem)] leading-none font-semibold tracking-[-0.025em]">
                O que eu faço
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm text-tinta/75">
              Do primeiro desenho à entrega da obra — com o mesmo cuidado no traço e no canteiro.
            </p>
          </div>

          <ul className="mt-12 grid lg:grid-cols-2">
            {SERVICOS.map((s) => (
              <li
                key={s.numero}
                className="regua grid gap-4 py-8 pr-0 lg:py-10 lg:pr-14 lg:odd:border-r lg:odd:border-tinta/20 lg:even:pl-14"
              >
                <div className="flex items-baseline gap-4">
                  <span className="mono text-tinta/65">{s.numero}</span>
                  <h3 className="font-display text-[clamp(1.15rem,2vw,1.5rem)] leading-tight font-semibold">
                    {s.nome}
                  </h3>
                </div>
                <p className="max-w-[54ch] text-[0.97rem] leading-relaxed text-tinta/80">
                  {s.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. Pedra. Obras em destaque — cada uma uma prancha com ficha.
          ------------------------------------------------------------------ */}
      <section id="obras" className="bg-pedra">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="cota text-tinta/70">cota 240,00 — pedra</p>
              <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,3.25rem)] leading-none font-semibold tracking-[-0.025em]">
                Projetos
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm text-tinta/75">
              Renders dos meus próprios projetos. Nome da obra, cidade e um resumo do que foi
              desenhado.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-12">
            {OBRAS_DESTAQUE.map((obra, i) => {
              const largo = i % 3 === 0;
              return (
                <article
                  key={obra.slug}
                  className={largo ? "lg:col-span-7" : "lg:col-span-5"}
                >
                  <Ampliavel arquivo={obra.capa} className="prancha w-full">
                    <div style={{ aspectRatio: obra.placas[0].ar }}>
                      <Imagem
                        arquivo={obra.capa}
                        alt={obra.placas[0].alt}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Ampliavel>

                  <div className="regua mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-3">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">
                      {obra.nome}
                    </h3>
                    <p className="mono text-tinta/72">
                      {obra.cidade} · {obra.tipo}
                    </p>
                  </div>
                  <p className="mt-2 max-w-[52ch] text-sm text-tinta/75">{obra.resumo}</p>

                  {obra.placas.length > 1 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {obra.placas.slice(1, 5).map((p) => (
                        <li key={p.arquivo} className="w-[104px] sm:w-[132px]">
                          <Ampliavel arquivo={p.arquivo} className="prancha w-full">
                            <div style={{ aspectRatio: p.ar }}>
                              <Imagem
                                arquivo={p.arquivo}
                                alt={p.alt}
                                sizes="132px"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </Ampliavel>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. Acervo — a prancha completa, obra por obra.
          ------------------------------------------------------------------ */}
      <section id="acervo" className="bg-areia">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="cota text-tinta/70">cota 120,00 — transição</p>
              <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,3.25rem)] leading-none font-semibold tracking-[-0.025em]">
                Acervo completo
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm text-tinta/75">
              {TOTAL_PLACAS} pranchas, {OBRAS.length} obras. Tudo desenhado por mim, em Tianguá,
              na Serra da Ibiapaba e no litoral do Ceará.
            </p>
          </div>

          <div className="mt-12">
            {OBRAS.map((obra, i) => (
              <article
                key={obra.slug}
                className="regua grid gap-6 py-9 first:border-t-0 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 lg:py-11"
              >
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <p className="mono text-tinta/65">
                    {String(i + 1).padStart(2, "0")} / {String(OBRAS.length).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-[1.4rem] leading-tight font-semibold tracking-[-0.015em]">
                    {obra.nome}
                  </h3>
                  <p className="mono mt-2 text-tinta/72">
                    {obra.cidade} · {obra.tipo}
                  </p>
                  <p className="mt-3 max-w-[36ch] text-sm text-tinta/75">{obra.resumo}</p>
                  <p className="mono mt-3 text-tinta/68">
                    {obra.placas.length} {obra.placas.length === 1 ? "prancha" : "pranchas"}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {obra.placas.map((p) => (
                    <li key={p.arquivo}>
                      <Ampliavel arquivo={p.arquivo} className="prancha w-full">
                        <div style={{ aspectRatio: 4 / 3 }}>
                          <Imagem
                            arquivo={p.arquivo}
                            alt={p.alt}
                            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mono border-t border-tinta/15 px-2.5 py-2 text-tinta/72">
                          {p.legenda}
                        </p>
                      </Ampliavel>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. Mata. O fim da descida: o telefone, grande.
          ------------------------------------------------------------------ */}
      <section id="contato" className="bg-serra text-branco">
        <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-14 lg:px-16 lg:pt-28 lg:pb-16">
          <p className="cota text-branco/82">cota 0,00 — mata</p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-20">
            <div>
              <h2 className="font-display max-w-[18ch] text-[clamp(2.1rem,5.4vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.03em]">
                Vamos desenhar algo extraordinário juntos.
              </h2>

              <a
                href={LINK_TEL}
                className="mt-10 block font-display text-[clamp(1.75rem,5.2vw,4rem)] leading-none font-semibold tracking-[-0.03em] text-branco underline decoration-branco/35 underline-offset-[10px] transition-colors hover:decoration-branco"
              >
                {FICHA.telefoneBonito}
              </a>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-branco px-7 py-4 text-serra transition-colors hover:bg-areia"
                >
                  <span className="font-display text-lg leading-none font-semibold">
                    Falar no WhatsApp
                  </span>
                </a>
                <a
                  href={LINK_TEL}
                  className="border border-branco/45 px-7 py-4 font-display text-lg leading-none font-semibold transition-colors hover:border-branco"
                >
                  Ligar agora
                </a>
              </div>
            </div>

            <dl className="grid content-start gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="mono text-branco/82">Studio</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  {FICHA.enderecoCompleto}
                  <br />
                  <a href={LINK_MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-branco/40 underline-offset-4 hover:decoration-branco">
                    abrir no Google Maps
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-branco/82">Horário</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  {FICHA.horarios.map((h) => (
                    <span key={h.dias} className="block">
                      {h.dias} · {h.horas}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="mono text-branco/82">Instagram</dt>
                <dd className="mt-2 text-sm">
                  <a href={LINK_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline decoration-branco/40 underline-offset-4 hover:decoration-branco">
                    @{FICHA.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <footer className="border-t border-branco/20">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-16">
            <p className="mono text-branco/85">
              {FICHA.nome} | {FICHA.profissao.toUpperCase()} — {FICHA.cidade}, {FICHA.uf}
            </p>
            <p className="mono text-branco/82">
              {GALERIA.length} pranchas · imagens do próprio arquivo do arquiteto
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
