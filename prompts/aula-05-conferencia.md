# Prompt da avaliação do ciclo 1 · conferência da entrega

Cole no seu assistente com o repositório da cartilha aberto, antes de entregar.
Este prompt não conserta nada: ele compara o que você fez com a cartilha e com a régua da avaliação,
e devolve o que falta. O conserto, e a explicação dele na apresentação, são seus.

---

Leia o meu repositório inteiro. A cartilha que eu sorteei está em `docs/CARTILHA.md`. Se ela não
estiver lá, pare e me peça para colar a cartilha antes de continuar.

Aja como conferente de uma entrega avaliada, não como autor. Confira cada item abaixo e marque como
**feito**, **incompleto** ou **faltando**, sempre com o arquivo e a linha onde você olhou.

Documentação, em `docs/`:

1. `BRIEFING.md` tem a dor com palavras próprias, os dois perfis da cartilha, as jornadas de cada um
   e o que fica de fora.
2. `marca/` tem o logo em versão colorida e em uma cor só.
3. Existe um styleguide em `docs/styleguide/`, ou um link do Figma no `README.md`.
4. As cores e as fontes do styleguide aparecem no CSS do front.

Front, em `frontend/`:

5. As quatro telas da cartilha existem. Diga qual componente é qual.
6. Toda tela que busca dados trata os três estados: carregando, erro e lista vazia.
7. O `fetch` confere `resposta.ok` antes de usar a resposta.
8. O formulário manda `Content-Type: application/json` e mostra na tela a recusa da API.
9. O CSS tem ajuste para celular e para computador, e as telas da pessoa são pensadas para o celular.

Back, em `backend/`:

10. Monte uma tabela com as cinco capacidades da cartilha, a rota que implementa cada uma
    (método e caminho) e o arquivo. Capacidade sem rota é **faltando**.
11. A estrutura segue as pastas `rotas/`, `servicos/`, `repositorios/` e `esquemas/`, com a chamada
    sempre na direção rota, serviço, repositório.
12. Existe esquema de entrada separado do de saída.
13. A regra da cartilha está no serviço, e a recusa volta com um status de erro, não com 200.
14. O CORS libera só o endereço do front, lido do `.env`, e o `.env` está no `.gitignore`.

Por fim, `README.md` na raiz:

15. Diz como rodar o front e o back, com os comandos.

Depois da conferência, escreva três perguntas que o professor faria na apresentação, sobre as escolhas deste repositório, do tipo
"por que esta rota usa este status" e "o que a tela mostra se a API cair agora".

Limites obrigatórios:

- Não altere nenhum arquivo, não crie arquivo e não escreva código de conserto. Aponte e explique.
- Não sugira banco de dados, ORM, login, senha, JWT, exceção própria nem `async def`.
  Nada disso foi visto ainda.
- Não sugira funcionalidade que não está na cartilha.
- Responda em português do Brasil.
