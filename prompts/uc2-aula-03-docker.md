# Prompt da aula 3 da UC2 · os arquivos do Docker para subir tudo com um comando

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
aula 3 da UC2 na raiz. Ele lê o projeto, mostra o plano dos arquivos e espera você responder
`pode seguir` antes de criar qualquer coisa. O trabalho é individual. Confira os cinco pontos do
slide 14 antes do commit.

---

Leia o `REGRAS.md`, a `.docs/` inteira, o `Caddyfile`, o `backend/` (sem `venv/`) e o `frontend/`
(sem `node_modules/` e sem `dist/`). Quero rodar banco, API e Caddy em contêineres na minha máquina com
`docker compose up -d --build`. O projeto não deve depender do MySQL instalado no Windows.

Faça nesta ordem:

1. Me diga o comando para eu gerar o `backend/requirements.txt` com `pip freeze`, com o venv ativo.
   Não escreva esse arquivo à mão.
2. Mostre o plano, sem criar nada ainda, com o conteúdo completo de cada arquivo, sem abreviações:
   - `backend/Dockerfile`: `FROM python:3.12-slim`, `WORKDIR /app`, copia o `requirements.txt` e
     instala antes de copiar o resto, e termina com
     `CMD ["fastapi", "run", "main.py", "--port", "8000"]`. Se o meu `main.py` estiver em outro lugar,
     me avise e ajuste o caminho.
   - `backend/.dockerignore` com `venv/`, `.env` e `__pycache__/`.
   - `frontend/Dockerfile` em duas etapas: `FROM node:22 AS build`, `npm ci` e `npm run build`; depois
     `FROM caddy:2` copiando o `dist/` para `/srv`.
   - `frontend/.dockerignore` com `node_modules/` e `dist/`.
   - `docker-compose.yml` na raiz, com três serviços:
     - `banco`: `image: mysql:8.4`, com `MYSQL_DATABASE` igual ao nome do banco do meu `.env.exemplo`,
       `MYSQL_USER: app`, `MYSQL_PASSWORD` e `MYSQL_ROOT_PASSWORD` vindos de `${SENHA_DO_BANCO}`, e o
       volume nomeado `dados_do_banco:/var/lib/mysql`. Sem `ports`: o banco não precisa abrir porta.
     - `api`: `build: ./backend`, com `URL_DO_BANCO` montada com o usuário `app`, a
       `${SENHA_DO_BANCO}` e o host `banco:3306`, e `CHAVE_DO_TOKEN: ${CHAVE_DO_TOKEN}`. Se o meu
       `configuracao.py` lê o banco em peças em vez de `URL_DO_BANCO`, use as mesmas chaves dele.
       `depends_on: banco`. Sem `ports`.
     - `web`: `build: ./frontend`, `ports: "8080:80"`, o volume `./Caddyfile:/etc/caddy/Caddyfile` e
       `depends_on: api`.
   - `.env.exemplo` na raiz com `SENHA_DO_BANCO=` e `CHAVE_DO_TOKEN=`, sem valores.
   - No `Caddyfile`, a única mudança: `reverse_proxy host.docker.internal:8000` vira
     `reverse_proxy api:8000`.
3. Pare e espere eu responder `pode seguir`.
4. Depois do `pode seguir`, crie os arquivos do plano. Não crie o `.env` da raiz: me diga quais
   chaves eu preencho e como gerar a `CHAVE_DO_TOKEN` com `secrets.token_hex(32)`.
5. Diga como eu verifico se o MySQL terminou de iniciar. O `depends_on` simples ordena a partida,
   mas não garante que o banco já aceita conexões. Não execute a criação de tabelas antes disso.
6. Diga como eu testo: `docker compose up -d --build`, `docker compose ps`, os dois comandos
   `docker compose exec api python criar_tabelas.py` e `docker compose exec api alembic stamp head`,
   e o login de cada perfil em `http://localhost:8080`. Só registre o `stamp head` depois que
   a criação das tabelas terminar sem erro.

Depois, me faça três perguntas que um professor faria na apresentação sobre estes arquivos.

Limites obrigatórios:

- Não altere rota, serviço, repositório, esquema, modelo nem migration. O código da aplicação não muda.
- Não escreva senha, chave ou token em nenhum arquivo que vai para o Git.
- Não abra o `.env` do backend nem o da raiz. Use o `.env.exemplo` para saber os nomes das chaves.
- Não leia chaves privadas ou arquivos de credenciais. Não copie valores de outros arquivos de
  variáveis do front para a resposta ou a documentação.
- Não troque o MySQL por outro banco e não mude o driver do `URL_DO_BANCO`.
- Não use Nginx, Kubernetes, Docker Swarm, `network_mode: host` nem redes declaradas à mão. As
  redes padrão do compose bastam.
- Não coloque domínio nem HTTPS no `Caddyfile`. Isso é só da demonstração do professor.
- Não crie GitHub Actions, scripts `.sh` nem `Makefile`.
- Não apague bancos, volumes ou backups. Não execute `docker compose down -v`.
- Comente cada bloco dos arquivos em português, dizendo o que ele faz e por quê.
