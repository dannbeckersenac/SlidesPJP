/* =========================================================
   Hackathon Jovem Programador 2026
   Dados do regulamento

   Fonte: o regulamento da comissão organizadora, de
   20/10/2026, em regulamento-hackathon-pjp-2026.pdf.
   Mudou o regulamento, mude aqui: a página do hackathon e a
   seção do cronograma leem deste arquivo. A apresentação tem
   o texto escrito à mão e precisa ser conferida junto.

   As datas do hackathon no calendário do ano continuam em
   cronograma/dados.js (as linhas "hack"). As duas listas
   precisam bater.
   ========================================================= */

window.HACKATHON = {
  nome: "Hackathon Jovem Programador 2026",
  promotores: "Senac Santa Catarina e SEPROSC",
  pdf: "regulamento-hackathon-pjp-2026.pdf",
  site: "https://www.jovemprogramador.com.br/hackathon",
  email: "contato@jovemprogramador.com.br",
  inicio: "2026-11-28",
  fim: "2026-12-05",
  equipe: { min: 4, max: 7 },

  /* Quadro 1, e o prazo de troca de integrantes do item 4 */
  inscricoes: [
    { data: "2026-10-20", titulo: "Abrem as inscrições", sub: "só pelo site do evento, de graça" },
    { data: "2026-11-19", titulo: "Fecham as inscrições", sub: "último dia para inscrever a equipe" },
    { data: "2026-11-25", titulo: "Prazo para avisar a troca de integrantes", sub: "a troca é avisada pelo mentor-anjo da unidade" },
    { data: "2026-11-26", titulo: "Análise das inscrições", sub: "pela comissão organizadora e pelos mentores-anjo" }
  ],

  /* Quadros 2, 3 e 5: tudo o que acontece em cada dia do evento.
     tipo: aovivo (encontro no Teams), entrega, final */
  agenda: [
    { data: "2026-11-28", hora: "09h às 12h",    tipo: "aovivo",  titulo: "Abertura" },
    { data: "2026-11-28", hora: "14h às 15h",    tipo: "aovivo",  titulo: "Apresentação dos problemas/desafios" },
    { data: "2026-11-28", hora: "15h às 16h",    tipo: "aovivo",  titulo: "Oficina Ferramentas e Design Thinking" },
    { data: "2026-11-30", hora: "até 19h25",     tipo: "entrega", titulo: "Entrega 1: Matriz CSD e definição do desafio" },
    { data: "2026-11-30", hora: "19h30 às 21h",  tipo: "aovivo",  titulo: "Oficina Validação de Problema" },
    { data: "2026-12-01", hora: "até 19h25",     tipo: "entrega", titulo: "Entrega 2: validação do problema" },
    { data: "2026-12-01", hora: "19h30 às 21h",  tipo: "aovivo",  titulo: "Oficina Modelo de Negócios / MVP" },
    { data: "2026-12-02", hora: "até 19h25",     tipo: "entrega", titulo: "Entrega 3: Modelo de negócio - MVP" },
    { data: "2026-12-02", hora: "19h30 às 21h",  tipo: "aovivo",  titulo: "Oficina Pitch" },
    { data: "2026-12-03", hora: "até 22h",       tipo: "entrega", titulo: "Entrega 4: gravação do pitch, 3 minutos" },
    { data: "2026-12-04", hora: "até 22h",       tipo: "entrega", titulo: "Entrega 5: apresentação da solução, postagem dos arquivos" },
    { data: "2026-12-05", hora: "09h",           tipo: "final",   titulo: "Divulgação das 10 equipes finalistas" },
    { data: "2026-12-05", hora: "09h30",         tipo: "final",   titulo: "Apresentação final dos classificados" },
    { data: "2026-12-05", hora: "após definição dos jurados",       tipo: "final",   titulo: "Resultado e premiação" }
  ],

  /* Quadro 3 */
  entregas: [
    { n: 1, data: "2026-11-30", hora: "19h25", titulo: "Matriz CSD e definição do desafio", atraso: "perde 2 pontos. Não vale depois das 23h59 do mesmo dia" },
    { n: 2, data: "2026-12-01", hora: "19h25", titulo: "Validação do problema", atraso: "perde 2 pontos. Não vale depois das 23h59 do mesmo dia" },
    { n: 3, data: "2026-12-02", hora: "19h25", titulo: "Modelo de negócio - MVP", atraso: "perde 2 pontos. Não vale depois das 23h59 do mesmo dia" },
    { n: 4, data: "2026-12-03", hora: "22h",   titulo: "Gravação do pitch, 3 minutos", atraso: "o item 17 exige cumprir o horário do Quadro 3" },
    { n: 5, data: "2026-12-04", hora: "22h",   titulo: "Apresentação da solução, postagem dos arquivos", atraso: "o item 17 exige cumprir o horário do Quadro 3" }
  ],

  /* Quadro 4: cada critério vale de 0 a 5 */
  criterios: [
    { titulo: "Validação do problema", pergunta: "O problema foi validado pela equipe?" },
    { titulo: "Validação do MVP", pergunta: "Rodaram o MVP e coletaram feedback? As evidências aparecem no pitch." },
    { titulo: "Viabilidade", pergunta: "A solução pode ser desenvolvida?" },
    { titulo: "Impacto da solução / Relevância", pergunta: "A solução muda para melhor a realidade do setor?" },
    { titulo: "Pitch", pergunta: "A apresentação do projeto tem qualidade e clareza?" }
  ]
};
