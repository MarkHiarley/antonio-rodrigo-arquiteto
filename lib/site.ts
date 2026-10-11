export const FICHA = {
  nome: "Antonio Rodrigo",
  assinatura: "Antonio R. Duarte",
  profissao: "Arquiteto",
  telefone: "+55 88 99737-4527",
  telefoneBonito: "(88) 99737-4527",
  whatsapp: "558897374527",
  cidade: "Tianguá",
  uf: "CE",
  endereco: "R. Doze de Agosto, Centro",
  enderecoCompleto: "R. Doze de Agosto, Centro — Tianguá, CE, 62320-097",
  instagram: "arquitetoantoniorodrigo",
  googleNota: "5,0",
  googleAvaliacoes: 4,
  maps:
    "https://www.google.com/maps/search/?api=1&query=Antonio%20Rodrigo%20%7C%20ARQUITETO&query_place_id=ChIJ-zmCDcJJ6wcRjOdbc44wFsQ",
  horarios: [
    { dias: "seg – qui", horas: "07:00 – 18:00" },
    { dias: "sex", horas: "07:00 – 17:30" },
    { dias: "sáb – dom", horas: "Fechado" },
  ],
} as const;

const MSG = "Olá, Antonio! Vi seu site e quero conversar sobre um projeto.";
export const LINK_WHATSAPP = `https://wa.me/${FICHA.whatsapp}?text=${encodeURIComponent(MSG)}`;
export const LINK_TEL = `tel:+${FICHA.whatsapp}`;
export const LINK_INSTAGRAM = `https://instagram.com/${FICHA.instagram}`;
export const LINK_MAPS = FICHA.maps;

export type Placa = {
  arquivo: string;
  legenda: string;
  alt: string;
  /** Largura / altura do arquivo original — reserva a caixa e evita salto de layout. */
  ar: number;
};

/** Proporções originais, medidas com `identify` nos arquivos baixados. */
const PROPORCAO: Record<string, number> = {
  "cena-03-1": 1.25, "cena-01": 1.25, "cena-02-1": 1.25,
  "cena-07": 1.33, "cena-08": 1.33, "cena-10": 1.33, "cena-12-1": 1.33,
  "cena-02-pos-producao-1": 1.25, "cena-01-pos-producao-1": 1.25,
  "closet-02": 1.25, "banheiro-1": 0.8,
  "cena-01.denoiser-1": 1.78, "cena-02.denoiser-1": 1.78, "cena-03.denoiser": 1.78,
  "cena-01-pos-producao-7": 1.78,
  "fachada-03-pos-producao-1": 1.33, "cena-01-pos-producao-2": 1.78,
  "cena-02-10": 1.78, "cena-04-1": 1.78, "cena-05-pos-producao-1": 1.33,
  "cena-01-2": 1.33, "cena-02-3": 1.33, "cena-03-4": 1.33,
  "closet-01-1": 1.33, "closet-02-1": 1.33, "banheiro-3": 0.8,
  "cena-01-4": 1.78, "cena-02-5": 1.78, "cena-03-6": 1.78,
  "deck-01": 1.33, "deck-02": 1.33, "deck-03": 1.33,
  "cena-01-5": 1.33, "cena-02-6": 1.33, "cena-03-7": 1.33,
  "cena-01-6": 1.33, "cena-02-7": 1.33, "cena-03-8": 1.33,
  "cena-03-9": 1.78, "cena-02-8": 1.78,
  "cena-01-8": 0.8, "cena-02-9": 0.8, "cena-04-2": 0.8, "cena-05-1": 0.8,
  "cena-06": 0.8, "cena-07-1": 0.8, "cena-08-1": 0.8, "cena-09": 0.8,
  "cena-11": 0.8, "cena-10-1": 0.8, "cena-13": 0.8,
  "fachada-1": 1.78,
};

export type Obra = {
  slug: string;
  nome: string;
  cidade: string;
  tipo: "Residencial" | "Interiores" | "Comercial" | "Corporativo";
  resumo: string;
  capa: string;
  placas: Placa[];
};

type PlacaSemAr = Omit<Placa, "ar">;

const o = (
  slug: string,
  nome: string,
  cidade: string,
  tipo: Obra["tipo"],
  resumo: string,
  placas: PlacaSemAr[],
): Obra => {
  const comAr = placas.map((p) => ({ ...p, ar: PROPORCAO[p.arquivo] ?? 1.33 }));
  return { slug, nome, cidade, tipo, resumo, capa: comAr[0].arquivo, placas: comAr };
};

export const OBRAS: Obra[] = [
  o("sao-jose", "Casa São José", "Tianguá", "Residencial", "Volumes retos, iluminação embutida e o céu da serra como teto.", [
    { arquivo: "cena-03-1", legenda: "Fachada noturna", alt: "Fachada noturna da Casa São José, com céu estrelado e iluminação em LED" },
    { arquivo: "cena-01", legenda: "Fachada diurna", alt: "Fachada diurna da Casa São José, em pedra e revestimento branco" },
    { arquivo: "cena-02-1", legenda: "Perspectiva diurna", alt: "Perspectiva diurna da Casa São José" },
  ]),
  o("deco-garden-clezio", "Decô Garden Clézio", "Tianguá", "Residencial", "Área de convívio aberta, pergolado e paisagismo de espécies da serra.", [
    { arquivo: "cena-07", legenda: "Convívio", alt: "Área de convívio do Decô Garden Clézio" },
    { arquivo: "cena-08", legenda: "Convívio", alt: "Área de convívio do Decô Garden Clézio" },
    { arquivo: "cena-10", legenda: "Convívio", alt: "Área de convívio do Decô Garden Clézio" },
    { arquivo: "cena-12-1", legenda: "Convívio", alt: "Área de convívio do Decô Garden Clézio" },
  ]),
  o("suite-i-e-f", "Suíte I & F", "Tianguá", "Interiores", "Suíte com closet e banheiro: madeira, pedra e luz indireta.", [
    { arquivo: "cena-02-pos-producao-1", legenda: "Quarto", alt: "Quarto da Suíte I & F" },
    { arquivo: "cena-01-pos-producao-1", legenda: "Quarto", alt: "Quarto da Suíte I & F" },
    { arquivo: "closet-02", legenda: "Closet", alt: "Closet da Suíte I & F" },
    { arquivo: "banheiro-1", legenda: "Banheiro", alt: "Banheiro da Suíte I & F" },
  ]),
  o("cozinha-rosa", "Cozinha Rosa", "Tianguá", "Interiores", "Ilha central, marcenaria sob medida e bancada em pedra.", [
    { arquivo: "cena-01.denoiser-1", legenda: "Cozinha", alt: "Cozinha Rosa, vista geral" },
    { arquivo: "cena-02.denoiser-1", legenda: "Cozinha", alt: "Cozinha Rosa, ilha central" },
    { arquivo: "cena-03.denoiser", legenda: "Cozinha", alt: "Cozinha Rosa, marcenaria" },
  ]),
  o("mare-cheia-pousada", "Maré Cheia Pousada", "Ilha do Guijiru", "Comercial", "Bangalôs de telhado de palha, deck e piscina de frente para o mar.", [
    { arquivo: "cena-01-pos-producao-7", legenda: "Conjunto de bangalôs", alt: "Bangalôs de palha da Pousada Maré Cheia com deck e piscina" },
  ]),
  o("deck-marciel", "Deck Marciel", "Tianguá", "Residencial", "Deck em madeira, fachada ventilada e pé-direito duplo.", [
    { arquivo: "fachada-03-pos-producao-1", legenda: "Fachada", alt: "Fachada do Deck Marciel" },
    { arquivo: "cena-01-pos-producao-2", legenda: "Deck", alt: "Deck em madeira do Deck Marciel" },
    { arquivo: "cena-02-10", legenda: "Deck", alt: "Deck em madeira do Deck Marciel" },
    { arquivo: "cena-04-1", legenda: "Deck", alt: "Vista do deck do Deck Marciel" },
    { arquivo: "cena-05-pos-producao-1", legenda: "Fachada externa", alt: "Fachada externa do Deck Marciel" },
  ]),
  o("suite-m-e-g", "Suíte M & G", "Tianguá", "Interiores", "Suíte master, closet e banheiro em tons neutros.", [
    { arquivo: "cena-01-2", legenda: "Suíte", alt: "Suíte M & G" },
    { arquivo: "cena-02-3", legenda: "Suíte", alt: "Suíte M & G" },
    { arquivo: "cena-03-4", legenda: "Suíte", alt: "Suíte M & G" },
    { arquivo: "closet-01-1", legenda: "Closet", alt: "Closet M & G" },
    { arquivo: "closet-02-1", legenda: "Closet", alt: "Closet M & G" },
    { arquivo: "banheiro-3", legenda: "Banheiro", alt: "Banheiro da Suíte M & G" },
  ]),
  o("cozinha-m-e-g", "Cozinha M & G", "Tianguá", "Interiores", "Cozinha linear com armários até o teto e bancada contínua.", [
    { arquivo: "cena-01-4", legenda: "Cozinha", alt: "Cozinha M & G" },
    { arquivo: "cena-02-5", legenda: "Cozinha", alt: "Cozinha M & G" },
    { arquivo: "cena-03-6", legenda: "Cozinha", alt: "Cozinha M & G" },
  ]),
  o("deck-jailson", "Deck Jailson", "Tianguá", "Residencial", "Deck em madeira com guarda-corpo e vista para o vale.", [
    { arquivo: "deck-01", legenda: "Deck", alt: "Deck Jailson" },
    { arquivo: "deck-02", legenda: "Deck", alt: "Deck Jailson" },
    { arquivo: "deck-03", legenda: "Deck", alt: "Deck Jailson" },
  ]),
  o("cozinha-jailson", "Cozinha Jailson", "Tianguá", "Interiores", "Cozinha integrada à sala, em madeira e pedra clara.", [
    { arquivo: "cena-01-5", legenda: "Cozinha", alt: "Cozinha Jailson" },
    { arquivo: "cena-02-6", legenda: "Cozinha", alt: "Cozinha Jailson" },
    { arquivo: "cena-03-7", legenda: "Cozinha", alt: "Cozinha Jailson" },
  ]),
  o("sala-jailson", "Sala de Estar Jailson", "Tianguá", "Interiores", "Estar integrado, painel ripado e iluminação em cena.", [
    { arquivo: "cena-01-6", legenda: "Estar", alt: "Sala de estar Jailson" },
    { arquivo: "cena-02-7", legenda: "Estar", alt: "Sala de estar Jailson" },
    { arquivo: "cena-03-8", legenda: "Estar", alt: "Sala de estar Jailson" },
  ]),
  o("suite-master-jailson", "Suíte Master Jailson", "Tianguá", "Interiores", "Suíte master com cabeceira em madeira e luz indireta.", [
    { arquivo: "cena-03-9", legenda: "Suíte master", alt: "Suíte master Jailson" },
    { arquivo: "cena-02-8", legenda: "Suíte master", alt: "Suíte master Jailson" },
  ]),
  o("consultorio-joana", "Consultório Drª Joana", "Tianguá", "Corporativo", "Consultório odontológico em tons claros, com recepção e sala de atendimento.", [
    { arquivo: "cena-01-8", legenda: "Recepção", alt: "Recepção do Consultório Odontológico Drª Joana" },
    { arquivo: "cena-02-9", legenda: "Recepção", alt: "Recepção do Consultório Drª Joana" },
    { arquivo: "cena-04-2", legenda: "Circulação", alt: "Circulação do Consultório Drª Joana" },
    { arquivo: "cena-05-1", legenda: "Consultório", alt: "Sala de atendimento do Consultório Drª Joana" },
    { arquivo: "cena-06", legenda: "Consultório", alt: "Sala de atendimento do Consultório Drª Joana" },
    { arquivo: "cena-07-1", legenda: "Consultório", alt: "Sala de atendimento do Consultório Drª Joana" },
    { arquivo: "cena-08-1", legenda: "Consultório", alt: "Sala de atendimento do Consultório Drª Joana" },
    { arquivo: "cena-09", legenda: "Consultório", alt: "Sala de atendimento do Consultório Drª Joana" },
    { arquivo: "cena-11", legenda: "Detalhe", alt: "Detalhe do Consultório Drª Joana" },
    { arquivo: "cena-10-1", legenda: "Detalhe", alt: "Detalhe do Consultório Drª Joana" },
    { arquivo: "cena-13", legenda: "Detalhe", alt: "Detalhe do Consultório Drª Joana" },
  ]),
  o("dental-a3", "Dental A3", "Tianguá", "Corporativo", "Fachada comercial com platibanda e iluminação linear.", [
    { arquivo: "fachada-1", legenda: "Fachada", alt: "Fachada da clínica Dental A3" },
  ]),
];

export const SERVICOS = [
  {
    numero: "01",
    nome: "Projetos residenciais, comerciais e corporativos",
    texto:
      "Os projetos refletem uma visão holística: a forma do espaço é moldada pela compreensão das necessidades do cliente, pela funcionalidade dos ambientes e por uma estética atemporal.",
  },
  {
    numero: "02",
    nome: "Reformas",
    texto:
      "A reforma não é só uma atualização estética. É a oportunidade de criar um ambiente que reflita a personalidade de quem mora ali e atenda às necessidades práticas do dia a dia.",
  },
  {
    numero: "03",
    nome: "Design de interiores",
    texto:
      "Integração entre forma e função, para além da estética visual. Cada projeto narra uma história na qual os elementos se entrelaçam e a experiência humana vale mais que o acabamento.",
  },
  {
    numero: "04",
    nome: "Acompanhamento de obra",
    texto:
      "Do conceito ao canteiro: o acompanhamento garante fidelidade à visão original do projeto e transforma o desenho em realidade tangível.",
  },
] as const;

/* Todas as imagens do portfólio, na ordem em que aparecem nas obras. */
export const GALERIA = OBRAS.flatMap((obra) =>
  obra.placas.map((p) => ({ ...p, obra: obra.nome, cidade: obra.cidade, slug: obra.slug })),
);

export const TOTAL_PLACAS = GALERIA.length;
