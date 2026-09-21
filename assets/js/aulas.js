/* ============================================================
   Manifesto das aulas da UC4.
   ÚNICO lugar onde as datas ficam registradas. Ajuste aqui e
   o índice e a navegação de todas as páginas acompanham.
   As datas são as do cronograma da turma 2026.10.78, em
   cronograma/dados.js. Se mudar lá, mude aqui também.

   São 18 encontros e 15 aulas. Três encontros não têm slides
   da UC4 e estão em ENCONTROS_SEM_AULA, abaixo.
   ============================================================ */

window.AULAS = [
  { n:  1, data: "2026-09-10", ciclo: 1, titulo: "Primeira API com FastAPI", pronto: true  },
  { n:  2, data: "2026-09-14", ciclo: 1, titulo: "Métodos HTTP, status e rotas", pronto: true  },
  { n:  3, data: "2026-09-16", ciclo: 1, titulo: "Validação de dados com Pydantic", pronto: true  },
  { n:  4, data: "2026-09-17", ciclo: 1, titulo: "Organização do código em camadas", pronto: true  },
  { n:  5, data: "2026-09-21", ciclo: 1, titulo: "Integração com o front-end · Entrega do Ciclo 1", pronto: true,  avaliacao: true },
  { n:  6, data: "2026-09-24", ciclo: 2, titulo: "Do SQL à mão ao SQLAlchemy", pronto: false },
  { n:  7, data: "2026-09-28", ciclo: 2, titulo: "CRUD e transações com ORM", pronto: false },
  { n:  8, data: "2026-09-30", ciclo: 2, titulo: "Relacionamentos, consultas e migrations", pronto: false },
  { n:  9, data: "2026-10-01", ciclo: 2, titulo: "Avaliação · Ciclo 2", pronto: false, avaliacao: true },
  { n: 10, data: "2026-10-05", ciclo: 3, titulo: "Regras de negócio, exceções e documentação da API", pronto: false },
  { n: 11, data: "2026-10-07", ciclo: 4, titulo: "Cadastro de usuários e proteção de senhas", pronto: false },
  { n: 12, data: "2026-10-08", ciclo: 4, titulo: "Autenticação e autorização com JWT", pronto: false },
  { n: 13, data: "2026-10-19", ciclo: 4, titulo: "Segurança da aplicação · Avaliação final", pronto: false, avaliacao: true },
  { n: 14, data: "2026-10-20", ciclo: 5, titulo: "Integração com API de IA e README de entrega", pronto: false },
  { n: 15, data: "2026-10-21", ciclo: 5, titulo: "Apresentação individual e retrospectiva", pronto: false }
];

/* encontros da UC4 que contam como aula no diário, mas sem slides:
   o índice mostra na lista do ciclo, sem número e sem link */
window.ENCONTROS_SEM_AULA = [
  { data: "2026-09-09", ciclo: 1, titulo: "Landing page da persona, pendência da UC5" },
  { data: "2026-09-15", ciclo: 1, titulo: "Visita à Senior Sistemas" },
  { data: "2026-09-23", ciclo: 1, titulo: "Avaliação do Ciclo 1, segundo dia", avaliacao: true }
];

window.CICLOS = [
  { n: 1, nome: "O contrato",     aulas: "aulas 1 a 5",   guia: "A tela que eu já fiz precisa de quais dados?" },
  { n: 2, nome: "A persistência", aulas: "aulas 6 a 9",   guia: "Por que meus dados somem quando eu reinicio o servidor?" },
  { n: 3, nome: "As regras",      aulas: "aula 10",       guia: "O que o meu sistema não pode deixar acontecer?" },
  { n: 4, nome: "O acesso",       aulas: "aulas 11 a 13", guia: "Quem pode fazer isso com os dados da minha persona?" },
  { n: 5, nome: "A entrega",      aulas: "aulas 14 e 15", guia: "Você consegue explicar o que a IA escreveu?" }
];

/* ============================================================
   Liberação por data.

   Uma aula só vira link quando as duas coisas valem: os slides
   existem (pronto) e o encontro já começou. O horário está em
   LIBERA_HORA e vale o relógio da máquina de quem abre.

   Isto é combinado de turma, não é tranca. O HTML da aula
   continua público para quem digitar o endereço na mão.

   Docente: abra qualquer página com ?docente=1 uma vez e o
   navegador guarda a liberação geral. ?docente=0 desfaz.
   ============================================================ */

window.LIBERA_HORA = 18;

window.MODO_DOCENTE = (function () {
  var chave = "uc4:docente";
  var pedido = null;
  try {
    pedido = new URLSearchParams(window.location.search).get("docente");
  } catch (erro) { pedido = null; }
  try {
    if (pedido === "1") localStorage.setItem(chave, "1");
    if (pedido === "0") localStorage.removeItem(chave);
    return localStorage.getItem(chave) === "1";
  } catch (erro) {
    /* navegador sem localStorage: vale só enquanto a página estiver aberta */
    return pedido === "1";
  }
})();

/* momento em que a aula abre, no fuso de quem está lendo */
window.aberturaDaAula = function (aula) {
  var p = String(aula.data).split("-").map(Number);
  return new Date(p[0], p[1] - 1, p[2], window.LIBERA_HORA, 0, 0);
};

window.liberada = function (aula) {
  if (!aula || !aula.pronto) return false;
  if (window.MODO_DOCENTE) return true;
  return new Date() >= window.aberturaDaAula(aula);
};

/* "2026-09-09" vira "09/09", que é como a data aparece na tela */
window.dataCurta = function (iso) {
  var p = String(iso).split("-");
  return p[2] + "/" + p[1];
};
