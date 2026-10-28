# Prompt da aula 4 da UC2 · o banco no Supabase e a preparação para a Vercel

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
aula 4 da UC2 na raiz. Ele confere o backend, mostra o plano da troca de banco e espera você
responder `pode seguir` antes de alterar arquivos. O trabalho é individual. Preencha a senha do banco
no `.env`, fora da conversa.

---

Leia o `REGRAS.md`, a `.docs/` inteira, o `backend/` (sem `venv/`) e o `frontend/` (sem
`node_modules/` e sem `dist/`). Quero trocar o banco do meu projeto de MySQL para o PostgreSQL do
Supabase e preparar a publicação na Vercel, com dois projetos: a API, com Root Directory `backend`,
e a tela, com Root Directory `frontend`.

Faça nesta ordem:

1. Me diga em qual arquivo e linha o `create_engine` está, e se o meu `configuracao.py` lê o banco
   numa chave `URL_DO_BANCO` ou em peças. Se for em peças, me mostre como ficaria com uma chave só,
   e não altere nada ainda.
2. Mostre o plano, sem alterar nada ainda:
   - no `banco.py`, o import de `NullPool` e o `poolclass=NullPool` no `create_engine`, com um
     comentário em português explicando por quê;
   - o comando `pip install psycopg2-binary` e o `pip freeze > requirements.txt`, para eu rodar;
   - o `frontend/vercel.json` com um `rewrites` de `/api/:caminho*` para o endereço da minha API na
     Vercel, `/:caminho*`. Deixe o endereço como `https://NOME-DA-API.vercel.app` para eu trocar;
   - qualquer trecho do código que só funcione no MySQL, com arquivo e linha. Se não houver, diga.
3. Pare e espere eu responder `pode seguir`.
4. Depois do `pode seguir`, faça só as alterações do plano.
5. Explique como testar. Primeiro, eu preencho o `URL_DO_BANCO` do Transaction pooler no `.env`.
   Se a senha tiver símbolos, explique como codificar esses caracteres na URL sem pedir a senha.
   Depois, executo `python criar_tabelas.py`. Só se ele terminar sem erro, executo `alembic stamp head`.
   Por último, confiro as tabelas no Table Editor, ativo o RLS e testo o login de cada perfil com `fastapi dev`.
6. Atualize o `.docs/infra.md` com o desenho novo em Mermaid: navegador, tela na Vercel, API na
   Vercel e banco no Supabase, com o protocolo em cada seta.

Depois, me faça três perguntas que um professor faria na apresentação sobre esta troca.

Limites obrigatórios:

- Não altere rota, serviço, repositório, esquema, modelo nem migration. Se encontrar código específico
  de MySQL, aponte arquivo e linha e aguarde orientação antes de mexer nele.
- Não peça, não leia e não escreva a senha do banco, a `CHAVE_DO_TOKEN` nem o `.env`.
- Não leia chaves privadas ou arquivos de credenciais. Na documentação, use marcadores no lugar
  de endereços privados e valores de conexão.
- Não instale o SDK do Supabase nem use a API REST do Supabase. A API conversa com o banco pelo SQLAlchemy.
- Não use `asyncpg`, `psycopg` 3, `async def` nem sessão assíncrona.
- Não crie `vercel.json` no `backend/`. A Vercel encontra o `app` do `main.py` sozinha.
- Não use Vercel Services, `builds` ou `routes` no `vercel.json`. Só o `rewrites` do plano.
- Não apague o `docker-compose.yml` nem o `Caddyfile`. Eles continuam servindo para rodar local.
- Não apague bancos, volumes ou backups.
- Comente em português cada trecho que você alterar, dizendo o que faz e por quê.
- Nas instruções de passo a passo, use verbos no infinitivo.
