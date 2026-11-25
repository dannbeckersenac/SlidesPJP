# CLAUDE.md da UC6: Prototipação Rápida de Aplicações com IA

Vale junto com o `CLAUDE.md` da raiz e com o `uc3/CLAUDE.md`. Da raiz vêm o sistema visual, a escrita
dos slides e o formato dos prompts. Este arquivo guarda só o que é da UC6.

## A unidade

| | |
|---|---|
| Encontros | 16/11 (aula 1), 18/11 (finalização das apresentações do projeto da UC3, sem slides), 23/11 (aula 2), 25/11 (aula 3) e 26/11 (aula 4: simulação das apresentações no auditório e comemoração) |
| Antecipado | o 19/11 foi para 10/11 e usado na aula 2 da UC3 |
| Depois | o Hackathon Jovem Programador, de 28/11 a 05/12 (pasta `hackathon/`) |

O PTD da UC6 não foi anexado. O plano abaixo é do docente.

## O plano: o simulado do Hackathon (decidido em 16/11/2026)

Cada encontro da UC6 repete um dia do Hackathon. A turma trabalha em **dois grupos**, um de cada lado
da sala (times T1 e T2, de 4 a 7 pessoas), e faz as cinco entregas do regulamento.

| Aula | Data | Oficina | Entrega do simulado |
|---|---|---|---|
| 1 | 16/11 | grupos, inscrição no Hackathon (fecha 19/11), boas práticas, escolha do tema, Design Thinking e Matriz CSD | E1 Matriz CSD e definição do desafio, até 19h25 de 18/11 |
| 2 | 23/11 | validação do problema (mais teoria; o grupo não entrevista o outro: vai atrás de pessoas de fora da turma, se der, até 25/11, e o plano B é simular a entrevista com a IA, marcada como simulada) e as primeiras telas com IA | E2 Validação do problema, até 19h25 de 25/11 |
| 3 | 25/11 | MoSCoW (retomado da UC1, aplicado antes do canvas: o MVP é só o Must, no máximo três), Lean Canvas na ordem de 1 a 9, com exemplo preenchido e montado com a IA a partir do briefing, bloco a bloco, com o grupo confirmando cada um, e o MVP com IA (Figma Make ou Lovable), testado pelo outro grupo | E3 Modelo de negócio e MVP, até 19h25 de 26/11 |
| 4 | 26/11 | no auditório: a simulação das apresentações, com o **pitch de 3 minutos de cada aluno**, e a comemoração de fim de ano | E4 Pitch, e E5 Arquivos da solução até 19h25 |

Decisões do docente:

- **O trabalho aqui é em grupo**, ao contrário da UC4 e da UC2. "Grupo", "time" e "equipe" valem na UC6.
- **Não há sorteio.** Os grupos escolhem o tema. Os 18 temas (seis frentes do Senac, três em cada) ficam
  todos na página `hackathon/simulado.html`, lidos de `hackathon/simulado.js`. Os dois grupos não
  repetem tema. Os temas são de treino: o problema real do evento só aparece em 28/11, às 14h.
- **Todo mundo faz o pitch.** No evento a equipe escolhe quem fala; no simulado, cada aluno apresenta
  3 minutos, em 26/11, no auditório. A "final simulada" é só isso, sem banca nem votação.
- **Entregas como no evento:** na tarefa do Teams, com o nome `Time T1 - Entrega E1`, até 19h25 do
  encontro seguinte, vale a primeira postagem. Nas entregas 1 a 3, o retorno mostra os 2 pontos que o
  atraso custaria no evento.
- **Ferramentas de interface:** o Figma Make (protótipo interativo dentro do Figma) e o Lovable (app web com link), ou a IA
  que a turma já usa no código. No plano grátis, o Lovable dá 5 créditos de construção por dia e o Figma Make tem limite
  diário e mensal de créditos de IA: escrever o pedido completo antes de gastar e revezar as contas do grupo.
  O back-end pronto é o Supabase, visto na UC2.
- O 26/11 **não** está marcado como avaliação no manifesto nem no cronograma: o docente ainda não disse
  que é. Não invente avaliação.

O conteúdo de cada entrega (o que pedimos no simulado) está na página do simulado. O regulamento só
dá o nome das entregas: o conteúdo é interpretação do simulado e a página diz isso.

## Onde ficam os arquivos

- Slides em `uc6/aula-NN.html`, com `<body data-uc="6" data-aula="N">`.
- Manifesto em `window.UC6`, no `assets/js/aulas.js`, com `aulas` e `semAula` (o 26/11). O índice tem a
  aba `#uc6`, que abre por padrão depois que a aula 1 da UC6 começa.
- Painel do simulado em `hackathon/simulado.html` e `hackathon/simulado.js`. Mudou um encontro, mude
  também o manifesto e as notas do `cronograma/dados.js`.
- Prompts em `prompts/uc6-aula-NN-*.md`. Seguem o padrão do curso: a IA revisa e pergunta, não faz a
  entrega pelo grupo.

## Escrita

As instruções de passo a passo usam o infinitivo ("Escolher", "Preencher", "Exportar"). O exemplo dos
slides continua sendo o projeto do professor (o escritório do Tarefa Certa), e não um dos 18 temas, para
não puxar a escolha de nenhum grupo.
