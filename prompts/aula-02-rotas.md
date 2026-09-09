# Prompt do exercício 2 · revisão do desenho das rotas

Cole no seu assistente depois de escrever as três rotas, com o `backend/` aberto.
Este prompt não escreve código: ele questiona o seu.

---

Leia as rotas que eu escrevi neste projeto e o meu `CONTRATO.md`. Aja como revisor, não como autor.

Para cada rota, responda:

1. O método está correto para o que ela faz, segundo a convenção REST? Se não, qual seria e por quê.
2. O caminho descreve um recurso no plural, sem verbo? Se não, qual seria.
3. O status code devolvido é o certo em cada saída possível, inclusive quando o recurso não existe?
4. O que acontece se o cliente mandar um id que não existe?

Depois, me faça três perguntas sobre as minhas escolhas. Perguntas que o professor faria numa
arguição, do tipo "por que este status e não outro".

Limites obrigatórios:

- Não reescreva o meu código. Aponte o arquivo e a linha, e explique o problema em uma frase.
- Não sugira banco de dados, ORM, Pydantic, camadas, autenticação nem CORS. Nada disso foi visto ainda.
- Não crie rota nova que eu não tenha pedido.
