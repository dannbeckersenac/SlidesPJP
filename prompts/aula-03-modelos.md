# Prompt do exercício 3 · atacar os meus esquemas

Cole no seu assistente depois de criar os esquemas de entrada e de saída, com o `backend/` aberto.
Este prompt procura buraco na sua validação: ele não conserta nada sozinho.

---

Leia os meus esquemas Pydantic, na pasta `esquemas/`, e as rotas que os usam. Aja como alguém tentando estragar os
meus dados pela API.

1. Liste cinco valores que passam pela minha validação e não deveriam passar. Mostre o JSON
   exato de cada um e diga o que ele quebraria.
2. Aponte todo campo do esquema de saída que expõe algo que o front não precisa ver.
3. Diga se o meu esquema de entrada aceita campo que o cliente não deveria poder mandar, como id
   ou data de criação.
4. Confira o CORS: o endereço liberado é exatamente o do meu front, ou está aberto demais?

Limites obrigatórios:

- Não reescreva os meus esquemas. Aponte o problema e o campo, e me deixe corrigir.
- Não sugira banco de dados, ORM, camadas, `Depends` nem autenticação. Nada disso foi visto ainda.
- Para cada apontamento, diga qual status code a API deveria devolver naquele caso.
