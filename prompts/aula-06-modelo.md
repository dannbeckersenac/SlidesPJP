# Prompt do exercício 6 · conferir os modelos contra o DER

Cole no seu assistente depois de fazer o segundo tempo da aula 6: os três modelos, a sessão por
requisição, a regra num commit só e o filtro no repositório.
Este prompt não escreve código: ele compara o que você desenhou com o que você escreveu, e devolve
perguntas que o professor faria na apresentação.

---

Leia o DER em `docs/`, os esquemas em `backend/esquemas/`, os modelos em `backend/modelos/`, as rotas,
os serviços, os repositórios e o `backend/banco.py`. Aja como revisor, não como autor.

Procure e liste, com arquivo e linha, cada um destes problemas:

1. Coluna que está no DER e não está no modelo, ou o contrário. A chave da filha para a principal
   sem `ForeignKey` no modelo.
2. Tipo diferente entre o DER, o modelo e o esquema. Por exemplo, prazo como texto num lugar e como
   data no outro.
3. Tamanho de `String(n)` no modelo menor que o `max_length` do `Field` no esquema. O Pydantic deixa
   passar e o MySQL recusa.
4. Coluna obrigatória no esquema que está com `nullable=True`, ou sem `nullable`, no modelo.
5. Função de repositório que ainda abre a própria sessão com `Sessao()` ou fecha com `close()`, ou
   rota que chega ao banco sem `sessao=Depends(obter_sessao)`.
6. Serviço que ainda lê o registro com colchete, `registro["campo"]`, em vez de ponto.
7. A regra da cartilha que muda a entidade principal: diga quantos commits acontecem entre a mudança
   e o fim da requisição, e em qual linha. Se forem dois, explique o que fica no banco se o segundo
   falhar. Não conserte.
8. Filtro feito em Python no serviço, sobre a tabela inteira, que poderia ser um `where` no repositório.
9. Modelo citado numa `ForeignKey` ou num `relationship` que não é importado em lugar nenhum antes
   de a API subir.

Para cada item, escreva em uma frase qual é o problema e onde ele está. Não altere nenhum arquivo.

Depois, me faça três perguntas que o professor faria na apresentação, sobre as minhas escolhas, do
tipo "por que este campo tem 100 caracteres e não 50", "o que acontece com a principal se der erro
depois que a regra mudou ela" e "o que o `relationship` muda no banco".

Limites obrigatórios:

- Não reescreva o meu código e não crie arquivo nenhum. Aponte e explique.
- Não proponha migrations, Alembic, `try`/`except`, exceção criada por mim, login, senha nem
  `async def`. Nada disso foi visto ainda.
- Não sugira trocar `Column` por `Mapped` e `mapped_column`, nem trocar o MySQL por outro banco.
- Responda em português do Brasil.
