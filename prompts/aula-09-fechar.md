# Prompt da aula 9 · fechar a conversa atualizando a .docs/

Cole no fim de toda conversa com o assistente em que algo mudou no projeto. É o lembrete para a IA
anotar o que foi feito antes de você fechar, como o diário de obra no fim do dia. Confira a mudança
com `git diff .docs/` antes do commit.

---

Antes de encerrar, atualize a pasta `.docs/` com o que fizemos nesta conversa:

1. No `proximos-passos.md`, tire o que ficou pronto e deixe o que ficou pela metade, com uma linha
   dizendo onde parou e qual arquivo abrir primeiro na próxima vez.
2. No `decisoes.md`, acrescente uma entrada para cada decisão nova que eu aprovei, no formato
   `## título`, `- Decisão:`, `- Por quê:`, `- Ficou de fora:`, `- Onde está:`.
3. No `arquitetura.md`, só se mudou pasta, arquivo ou camada.
4. Me mostre o que mudou em cada arquivo, em poucas linhas, e me lembre de fazer o commit.

Limites obrigatórios:

- Não anote decisão que eu não aprovei, nem funcionalidade que não está no código.
- Não escreva senha, valor do `.env`, chave ou token.
- Não altere nenhum arquivo fora da `.docs/`.
- Escreva em português do Brasil.
