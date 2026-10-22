# Regras do projeto para a IA

Atualizado até a **aula 1** da UC2, Práticas DevOps em Projetos Web. Salve na raiz do repositório
da cartilha com o nome `REGRAS.md`, por cima da versão da UC4. Só vale a versão mais nova.

## O projeto

- Repositório da cartilha sorteada na UC4. Na UC2, ele é o caso que vai para produção: a aplicação
  está pronta, e o trabalho agora é desenhar, versionar e automatizar o caminho dela até o ar.
- Na raiz: `README.md`, `docs/` (a cartilha, o briefing e o DER), `.docs/` (o diário de obra),
  `frontend/` e `backend/`.
- `frontend/`: o React, rodando com `npm run dev` na porta 5173.
- `backend/`: a API em FastAPI, em camadas (`rotas/`, `servicos/`, `repositorios/`, `esquemas/`,
  `modelos/`), com MySQL pelo SQLAlchemy, migrations com Alembic e login com JWT. Roda com
  `fastapi dev main.py` na porta 8000. O MySQL roda na porta 3306.
- `.docs/` tem `README.md`, `arquitetura.md`, `decisoes.md`, `proximos-passos.md`, `roadmap.md`
  e `ia.md`. Nesta aula ela ganha o `infra.md`, com a arquitetura de produção, e a pasta `prints/`.
- Código, nomes, comentários, documentação e respostas sempre em português do Brasil.
- Cartilha: escreva aqui o número e o nome, e em uma linha a pessoa e a regra.

## O que já foi visto, e pode usar

- Tudo o que a UC4 ensinou e já está no código do projeto. Leia o código antes de supor.
- Cliente e servidor: o servidor é um programa esperando numa porta; o cliente toma a iniciativa.
- IP, porta, `localhost` e `127.0.0.1`, `0.0.0.0`, DNS e domínio, HTTP na porta 80 e HTTPS na 443.
- O React roda no navegador de quem abre a tela. O Vite só entrega os arquivos.
- `fastapi dev main.py --host 0.0.0.0` e `npm run dev -- --host`, só para testar na rede do laboratório.
- Os comandos `ipconfig`, `ip -4 addr` e `nslookup`, e a aba Rede do navegador.
- Ambiente de desenvolvimento e de produção, e o que muda entre eles: endereço da API, tela,
  banco, `.env` e CORS.
- Na arquitetura: servidor web como recepção, CDN, balanceador, réplica de banco e monitoramento,
  só como nomes de peças num desenho.
- Diagrama em Mermaid dentro de Markdown: `flowchart LR`, caixas com `apelido[texto]`, setas
  `-->` com texto `|assim|` e cilindro `[( )]` para banco.
- Docker: o que é imagem e contêiner, Docker Hub, `docker --version`, `docker run hello-world`,
  `docker images` e `docker ps -a`. A instalação do Docker Desktop com WSL 2.

## O que ainda não foi visto, e não deve aparecer

- Qualquer mudança em `backend/` ou `frontend/`. Nesta aula o código não muda. O `localhost`
  chumbado é listado, não corrigido.
- `Dockerfile`, `docker compose`, `docker build`, volumes, redes do Docker e `-p` para publicar porta.
- Nginx, Apache ou qualquer servidor web configurado de verdade.
- `npm run build` e a pasta `dist/`.
- Provedor de nuvem escolhido (AWS, Azure, Google Cloud, Render, Railway, Vercel ou outro), máquina
  virtual criada, domínio comprado, certificado HTTPS configurado.
- Branches, pull request, tags e proteção da `main`. O Git continua como na UC4.
- GitHub Actions, pipeline de CI/CD, testes automatizados.
- Ferramenta de monitoramento, logs centralizados, métricas.
- Kubernetes.

## Como escrever o código

- Todo código que você gerar vem comentado em português. Um comentário curto acima de cada rota,
  função ou bloco, dizendo o que ele faz e por que está ali.
- O comentário explica a intenção. Não repita o que a linha já diz: `# retorna a lista` em cima
  de `return lista` não ensina nada.
- Na primeira vez que aparecer algo novo para mim (um decorador, um tipo, um parâmetro), explique
  em uma linha, no próprio comentário.
- Os comentários ficam no código que eu entrego. É por eles que eu estudo antes da apresentação.
- Depois do código, escreva um resumo curto: quais arquivos você criou ou alterou, o que mudou em
  cada um e como eu testo, com a URL ou o comando e o que deve aparecer na tela.

## Como manter a .docs/

- No começo de toda conversa, leia a `.docs/` inteira antes de abrir qualquer outro arquivo.
- O que é infraestrutura vai no `infra.md`: o desenho de produção, a tabela de ambientes, o caminho
  de uma requisição e o que ainda está chumbado no código.
- Escreva curto e com certeza. O que você deduziu sem ver no código leva `?` no fim da linha.
- Nunca escreva senha, chave do `.env`, token ou IP de servidor real na `.docs/` nem no README.

## Como responder

- Uma coisa por vez. Não adiante etapa que eu não pedi.
- Se a tarefa exigir algo da lista de cima, avise antes e proponha a versão simples.
- Em todo desenho de arquitetura, diga em qual máquina cada peça roda e em qual porta ela atende.
- Quando houver mais de uma escolha de infraestrutura, me mostre as opções e o que cada uma custa.
  A escolha é minha.
- Justifique cada decisão em uma linha. Eu preciso conseguir defender o que entrego na apresentação.
