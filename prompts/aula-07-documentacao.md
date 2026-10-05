# Prompt da aula 7 · rascunho da documentação da API

Cole no seu assistente com o repositório da cartilha aberto, depois de as exceções da regra estarem
funcionando. Ele lê o código e escreve um rascunho da documentação do `/docs` e do README, marcando
com `?` tudo que deduziu. Só grava nos arquivos depois que você autorizar, e mesmo assim deixa os `?`.
Conferir cada linha é trabalho seu: provoque no `/docs` cada status antes de apagar o `?`.

---

Leia `docs/CARTILHA.md`, o `README.md` da raiz e, dentro de `backend/`, as rotas, os serviços,
`servicos/excecoes.py`, os esquemas e o `main.py`. Quero um rascunho da documentação da minha API,
e não quero que você mude o comportamento de nada.

Faça nesta ordem:

1. Para cada rota, monte uma linha com o método, o caminho e:
   - um `summary` em português, curto, com acento, dizendo o que a rota faz para quem usa;
   - uma docstring de uma ou duas frases, para a descrição;
   - o `responses` com cada status de erro que a rota **de fato** devolve, e a origem dele no código:
     o `HTTPException`, o `except` ou o `exception_handler`, com arquivo e linha.
2. Para cada campo dos esquemas de entrada, proponha um `description` e um valor de `examples` que
   passe na validação.
3. Escreva uma seção para o `README.md`, com estes títulos:
   - **Como rodar a API**: os comandos, do ambiente virtual até o `fastapi dev main.py`.
   - **Banco do zero**: o `.env` a partir do `.env.exemplo`, `python criar_tabelas.py` e `alembic stamp head`.
   - **As rotas**: uma tabela com método, caminho, o que faz, status de sucesso e status de erro.
   - **A regra**: a regra da cartilha em até cinco linhas, com cada recusa, a exceção e o status.
4. Marque com `?` no fim da linha tudo que você deduziu sem ver no código: um status que você acha
   que existe, uma validação que você supôs, uma frase da regra que você interpretou.
5. Pare aqui e espere eu responder `pode seguir`. Não altere nenhum arquivo antes disso.
6. Depois da minha autorização, grave o rascunho nos arquivos, mantendo cada `?`, e me diga como
   conferir: quais requisições disparar no `/docs` para ver cada status de erro aparecer.

Limites obrigatórios:

- Não liste status que a rota não devolve. Na dúvida, deixe de fora e me pergunte.
- Não mude caminho, método, status, regra, validação nem nome de função. Só documentação.
- Não crie rota, exceção, esquema ou arquivo novo, fora o texto no `README.md`.
- Não use `async def`, autenticação, `openapi_tags`, `openapi_extra` nem gerador de documentação externo.
- Não invente regra que não está na cartilha.
- Código, documentação e respostas em português do Brasil.
