# CLAUDE.md da UC2: Práticas DevOps em Projetos Web

Vale junto com o `CLAUDE.md` da raiz. Dele vêm o método (dor e solução, destrinchar), o sistema
visual, a escrita dos slides, os prompts e as regras. Este arquivo guarda só o que é da UC2.

## A unidade

| | |
|---|---|
| Carga | 20h · 5 encontros de 4h: 22/10, 26/10, 27/10, 28/10 e 29/10 |
| PTD | situação de aprendizagem "Do Servidor à Entrega Contínua", aprendizagem baseada em problemas, indicador 1: "Utiliza métodos e técnicas DevOps em projetos web, de acordo com a infraestrutura necessária" |
| Conhecimentos | arquitetura cliente-servidor, HTTP, servidores web, servidores em nuvem; cultura DevOps: automação, entrega contínua, controle de versões, monitoramento |
| Avaliação | entrega final do projeto, com formulário de avaliação individual |
| AEO | prints das simulações em plataformas de nuvem e de controle de versões |

O `cronograma/dados.js` marca 27/10 como avaliação. O PTD só fala em entrega final. **Não resolvido
com o docente:** não invente avaliação até ele decidir.

**Só a aula 1 foi aprovada.** O plano das outras quatro foi proposto e o docente não aprovou ainda.
Não monte a aula 2 em diante sem pedido.

## O caso e o exemplo

- O "case de aplicação que precisa ir para produção" do PTD é o **projeto da cartilha de cada aluno**,
  que fechou a UC4 rodando em localhost: React (Vite, 5173), FastAPI (8000) e MySQL (3306).
- O exemplo dos slides continua o **Tarefa Certa**, o projeto do professor (seção 4 do CLAUDE.md da raiz).
- O PTD fala em equipe. Até o docente decidir, os grupos existem só na atividade de abertura da
  aula 1. O projeto continua individual.

## Onde ficam os arquivos

- Slides em `uc2/aula-NN.html`, com `<body data-uc="2" data-aula="N">`.
- Manifesto em `window.UC2`, no `assets/js/aulas.js`. O `slides.js` lê essa lista quando o `<body>`
  tem `data-uc="2"`, põe `UC2 · Aula NN` no rodapé e aponta o índice para `../index.html#uc2`.
- Prompts em `prompts/uc2-aula-NN-*.md`. O `regras` baixa como `REGRAS_UC2_AULAN.md`.
- O índice tem a seção `#uc2` antes da UC4. A aba da barra do topo virou "Slides das aulas" nas três
  páginas de navegação.
- A UC2 não tem ciclos. O rodapé não mostra ciclo.

## Ledger

| Aula | Introduz |
|---|---|
| 1 | cliente e servidor como papel; IP (`ipconfig`), porta, `localhost`/`127.0.0.1`, `0.0.0.0` (`--host` no FastAPI e no Vite); o React roda no navegador de quem abre; DNS (`nslookup`); HTTPS e a 443; aba Rede do DevTools; CDN, balanceador, réplica e monitoramento só como nomes; desenvolvimento e produção; Mermaid (`flowchart LR`, `[ ]`, `-->|texto|`, `[( )]`). **Segundo tempo:** "na minha máquina funciona", o venv isola pouco, a história do contêiner, imagem e contêiner como classe e objeto, contêiner e VM, instalação do WSL 2 e do Docker Desktop, `docker run hello-world`, `docker images`, `docker ps -a`, Killercoda como plano B |

Fora da aula 1, de propósito: `Dockerfile`, `compose`, `-p`, Nginx, `npm run build`, provedor de
nuvem, branches e PR, GitHub Actions, monitoramento de verdade.

## Testado na montagem da aula 1

- `fastapi dev main.py` escuta em `127.0.0.1`: pelo IP da rede, a conexão é recusada. Com
  `--host 0.0.0.0`, o mesmo endereço responde `{"status":"ok"}` (FastAPI 0.159).
- `nslookup www.sc.senac.br` devolveu `191.235.236.33` em 22/10/2026.
- `docker run hello-world` imprime `Hello from Docker!` (Docker 29.8).
- O Mermaid do slide 22 renderiza com o mermaid-cli.
- **Play with Docker foi desativado em 01/03/2026**, apesar de estar no PTD. O plano B é o Killercoda.
- Docker Desktop no Windows (docs.docker.com, lido em 22/10/2026): WSL 2.1.5 ou maior, Windows 10
  22H2 ou 11, 8 GB de RAM, virtualização ligada na BIOS. A instalação por usuário não pede
  administrador, mas **ligar o WSL 2 pela primeira vez pede**. O login no Docker é opcional.
- **Não testado:** se o playground Ubuntu do Killercoda vem com Docker, e se o firewall do
  laboratório deixa o colega acessar a API pelo IP. Os slides 12 e 33 dependem disso.
