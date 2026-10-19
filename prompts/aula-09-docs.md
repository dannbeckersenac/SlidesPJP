# Prompt da aula 9 · o rascunho da pasta .docs/

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
aula 9 na raiz. Ele lê o projeto inteiro uma vez e escreve o rascunho dos cinco arquivos da `.docs/`,
com `?` no que deduziu. Só grava depois que você responder `pode seguir`.

---

Leia o meu repositório inteiro: `REGRAS.md`, `README.md`, `docs/`, o `backend/` (sem `venv/`) e o
`frontend/` (sem `node_modules/`). Quero montar a pasta `.docs/` na raiz, que é o diário de obra do
projeto: o que foi feito, o que foi decidido e o que falta. Ela vai ser lida por mim e por você, a IA,
no começo de toda conversa.

Faça nesta ordem:

1. Escreva, na resposta, o rascunho destes cinco arquivos:
   - `.docs/README.md`: o projeto em até dez linhas. O que é, para quais perfis, a stack, como subir
     o back e o front, e onde está cada coisa.
   - `.docs/arquitetura.md`: as camadas do backend (rotas, serviços, repositórios, esquemas, modelos),
     o que cada pasta guarda, como uma requisição atravessa as camadas, e as telas do front com o
     perfil de cada uma.
   - `.docs/decisoes.md`: uma entrada para cada decisão que você encontrar no código, no formato
     `## título`, `- Decisão:`, `- Por quê:`, `- Ficou de fora:`, `- Onde está:`. Procure pelo menos:
     o banco e o ORM, as migrations, como a regra recusa e com qual status, o hash da senha, o token,
     os perfis e o que cada um pode.
   - `.docs/proximos-passos.md`: o que está pela metade ou faltando, em ordem, comparando o código
     com a cartilha em `docs/` e com o README. Cada item com o arquivo onde mexer.
   - `.docs/roadmap.md`: só o título e uma seção `## Agora` com o que já existe. O resto entra na
     próxima aula.
2. Marque com `?` no fim da linha tudo que você deduziu sem ver no código, principalmente os porquês
   das decisões. O porquê é meu: eu confirmo ou corrijo.
3. Pare aqui e espere eu responder `pode seguir`. Não crie nenhum arquivo antes disso.
4. Depois da minha autorização, grave os cinco arquivos com as correções que eu fizer, mantendo os
   `?` que eu não tirar, e me diga quais linhas ainda têm `?`.

Limites obrigatórios:

- Não altere nenhum arquivo fora da `.docs/`. Não mexa em código.
- Não escreva senha, valor do `.env`, chave ou token em nenhum arquivo.
- Não invente decisão que não está no código, nem funcionalidade que não existe.
- Escreva curto. Cada arquivo cabe numa tela, menos o `decisoes.md`.
- Código, nomes e texto em português do Brasil.
