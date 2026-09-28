# Prompt do exercício 6 · conferir o modelo contra o DER

Cole no seu assistente depois de criar o modelo da sua entidade principal e o DER em `docs/`.
Este prompt não escreve código: ele compara o que você desenhou com o que você escreveu, e devolve
perguntas que o professor faria na apresentação.

---

Leia o DER em `docs/`, o esquema de entrada da minha entidade principal em `backend/esquemas/`, o
modelo dela em `backend/modelos/` e o repositório em `backend/repositorios/`. Aja como revisor, não
como autor.

Procure e liste, com arquivo e linha, cada um destes problemas:

1. Coluna que está no DER e não está no modelo, ou o contrário.
2. Tipo diferente entre o DER, o modelo e o esquema. Por exemplo, prazo como texto num lugar e como
   data no outro.
3. Tamanho de `String(n)` no modelo menor que o `max_length` do `Field` no esquema. O Pydantic deixa
   passar e o MySQL recusa.
4. Coluna obrigatória no esquema que está com `nullable=True`, ou sem `nullable`, no modelo.
5. Função do repositório que abre uma sessão e não fecha, ou que fecha antes de ler o que precisa.
6. Serviço que ainda lê o registro com colchete, `registro["campo"]`, em vez de ponto.
7. Regra da cartilha que muda a entidade principal. Diga qual linha faz a mudança e o que acontece
   com ela depois de reiniciar a API. Não conserte.

Para cada item, escreva em uma frase qual é o problema e onde ele está. Não altere nenhum arquivo.

Depois, me faça três perguntas que o professor faria na apresentação, sobre as minhas escolhas, do
tipo "por que este campo tem 100 caracteres e não 50", "o que o `refresh` traz de volta" e "o que
acontece se eu apagar o import do modelo no `criar_tabelas.py`".

Limites obrigatórios:

- Não reescreva o meu código e não crie arquivo nenhum. Aponte e explique.
- Não proponha `ForeignKey`, `relationship`, migrations, Alembic, sessão por `Depends`, `with`,
  `rollback` nem `try`/`except`. Nada disso foi visto ainda.
- Não sugira trocar `Column` por `Mapped` e `mapped_column`, nem trocar o MySQL por outro banco.
- Responda em português do Brasil.
