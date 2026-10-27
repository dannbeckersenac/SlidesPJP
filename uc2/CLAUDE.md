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

## O plano das aulas 2 a 5, definido pelo docente em 24/10/2026

O docente tem autorização da coordenação para sair do roteiro do PTD. O plano é dele:

| Aula | Data | Conteúdo |
|---|---|---|
| 2 | 26/10 | Tela e API respondendo **na mesma porta**: build do React, endereço da API fora do código, servidor web com proxy do `/api`. Tudo local. |
| 3 | 27/10 | Direto ao ponto: a IA gera os arquivos do Docker para subir tudo com um comando, banco incluso, na mesma máquina, e o aluno revisa. Depois, IaaS: conta grátis na AWS, uma EC2, SSH, o projeto subindo lá, e as diferenças entre o Windows do laboratório e o Linux da VM. O docente pode mostrar ao vivo a configuração de um domínio. |
| 4 | 28/10 | O banco vai para o Supabase e o projeto vai para a Vercel, no plano gratuito, com um subdomínio para cada aluno. A EC2 fica como demonstração do professor. |
| 5 | 29/10 | No máximo 1h de conteúdo novo: `docker logs` e como perceber que algo caiu. O segundo tempo inteiro é das apresentações. |

Confirmado pelo docente em 27/10: a publicação na Vercel da aula 4 vale para todos os alunos.

Decidido em 24/10: o servidor web é o **Caddy**, com um slide comparando com o Nginx; o HTTPS vale
para **todos os alunos**, cada um com um subdomínio criado pelo docente.

**Em aberto para a aula 3:** a conta da AWS. Nem todo aluno pode abrir conta própria: o cadastro pede
cartão, e o contrato da AWS exige quem possa contratar. Precisa de plano B (conta do docente com um
usuário por aluno, ou AWS Academy). O Supabase da aula 4 é PostgreSQL: muda o driver e a URL do banco, e a EC2
precisa do endereço do Session pooler, porque a conexão direta grátis é IPv6.

## O caso e o exemplo

- O "case de aplicação que precisa ir para produção" do PTD é o **projeto da cartilha de cada aluno**,
  que fechou a UC4 rodando em localhost: React (Vite, 5173), FastAPI (8000) e MySQL (3306).
- O exemplo dos slides continua o **Tarefa Certa**, o projeto do professor (seção 4 do CLAUDE.md da raiz).
- O PTD fala em equipe, mas o docente definiu trabalho individual na aula 1, inclusive na abertura.
  Cada aluno faz o próprio desenho, testa no próprio computador e entrega no próprio repositório.

## Onde ficam os arquivos

- Slides em `uc2/aula-NN.html`, com `<body data-uc="2" data-aula="N">`.
- Manifesto em `window.UC2`, no `assets/js/aulas.js`. O `slides.js` lê essa lista quando o `<body>`
  tem `data-uc="2"`, põe `UC2 · Aula NN` no rodapé e aponta o índice para `../index.html#uc2`.
- Prompts em `prompts/uc2-aula-NN-*.md`. O `regras` baixa como `REGRAS_UC2_AULAN.md`.
- O índice tem uma aba por unidade, UC2 e UC4, cada uma com a capa (botão da aula e números) e a
  lista dela. A aba aberta fica no endereço, `index.html#uc2` ou `#uc4`; sem nada no endereço, abre a
  UC2 depois que a aula 1 dela começou. Os painéis se chamam `painel-uc2` e `painel-uc4`, e não `uc2`,
  para o endereço não fazer o navegador rolar até eles. A aba da barra do topo virou "Slides das
  aulas" nas três páginas de navegação.
- A UC2 não tem ciclos. O rodapé não mostra ciclo.

## Ledger

| Aula | Introduz |
|---|---|
| 1 | cliente e servidor como papel; IP (`ipconfig`), porta, `localhost`/`127.0.0.1`, `0.0.0.0` (`--host` no FastAPI e no Vite); o React roda no navegador de quem abre; DNS (`nslookup`); HTTPS e a 443; aba Rede do DevTools; CDN, balanceador, réplica e monitoramento só como nomes; desenvolvimento e produção; Mermaid (`flowchart LR`, `[ ]`, `-->|texto|`, `[( )]`). **Segundo tempo:** "na minha máquina funciona", o venv isola pouco, a história do contêiner, imagem e contêiner como classe e objeto, contêiner e VM, instalação do WSL 2 e do Docker Desktop, `docker run hello-world`, `docker images`, `docker ps -a`, Killercoda como plano B |

| 2 | a dor do `npm run dev` em produção; `npm run build` e o `dist/` (nome com hash); o `dist/index.html` aberto do disco fica em branco; o endereço da API copiado para dentro do build; variáveis do Vite (`.env.development`, `.env.production`, `VITE_`, `import.meta.env`) e a diferença para o `.env` do backend; `src/api.js` com `URL_DA_API`; servidor web (entregar arquivos, proxy reverso, HTTPS); Nginx e Caddy comparados, com o `nginx.conf` só para ler; o `Caddyfile` com `:80`, `handle_path`, `reverse_proxy`, `handle`, `root`, `file_server`; `host.docker.internal`; `docker run --rm -p 8080:80 -v ... caddy:2`; mesma origem e o CORS; o aviso do Caddy sem domínio |

Fora até a aula 2, de propósito: `Dockerfile`, `compose`, domínio e HTTPS no `Caddyfile`, provedor
de nuvem, branches e PR, GitHub Actions, monitoramento de verdade.

## Testado na montagem da aula 1

- `fastapi dev main.py` escuta em `127.0.0.1`: pelo IP da rede, a conexão é recusada. Com
  `--host 0.0.0.0`, o mesmo endereço responde `{"status":"ok"}` (FastAPI 0.159).
- `nslookup www.sc.senac.br` devolveu `191.235.236.33` em 22/10/2026.
- `docker run hello-world` imprime `Hello from Docker!` (Docker 29.8).
- O bloco do slide 22 começa em `flowchart LR`, pronto para o Mermaid Live. Os marcadores
  de Markdown só entram ao salvar em `.docs/infra.md`; colá-los no editor causa UnknownDiagramError.
- **Play with Docker foi desativado em 01/03/2026**, apesar de estar no PTD. O plano B é o Killercoda.
- Docker Desktop no Windows (guia oficial conferido na revisão): WSL 2.1.5 ou maior,
  8 GB de RAM e virtualização habilitada. Conferir também edição, versão e suporte do Windows
  no guia. A instalação por usuário não pede administrador; habilitar o WSL pode pedir.
  O login no Docker é opcional.
- A documentação oficial do Killercoda descreve o ambiente `ubuntu` como Ubuntu 24.04 com
  Docker e Podman. Não foi executada uma sessão autenticada do playground nesta revisão.
  O slide 33 pede `docker --version` antes do exercício.
- O teste individual do slide 12 usa o IP da própria máquina. Ele não comprova acesso externo
  nem a liberação do firewall da rede do laboratório.

## Testado na montagem da aula 2 (24/10/2026)

Vite 8.3 com React 19, FastAPI 0.159 e Caddy 2.11, num projeto descartável igual ao do professor.

- O `npm install` do template do Vite 8 falhou no npm 10.8 (`Cannot read properties of null
  (reading 'edgesOut')`) e passou com `--legacy-peer-deps`. Os projetos da turma já têm `node_modules`.
- O build copia o endereço do `fetch` para o `.js` do `dist/assets/`. Com `VITE_URL_DA_API=/api` no
  `.env.production`, o `127.0.0.1` some do build e o `npm run dev` continua usando o `.env.development`.
- O `dist/index.html` aberto do disco fica em branco: o console mostra o script de `file:///assets/...`
  bloqueado por CORS, origem `null`.
- O `Caddyfile` e o `nginx.conf` dos slides 15 e 16, copiados do HTML, servem a tela e encaminham o
  `/api` (`/api/health`, `/api/tarefas` e o `POST /api/login` com formulário). Caddyfile com CRLF funciona.
- O Caddy com `:80` registra no log que não vai aplicar HTTPS automático. É o slide 23.
- No Linux, o contêiner só chega na API com `--add-host=host.docker.internal:host-gateway` e a API em
  `--host 0.0.0.0`. No Docker Desktop do Windows o nome já existe; isso não foi testado aqui.
- O `docker run --rm` em primeiro plano para com `Ctrl+C` e apaga o contêiner.
- **Não testado:** o comando com crase do PowerShell e o `-v ./caminho` relativo no Windows. Se o
  Docker reclamar do caminho, a troca é `./` por `${PWD}/`.

## Fontes da revisão

- Mermaid Live e Markdown: https://mermaid.js.org/intro/getting-started.html
- Imagens, contêineres e núcleo compartilhado: https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/
- Ambiente virtual Python: https://docs.python.org/3/library/venv.html
- Docker Desktop no Windows: https://docs.docker.com/desktop/setup/install/windows-install/
- CORS e origens: https://fastapi.tiangolo.com/tutorial/cors/
- Ambiente Ubuntu do Killercoda: https://killercoda.com/creators
- Encerramento do Play with Docker: https://github.com/play-with-docker/play-with-docker/blob/master/README.md
