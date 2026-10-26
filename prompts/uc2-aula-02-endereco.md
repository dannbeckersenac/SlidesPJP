# Prompt da aula 2 da UC2 · a troca do endereço fixo da API

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
aula 2 da UC2 na raiz. Ele confere a lista do `.docs/infra.md` contra o código do `frontend/`, mostra
o plano e espera você responder `pode seguir` antes de alterar arquivos.
O trabalho é individual. Confira cada arquivo alterado antes do commit.

---

Leia o `REGRAS.md`, a `.docs/` inteira e o `frontend/` (sem `node_modules/` e sem `dist/`). Quero
tirar do código da tela todo endereço fixo da API e passar a usar a variável `VITE_URL_DA_API`.

Faça nesta ordem:

1. Liste cada lugar do `frontend/src/` que chama a API com endereço escrito no código, com arquivo,
   linha e o trecho. Compare com a seção "O que está chumbado" do `.docs/infra.md` e aponte o que
   está numa lista e não na outra.
2. Mostre o plano, sem alterar nada ainda:
   - o `frontend/.env.development` com `VITE_URL_DA_API=` e o endereço que a tela usa hoje;
   - o `frontend/.env.production` com `VITE_URL_DA_API=/api`;
   - o `frontend/src/api.js`, que exporta `URL_DA_API` lida de `import.meta.env.VITE_URL_DA_API`;
   - em cada arquivo do item 1, o import de `URL_DA_API`, com o caminho relativo certo para aquela
     pasta, e o trecho antes e depois da troca.
3. Pare e espere eu responder `pode seguir`.
4. Depois do `pode seguir`, faça só as alterações do plano. Em seguida, atualize a seção "O que está
   chumbado" do `.docs/infra.md`, marcando cada item como resolvido e dizendo onde o endereço mora agora.
5. Diga como eu testo: reiniciar o `npm run dev` e conferir o login e as consultas, o `npm run build` e a conferência das chamadas no `.js` do
   `dist/assets/`. Elas devem usar `/api` no lugar do endereço local da API.

Depois, me faça três perguntas que um professor faria na apresentação sobre esta troca.

Limites obrigatórios:

- Não altere nada em `backend/`. O CORS do backend fica como está.
- Monte o endereço com concatenação, `URL_DA_API + "/rota"`, como o resto do código do curso.
- Não instale biblioteca nova e não crie outra variável além de `VITE_URL_DA_API`.
- Não coloque senha, chave ou token em variável `VITE_`. Ela vai para o navegador do usuário.
- Não escreva `Dockerfile`, `docker compose` nem configuração de HTTPS.
- Não altere o `Caddyfile`. Ele é escrito por mim, a partir do slide.
- Não abra `.env` do backend, chaves privadas ou arquivos de credenciais.
- Nos arquivos de variáveis do front, trate apenas de `VITE_URL_DA_API`. Não copie outros valores
  para a resposta ou para a documentação.
