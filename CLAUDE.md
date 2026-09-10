# CLAUDE.md — Slides da UC4: Back-end de Projetos Web

Contexto para qualquer agente que for trabalhar neste repositório.
Leia inteiro antes de criar ou alterar uma aula.

---

## 1. O que é este repositório

O material de aula de uma unidade curricular do Senac Blumenau, publicado como site estático
no GitHub Pages. Cada aula é **uma página HTML** com os slides daquele encontro.

Não é um projeto de software com usuários. É material didático: o "usuário" é o docente
projetando na parede de um laboratório, e a turma acompanhando.

**Sem build, sem framework, sem dependência.** HTML, CSS e JavaScript puros, servidos direto.
Qualquer proposta de adicionar bundler, React, Tailwind, gerador de site estático ou
gerenciador de pacotes deve ser recusada — a simplicidade aqui é requisito, não descuido.
O docente precisa conseguir abrir um arquivo e editar um slide no meio de uma aula.

---

## 2. Contexto do curso

| | |
|---|---|
| Curso | Desenvolvimento Web com IA — Senac Blumenau |
| Turma | 2026.10.78 (noturna, 18h–22h) |
| Unidade | UC4 — Back-end de Projetos Web |
| Carga | 72h · 18 encontros de 4h |
| Docente | Daniel Becker Bortoluzzi |
| Idioma | **Português do Brasil, sempre.** Código, comentários, nomes de variáveis, tudo. |

### De onde a turma vem

Isto define o que pode e o que não pode ser assumido como conhecido:

- **Curso anterior (Python):** variáveis, tipos, condicionais, laços, listas, funções, POO
  (classes, `__init__`, `self`, listas de objetos), MySQL via `mysql.connector`, `.env`,
  `.gitignore`, fluxo Git/GitHub.
- **UC1** metodologias ágeis · **UC2** DevOps e controle de versão · **UC3** desenvolvimento
  apoiado por IA (assistentes de código, revisão, documentação) · **UC5** front-end React.
- **A UC5 veio ANTES da UC4 nesta turma.** O front-end de cada aluno **já existe** e é o
  cliente real da API que ele vai construir aqui. Não trate o React como exercício futuro.

**O Python que a turma não viu.** A lista do curso anterior é o teto. Tudo que fica fora dela
precisa de explicação em slide antes de aparecer em código, mesmo que pareça "só Python". Os casos
que já apareceram: `isinstance`, desempacotamento com `**`, métodos de dicionário como `.get`,
compreensão de lista, anotação `str | None`, herança (`class X(BaseModel)`), `lambda`. Na dúvida,
trate como não visto.

### Enquadramento formal (PTD)

O plano de trabalho docente está aprovado e **não deve ser alterado**. O material tem que caber nele:

- **SA1** — aulas 1 a 12 — indicadores 1 e 2 (camada de acesso a dados com ORM; estruturas
  back-end integradas à camada visual).
- **SA2** — aulas 13 a 18 — indicador 3 (autenticação, protocolos de segurança, privacidade)
  e a habilidade de usar IA para acelerar o desenvolvimento.
- **Avaliações nas aulas 5, 10 e 16.** Não invente avaliação em outra aula.

---

## 3. Método pedagógico — a regra que mais importa

O curso é organizado como **dor → solução**. Toda aula abre demonstrando um problema concreto
e só então apresenta a ferramenta que o resolve.

**Nunca apresente uma ferramenta antes de a turma ter sentido a dor que ela cura.**

Exemplos de como isso já está montado, para você seguir o mesmo padrão:

| Aula | A dor demonstrada primeiro | Só então entra |
|---|---|---|
| 1 | o `cardapio.js` do React com os preços chumbados | a API |
| 3 | a rota com `dados: dict` aceita quantidade negativa; validar no `if` cansa e ainda deixa um 500 | Pydantic |
| 4 | uma função de rota com 80 linhas fazendo tudo | as camadas |
| 6 | derrubar o `uvicorn` ao vivo e ver os dados sumirem | o banco e o ORM |
| 13 | um `DELETE` disparado do celular do professor derruba os dados | autenticação |

Corolários:

- **Um conceito novo por sessão**, ancorado em algo já familiar. Não empilhe padrões desconhecidos.
- **Não ensine à frente do ledger** (seção 6). Escrever slide da aula 4 usando SQLAlchemy é erro,
  ainda que o código fique melhor.
- Explicação técnica antes do problema é o defeito mais comum. Se um slide começa com
  "o Pydantic é uma biblioteca de validação", ele está errado.

### Destrinchar: o padrão desde a aula 2

As primeiras versões das aulas tinham de 12 a 14 slides, e o docente as achou atropeladas: a
turma não acompanha quando um slide assume o que ninguém explicou. As aulas 2 e 3 foram refeitas
com mais slides e passos menores, e **esse é o padrão da aula 4 em diante**. Na prática:

- **Um slide, uma ideia nova.** Se o slide apresenta duas coisas, são dois slides.
- **O Python que falta vem antes, no slide dele.** Antes do código que usa `isinstance`, um slide
  mostra o que é `isinstance` e a turma testa no terminal. Eyebrow: `Python que faltava`.
- **Versão simples antes do atalho.** Mostre primeiro o jeito explícito que funciona (montar o
  dicionário campo a campo), depois o atalho que a IA costuma escrever (`**pedido.model_dump()`),
  explicando cada peça. Diga que as duas funcionam e que vale entregar a que o aluno sabe explicar.
- **Onde paramos.** Depois da dor, mostre o código ou a estrutura que a turma tem hoje e aponte por
  que ele não resolve. É a ponte entre a aula anterior e a de hoje.
- **Leitura linha a linha.** Código com construção nova ganha um slide em que cada linha tem um
  comentário explicando o que faz. Comentário no `<pre>` não custa altura.
- **Analogia quando o conceito é abstrato**, e a mesma analogia do começo ao fim da aula. A aula 2
  usa o requerimento de repartição para requisição, método, gaveta de arquivo e status.
- **Contexto histórico curto** quando explica por que a ferramenta é assim. A aula 2 conta o SOAP
  antes do REST, com as diferenças e onde o SOAP ainda existe.
- **Todo passo que depende de uma ação no front ou no terminal ganha o seu slide.** Se o exercício
  pede um `fetch` no React, algum slide mostra o `fetch`.
- **Rode o código antes de pôr no slide.** Monte um backend descartável na pasta temporária e teste
  cada trecho. Foi assim que apareceram um `async def` fora do ledger e um `response_model` que
  exigia um campo que a rota nunca preenchia.

---

## 4. O sistema de exemplo

**Todos os slides usam o mesmo sistema: um cardápio digital que emite pedidos.**
Entidades: item do cardápio, pedido, item do pedido. Isso não muda de aula para aula —
a familiaridade com o domínio é o que libera atenção para o conceito novo.

### De quem é o cardápio

O cardápio é **o projeto de demonstração do docente**. Nenhum aluno construiu um cardápio digital,
e slide que diga "o cardápio que vocês fizeram" está errado. O que o aluno tem é a tela da UC5 da
persona que ele sorteou.

O padrão certo, em qualquer slide: mostre o cardápio como exemplo do professor, rotule o bloco de
código como tal quando houver risco de confusão (`exemplo do professor · caminho/do/arquivo`) e
mande o aluno achar o equivalente no projeto dele. "A sua tela tem um arquivo assim" funciona;
"o cardápio que vocês construíram" não.

### De quem é o trabalho

A **persona é sorteada individualmente** na aula 1: cada aluno recebe a sua, identifica a dor dela
e constrói front mais back para resolvê-la. **O trabalho é individual da aula 1 à 18**: cada aluno
tem o seu repositório e entrega sozinho. Não escreva "em equipe", "repositório da equipe" nem
"outra equipe" em slide algum. Os slides mostram o cardápio; o exercício manda aplicar na persona.

Nunca troque o domínio dos slides por outro exemplo, nem invente nomes de personas: elas são
sorteadas em sala.

---

## 5. Stack e decisões já tomadas

| Camada | Escolha | Não sugerir |
|---|---|---|
| Framework | **FastAPI** | Flask, Django, Node |
| Validação | **Pydantic v2** | Marshmallow |
| ORM | **SQLAlchemy** | Django ORM, SQL cru depois da aula 7 |
| Banco | **MySQL** | trocar sem motivo |
| Auth | **JWT** (`OAuth2PasswordBearer` + hash de senha) | sessão em cookie |
| Front | **React** (o projeto da UC5) | reescrever o front |

**Arquitetura do repositório de cada aluno** (não é este repositório, é o que os alunos entregam):

```
repo-do-aluno/
├── backend/     API FastAPI, ambiente virtual próprio
└── frontend/    o projeto React da UC5, movido sem alteração
```

**Estrutura interna do backend, ensinada a partir da aula 4:** `router` → `service` → `repository`.
A rota não acessa banco; o service não sabe que existe SQL.

**A estrutura de pastas do backend, aula a aula.** Nomes em português. Toda aula que cria pasta ou
arquivo mostra a árvore inteira antes da mão na massa e oferece o prompt de calibragem (seção 11).

| Até a aula | `backend/` tem |
|---|---|
| 1 | `venv/`, `main.py` com a rota `/health` |
| 2 | `rotas/<recurso>.py` no plural, com `APIRouter` e a lista em memória; o `main.py` só liga os routers |
| 3 | `esquemas/<recurso>.py` no singular, com os esquemas Pydantic de entrada e de saída |
| 4 em diante | definir ao criar a aula 4, no mesmo padrão (os `regras` da aula 3 já proíbem `servicos/` e `repositorios/`, que são os nomes naturais) |

**Esquema e modelo não são sinônimos aqui.** Classe Pydantic é **esquema** e mora em `esquemas/`.
A palavra **modelo** fica para a classe do SQLAlchemy, na aula 7. Não misture nos slides.

---

## 6. Ledger — o que a turma sabe em cada ponto

Ao escrever a aula N, **use apenas o que está acumulado até N-1**, mais o que a própria aula N
introduz. Consulte antes de escrever qualquer linha de código num slide.

| Aula | Introduz |
|---|---|
| 1 | `venv`, instalar FastAPI, `@app.get`, função de rota, dict vira JSON, `/docs`, `fastapi dev` |
| 2 | anatomia de requisição e resposta HTTP, SOAP e REST (história), métodos HTTP, status codes e suas famílias, parâmetro de caminho, parâmetro de consulta, filtro com laço e depois com compreensão de lista, `HTTPException` 404, `APIRouter`, pasta `rotas/`, tipo no parâmetro |
| 3 | corpo recebido como `dict` (só como contraste), `isinstance`, Pydantic `BaseModel`, `Field` e suas restrições, erro 422, esquema de entrada ≠ de saída, pasta `esquemas/`, `model_dump()` e `**`, `response_model`, `status_code=201`, primeiro `fetch` no React, CORS |
| 4 | separação router/service/repository, estrutura de pacotes, `.env` e configuração, `Depends` |
| 5 | consumo completo pelo React, estados de carregamento e erro *(avaliação: entrega parcial)* |
| 6 | modelagem, DER, conexão MySQL, SQL escrito à mão |
| 7 | SQLAlchemy: `engine`, `session`, modelos declarativos, tipos e restrições |
| 8 | sessão por requisição via `Depends`, CRUD completo, transação, `commit`/`rollback` |
| 9 | chave estrangeira, `relationship`, junção, filtro, ordenação, paginação, migrations |
| 10 | — *(avaliação: indicadores 1 e 2)* |
| 11 | regras de domínio na camada de serviço, exceções de domínio → HTTP |
| 12 | consolidação, README, documentação do contrato |
| 13 | entidade usuário, hash de senha, segredo fora do código |
| 14 | JWT, `OAuth2PasswordBearer`, `Depends(get_current_user)`, autorização por dono do recurso |
| 15 | chamada a API de LLM, higienização de input, timeout, falha, custo |
| 16 | OWASP aplicado, CORS restrito, dado sensível em log *(avaliação final: indicador 3)* |
| 17 | README de entrega, empacotamento com Docker |
| 18 | arguição individual, retrospectiva |

**Armadilhas frequentes:**
- Usar `async def` antes da aula 15 sem necessidade. Até lá, `def` normal — o FastAPI resolve.
- Usar ORM ou banco antes da aula 6. Antes disso é **lista em memória**, e isso é proposital.
- Proteger rota antes da aula 14.
- Usar `allow_origins=["*"]` em qualquer slide. Isso é apresentado explicitamente como erro na aula 3.

---

## 7. Os cinco ciclos

Agrupamento pedagógico, alinhado com as avaliações do PTD. Cada ciclo fecha com entrega.

| Ciclo | Aulas | Nome | Pergunta que responde |
|---|---|---|---|
| 1 | 1–5 | O contrato | A tela que eu já fiz precisa de quais dados? |
| 2 | 6–10 | A persistência | Por que meus dados somem quando eu reinicio o servidor? |
| 3 | 11–12 | As regras | O que o meu sistema não pode deixar acontecer? |
| 4 | 13–16 | O acesso | Quem pode fazer isso com os dados da minha persona? |
| 5 | 17–18 | A entrega | Você consegue explicar o que a IA escreveu? |

---

## 8. Política de IA na turma

A turma desenvolve com IA assistida desde a aula 1, e isso é declarado em slide próprio na aula 1.
O combinado, que aparece nos exercícios e nas avaliações:

> **A IA pode escrever. Você tem que explicar.**

Isso tem consequência no material que você produz: **todo exercício precisa ser verificável por
arguição**, não só por código entregue. Prefira enunciados que peçam decisão justificada
("por que este status e não outro") a enunciados que peçam apenas produção de código, porque
esses últimos a IA resolve sozinha e não medem nada.

Os prompts que a turma usa saem daqui, prontos e com limites escritos. Como montá-los está na seção 11.

---

## 9. Estrutura dos arquivos

```
index.html              índice, montado em JS a partir do manifesto
.nojekyll               necessário para o GitHub Pages
assets/css/slides.css   o sistema visual inteiro
assets/js/aulas.js      MANIFESTO — datas, títulos, ciclos das 18 aulas
assets/js/slides.js     navegação por teclado, escala, barra inferior, rodapé dos slides
aulas/aula-NN.html      uma página por aula
prompts/aula-NN-*.md    prompts e regras que a turma copia ou baixa do slide
cronograma/             o calendário do ano inteiro, das seis UCs, página à parte
```

**As datas da UC4 vivem só em `assets/js/aulas.js`**, em formato ISO (`"2026-09-09"`). Índice e
navegação leem dali e formatam para `09/09` na tela. Nunca escreva data dentro de um slide.

O calendário do ano tem a sua própria fonte, `cronograma/dados.js`, que cobre as seis unidades.
As duas listas precisam bater: mexeu numa data da UC4 num arquivo, mexa no outro.

Para liberar uma aula no índice: crie `aulas/aula-NN.html` e marque `pronto: true` no manifesto.
A partir daí ela ainda espera as 18h do dia do encontro, pela regra de liberação no fim do
`aulas.js`. Para ver tudo antes da hora, abra qualquer página com `?docente=1` uma vez; `?docente=0`
desfaz. A liberação é combinado de turma, não é tranca: quem digitar o endereço da aula abre assim
mesmo.

O índice não conta o que ainda falta montar. Toda aula que não está no ar aparece como `a liberar`,
esteja o arquivo pronto ou não, e só a do dia mostra `abre às 18h`. É de propósito: a turma vê um
material inteiro sendo liberado no ritmo das aulas, não uma obra em andamento. Isso cobra que
`pronto: true` esteja marcado antes do dia do encontro, senão o índice promete uma aula às 18h e
não entrega.

Publicação: GitHub Pages, branch `main`, pasta raiz. Não há etapa de build.

---

## 10. Sistema visual

Portado do `template_aulas.pptx` do docente. **Não invente cores nem fontes.**

| Papel | Valor |
|---|---|
| Fundo escuro | `#0F172A` |
| Azul destaque | `#2563EB` |
| Cinza texto | `#334155` |
| Cinza claro | `#E2E8F0` |
| Roxo exercício | `#4F46E5` |
| Vermelho alerta | `#DC2626` |

Tipografia: **Calibri** (texto) e **Consolas** (código), com Carlito e JetBrains Mono do
Google Fonts como equivalentes para quem não está no Windows.

### Escala tipográfica

O material é projetado num laboratório e precisa ser legível **do fundo da sala**. A escala foi
calibrada para isso e não deve encolher: se algo não cabe, o problema é o excesso de conteúdo no
slide, nunca o tamanho da fonte.

| Papel | Tamanho |
|---|---|
| `h1` título de abertura | 66px |
| `h2` título de slide | 46px |
| `.intro`, `.destaque` | 27px |
| `.alerta`, `.tarefa`, parágrafo | 26px |
| `.recap`, `table`, `.passos li`, `.proximo` | 25 a 28px |
| `.dica`, `.passos.curta li` | 23 a 24px |
| `.codigo pre` | 23px (`.compacto` 21px, dentro de `.comparacao` 19.5px) |
| `.eyebrow`, `.arquivo`, rodapé | 15 a 18px |

**Nunca reduza uma fonte para fazer conteúdo caber.** As saídas legítimas, nesta ordem: cortar texto,
encurtar o bloco de código, trocar por um bloco mais compacto (`.comparacao` no lugar de dois blocos
empilhados) ou dividir em dois slides.

### Anatomia de uma aula

```html
<body data-aula="4">        <!-- número da aula, usado pela barra -->
<div class="palco">
  <section class="slide escuro"> ... </section>
  <section class="slide"> ... </section>
</div>
<nav class="barra" id="barra"></nav>
<script src="../assets/js/aulas.js"></script>
<script src="../assets/js/slides.js"></script>
```

Cada slide tem `<div class="corpo">` com o conteúdo e um `<div class="rodape">` no fim.

**O rodapé é gerado pelo `slides.js`, não escrito à mão.** A capa (o primeiro `.slide` do arquivo)
é a única exceção: ela mantém as duas `<span>` do HTML, com o ciclo e a identificação da turma.
Todos os outros slides levam `<div class="rodape"></div>` vazio, e o JS preenche com a paginação
à esquerda (`3/12`, contando a capa) e `Aula NN · Ciclo N` à direita. O número do ciclo vem do
manifesto em `aulas.js`, encontrado pelo `data-aula` do `<body>`.

Duas consequências práticas: acrescentar ou remover um slide não exige mexer em rodapé nenhum, e
rodapé com texto dentro (fora o da capa) é erro, porque o JS sobrescreve ao carregar a página.

### Variantes de slide

| Classe | Quando usar |
|---|---|
| `slide` | padrão, fundo claro |
| `slide escuro` | abertura, recapitulação, momentos de ênfase |
| `slide exercicio` | roxo, a atividade prática |

### Blocos disponíveis

`.eyebrow` rótulo acima do título · `.intro` parágrafo de abertura · `.destaque` ideia central (azul) ·
`.alerta` aviso (vermelho) · `.dica` nota no rodapé do slide · `.fluxo` + `.passo` (use `.enfase` no
último) · `.cartoes.n2/.n3/.n4` + `.cartao` (com `.icone`, `.t`, `.d`) · `table` de comparação ·
`.codigo` + `.arquivo` + `<pre>` · `.comparacao` + `.lado.ruim` / `.lado.bom` (sem os modificadores,
`.lado` sozinho dá uma comparação **neutra** de duas colunas, útil para contrastes que não são
certo/errado) · `.tarefas` + `.tarefa` ·
`.recap` + `.proximo` · `.acoes` + `.btn` botões de copiar prompt e de baixar arquivo (seção 11) ·
**`<ol class="passos">`** lista numerada de passos, o bloco padrão de todo slide
de mão na massa (funciona em slide claro, escuro e de exercício; variante `.passos.curta` para texto menor).

Destaque de sintaxe é manual, com `<span>`: `kw` palavra-chave · `str` texto · `com` comentário ·
`fn` função e decorador · `num` número.

**Todo bloco de código tem botão de copiar.** O `slides.js` cria um botão `copiar` no canto superior
direito de cada `.codigo` e copia só o texto do `<pre>`, sem o rótulo do `.arquivo`. Não escreva esse
botão no HTML: basta o bloco existir. Duas consequências: o que está no `<pre>` precisa funcionar
colado como está (nada de `...` no meio de código que o aluno vai rodar), e o fim da primeira linha
do bloco fica sob o botão quando não há `.arquivo`, então linha longa ali pede um `.arquivo` em cima.
Clique no botão não troca de slide, e ele some na impressão.

### Ritmo de uma aula

Aula de 4h, turma noturna. **Toda aula termina em exercício** — a atenção não sustenta
quatro horas de exposição. O formato das aulas 2 e 3, que é o padrão daqui em diante (seção 3,
"Destrinchar"):

1. Slide de título (escuro)
2. A dor, demonstrável ao vivo
3. Onde paramos: o código ou a estrutura que a turma tem hoje, e por que ele não resolve a dor
4. O Python ou o conceito de base que falta, um slide para cada, antes de aparecer em código
5. O conceito novo, em vários slides: analogia, história quando ajudar, leitura linha a linha,
   tabela de referência
6. A árvore de pastas do backend, quando a aula cria pasta ou arquivo, seguida do slide de
   calibragem com o botão do `aula-NN-estrutura.md`
7. Cinco ou seis slides de mão na massa, com eyebrow `Mão na massa · passo N de M`, código real e curto
8. Exercício (roxo), com 4 tarefas numeradas e uma entrega concreta no repositório
9. Recapitulação (escuro), com 5 pontos e um gancho para a próxima aula

Entre 18 e 22 slides. Os slides de conceito passam rápido na fala; o que não pode é faltar o
degrau. Blocos de código curtos: se não cabe confortavelmente na tela projetada, está grande demais.

**Orçamento de altura.** O `.corpo` de um slide tem cerca de **620px** úteis. O `.eyebrow` mais o `h2`
já comem ~110px, então sobram ~510px para o conteúdo. Custos aproximados, para você estimar antes de
escrever:

| Bloco | Altura |
|---|---|
| `.codigo` | ~100px de moldura mais ~34px por linha (`.compacto` ~31px, dentro de `.comparacao` ~29px) |
| `.passos li` | ~46px por item de uma linha, mais ~33px por linha que quebrar |
| `.destaque`, `.alerta` | ~92px com uma linha, ~130px com duas |
| `.dica` | ~73px com uma linha, ~110px com duas |
| `.intro` | ~61px por linha |
| `.cartoes` | ~277px · `table` de 5 linhas ~355px · `.tarefas` de 4 ~368px |
| `.acoes` | ~56px com os botões em uma linha |

Conferir de olho não funciona: o conteúdo transborda em silêncio porque os filhos do `.corpo` são
itens flex e encolhem em vez de estourar. Renderize e meça, comparando o fim do último bloco com o
topo do `.rodape`, com `flex-shrink: 0` forçado nos filhos. Mire em pelo menos 25px de folga.

---

## 11. Prompts e regras para a IA

A turma trabalha com IA desde a aula 1, e sem limite escrito a IA resolve a aula 1 com banco de
dados. Por isso cada aula entrega dois tipos de arquivo em `prompts/`, que o aluno pega direto do
slide, por um botão.

| Arquivo | O que é | Botão no slide |
|---|---|---|
| `prompts/aula-NN-regras.md` | O que a IA pode e o que ela não pode usar até aquela aula. | **baixar** |
| `prompts/aula-NN-<assunto>.md` | Um prompt pronto para colar no assistente. | **copiar** |

O arquivo baixa com o nome da aula, `REGRAS_AULA1.md`, senão a pasta de downloads do aluno fica com
três arquivos chamados `REGRAS.md`. No repositório dele existe um só, `REGRAS.md`, gravado por cima
a cada aula. Quem resolve isso é o atributo `download` do link.

O `REGRAS.md` é do curso e vem pronto. Ele não se confunde com o `CONTEXT.md`, que é do aluno e
descreve o projeto dele: essa distinção é ensinada na aula 1.

### Como escrever um arquivo de regras

O `regras` é cumulativo e espelha o ledger da seção 6. São sempre as mesmas cinco partes:

1. **O projeto.** Pastas, a árvore do `backend/` até aquela aula (seção 5), idioma, persona.
2. **O que já foi visto, e pode usar.** Só o acumulado até aquela aula.
3. **O que ainda não foi visto, e não deve aparecer.** Tudo que está no ledger depois dela.
4. **Como escrever o código.** Todo código gerado vem comentado em português, com um comentário
   curto acima de cada rota, função ou bloco dizendo o que faz e por quê. O comentário explica a
   intenção sem repetir a linha, explica o que é novo para a turma na primeira vez que aparece e
   fica no código entregue. Depois do código, a IA resume os arquivos criados ou alterados e diz
   como testar. Esta parte é igual em todas as aulas: copie da aula anterior.
5. **Como responder.** Uma coisa por vez, avisar antes de usar o que está na lista de cima,
   justificar em uma linha.

A parte 4 existe por causa da seção 8: o aluno estuda para a arguição pelos comentários do código
que a IA escreveu. Código sem comentário é código que ele entrega sem saber explicar.

Ao criar a aula N, crie o `prompts/aula-NN-regras.md` junto. Aula sem regras é aula em que a IA
vai escrever a aula seguinte no lugar do aluno.

### Como escrever um prompt

**Prompt não resolve o exercício.** Ele produz rascunho para o aluno revisar, ou interroga o que o
aluno já escreveu. Isso vem da política da seção 8: se a IA entrega pronto, a arguição não tem o
que medir.

Padrões que funcionam, e já estão no repositório:

- **Rascunho para revisar** (`aula-01-contrato.md`): a IA lê o front e lista o que a tela exibe,
  marcando com `?` tudo que inferiu. O trabalho do aluno é conferir e apagar.
- **Revisor que não escreve** (`aula-02-rotas.md`): a IA aponta arquivo e linha, e devolve três
  perguntas de arguição.
- **Adversário** (`aula-03-modelos.md`): a IA tenta furar a validação e lista os JSON que passam.
- **Calibrador de estrutura** (`aula-03-estrutura.md`): a IA compara o `backend/` do aluno com a
  árvore da aula, lista as diferenças e os movimentos, **para e espera** o aluno responder
  `pode seguir`, e só então move arquivos e ajusta imports, sem tocar em lógica. Toda aula que cria
  pasta ou arquivo ganha o seu `aula-NN-estrutura.md`, com a árvore acumulada até ela (seção 5) e
  a lista das pastas que ainda não podem existir. O botão fica no slide de calibragem, logo antes
  da mão na massa.

Todo prompt fecha com uma seção de limites obrigatórios, coerente com o ledger.

O arquivo tem duas partes, separadas por uma linha de três hifens. Antes dela fica a bula: título,
onde colar, o que esperar de volta. Depois dela fica o prompt, e é só essa parte que o botão copia.
Escreva o corpo já como texto para colar, sem título de seção nem instrução dirigida ao professor.

### O botão no slide

```html
<div class="acoes">
  <button class="btn" data-copiar="../prompts/aula-01-contrato.md">copiar o prompt do CONTRATO.md</button>
  <a class="btn" href="../prompts/aula-01-regras.md" download="REGRAS_AULA1.md">baixar o REGRAS_AULA1.md</a>
</div>
```

O `slides.js` cuida do resto: busca o texto do arquivo no carregamento da página, descarta a bula,
copia no clique e troca o rótulo para `copiado` por dois segundos. Clique dentro de `.acoes` não avança o slide.
Aberto por `file://` o navegador bloqueia a busca, e aí o botão abre o arquivo numa aba. Projetando
pelo GitHub Pages, que é o caso normal, a cópia funciona.

O arquivo `.md` é a única fonte da verdade. O slide mostra no máximo um resumo dele, nunca o texto
inteiro repetido à mão.

---

## 12. Como escrever os slides

O conteúdo pode estar certo e o slide continuar ruim. Esta seção é sobre a escrita.

### Travessão: praticamente nunca

O travessão (`—`) é a marca registrada de texto gerado por máquina. A turma percebe, e o material
perde autoridade na hora. **O teto é um travessão por aula, e o ideal é zero.**

No lugar dele, quase sempre cabe uma destas quatro coisas:

| Em vez de | Escreva |
|---|---|
| `A lista está em memória — ainda é mentira.` | `A lista está em memória. Ainda é mentira.` |
| `O erro diz qual campo — e por quê.` | `O erro diz qual campo, e por quê.` |
| `Vale uma regra — e ela vale nas três avaliações.` | `Vale uma regra, e ela vale nas três avaliações.` |
| `O React continua igual — só muda de onde ele busca.` | `O React continua igual. Só muda de onde ele busca.` |

Ponto final é a melhor troca na maioria dos casos: duas frases curtas leem melhor projetadas do que
uma frase longa costurada. Vírgula serve para aposto curto, dois-pontos para o que explica o que veio
antes, parênteses para o que é mesmo secundário.

Isso vale para `—` e `–`, inclusive em intervalo numérico: escreva `aulas 1 a 5`, não `aulas 1–5`.
Hífen de palavra composta segue normal, e o `·` do eyebrow e do rodapé é separador visual, não
travessão: pode ficar.

### Tom

É um professor falando com a turma às 19h de um dia de semana. Não é artigo de blog, nem documentação.

- **Frase curta.** Se ela tem mais de duas vírgulas, quebre em duas.
- **Voz ativa e segunda pessoa.** "Abra o arquivo", "repare no tipo", "você vai ver". Não "deve-se observar".
- **Uma ideia por frase.** Slide projetado é lido de relance, não estudado.
- Humor seco cabe. Entusiasmo de propaganda não. Ninguém precisa ser avisado de que o assunto é útil.
- Escreva como quem já viu a turma errar isso antes, porque é disso que o material trata.

### Padrões que denunciam IA

Nenhum destes entra em slide:

- Abertura de contexto genérico. "No cenário atual do desenvolvimento web", "cada vez mais", "hoje em dia".
- Antítese repetida. Uma construção "não é X, é Y" por aula já é bastante; três viram tique.
- Tríade de adjetivos. "Rápido, seguro e escalável" não diz nada.
- Muleta de transição. "Vale lembrar", "é importante notar", "em resumo", "em suma", "por fim", "além disso".
- Adjetivo empilhado antes do substantivo. "O poderoso e robusto framework" é só "o framework".
- Negrito espalhado. No máximo dois trechos em negrito por parágrafo, e nenhum em frase curta.
- Emoji. Em nenhum slide, nenhuma exceção.
- Reticências decorativas e aspas de ironia.

Um teste que funciona: leia o slide em voz alta. Se você não falaria aquilo na frente da turma, reescreva.

### Passo a passo é obrigatório

Todo slide de mão na massa é uma receita que a turma consegue executar sozinha, sem o professor
completando o que falta na fala. Se o slide mostra um bloco de código e não diz o que fazer com ele,
está incompleto.

O bloco padrão é `<ol class="passos">`, com o código logo antes ou logo depois. Regras:

1. **De três a cinco passos.** Menos que isso não precisava de lista; mais que isso é slide demais.
2. **Cada passo diz onde.** O arquivo ou o terminal, sempre nomeado.
3. **Um passo, uma ação.** Se o passo tem um "e" no meio ligando dois comandos, são dois passos.
4. **O último passo é verificável.** O que aparece na tela se deu certo, com o texto ou a URL exata.
   É o que permite a turma saber que pode seguir em frente sem perguntar.

Também vale fora do código: conceito com etapa, decisão com critério e checklist de conferência
ficam melhores como passos numerados do que como parágrafo.

---

## 13. Ao trabalhar aqui

- Verifique o ledger da seção 6 antes de escrever código em slide.
- Escreva a dor antes da solução.
- Destrinche (seção 3): um slide por ideia, o Python que falta antes do código que o usa, versão
  simples antes do atalho. Entre 18 e 22 slides. Se a aula saiu com 14, falta degrau.
- Teste todo trecho de código dos slides num backend descartável antes de dar a aula por pronta.
- Aula que cria pasta ou arquivo mostra a árvore do `backend/` e ganha o `prompts/aula-NN-estrutura.md`.
- Use o cardápio digital como exemplo, sempre como projeto do professor; deixe a persona para o exercício.
- Nunca atribua o cardápio à turma, e nunca fale em equipe: o trabalho é individual.
- Todo slide de mão na massa leva `<ol class="passos">`. Código sem passo a passo é slide incompleto.
- Antes de dar a aula por pronta, rode `grep -cE '—|–' aulas/aula-NN.html`. O resultado aceitável é `0`.
- Meça a altura de todo slide que você criar ou alterar (seção 10). Slide que transborda não avisa.
- Releia procurando os padrões da seção 12 antes de entregar. Eles entram sozinhos.
- Rodapé de slide fica vazio no HTML, menos o da capa. Quem preenche é o `slides.js`.
- Crie o `prompts/aula-NN-regras.md` junto com a aula, com as cinco partes, e ligue o botão no slide de exercício (seção 11).
- Não escreva botão de copiar em bloco de código: o `slides.js` põe um em todo `.codigo`. Escreva o `<pre>` de modo que ele funcione colado.
- Depois de criar uma aula, marque `pronto: true` no manifesto.
- Não altere o PTD, as datas de avaliação nem a estrutura dos cinco ciclos sem o docente pedir.
- Ao renderizar para conferir, o slide tem 1280×720 e é escalado por JS. Confira num viewport amplo,
  e lembre que `Ctrl+P` precisa continuar gerando um slide por página.
