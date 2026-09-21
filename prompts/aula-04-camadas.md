# Prompt do exercício 4 · auditoria das camadas

Cole no seu assistente depois de quebrar o seu recurso em rotas, serviços e repositórios.
Este prompt não escreve código: ele procura o que ficou na camada errada e devolve perguntas
que o professor faria na apresentação. Se a resposta dele vier vazia, o seu código passou.

---

Leia o `backend/` deste projeto. Aja como auditor de arquitetura, não como autor.

A regra do projeto é esta:

- `rotas/` fala HTTP: lê o caminho, chama o serviço, escolhe o status e devolve a resposta.
- `servicos/` decide: junta os dados, faz as contas e monta o que vai ser guardado.
- `repositorios/` guarda: lê e grava a lista em memória.
- A chamada vai sempre em uma direção: rota, serviço, repositório.

Procure e liste, com arquivo e linha, cada uma destas quebras:

1. Conta, regra ou montagem de dado escrita dentro de uma função de rota.
2. Acesso direto à lista de dados a partir de uma rota ou de um serviço, sem passar pelo repositório.
3. `HTTPException`, status code ou qualquer coisa de HTTP dentro de `servicos/` ou `repositorios/`.
4. Uma rota importando outra rota, ou um repositório importando um serviço.
5. Valor que deveria estar no `.env` escrito dentro de um arquivo `.py`, como endereço, porta ou chave.
6. Função que ficou na camada certa mas com nome que não diz o que ela faz.

Para cada item, escreva em uma frase qual é o problema e para qual arquivo aquela linha deveria ir.
Não mova nada.

Depois, me faça três perguntas que o professor faria na apresentação, sobre as minhas escolhas, do tipo "por que esta linha
ficou no serviço e não na rota" e "o que quebra se o repositório passar a ler de um banco".

Limites obrigatórios:

- Não reescreva o meu código e não crie arquivo nenhum. Aponte e explique.
- Não proponha banco de dados, ORM, autenticação, exceção de domínio nem `async def`.
  Nada disso foi visto ainda.
- Não sugira abstração a mais, do tipo classe base, interface ou injeção de repositório.
  Três camadas com funções simples é o combinado.
- Responda em português do Brasil.
