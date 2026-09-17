# Prompt da aula 4 · alinhar a estrutura de pastas do backend

Cole no seu assistente com o repositório inteiro aberto, antes da mão na massa da aula 4.
Ele compara o seu `backend/` com a estrutura da aula e só move arquivo depois que você autorizar.
O que ele devolve primeiro é uma lista de diferenças: leia antes de responder.

---

Leia o meu repositório e compare a pasta `backend/` com a estrutura abaixo. Ela é a estrutura
do curso até a aula 4, e o meu projeto precisa seguir exatamente esta distribuição.

```
backend/
├── venv/                  ambiente virtual, fora do Git
├── .env                   o que muda de máquina para máquina, fora do Git
├── .env.exemplo           as mesmas chaves do .env, sem os valores, esse vai para o Git
├── configuracao.py        load_dotenv() e as leituras com os.getenv
├── main.py                cria o app, registra o CORS e liga os routers
├── rotas/
│   ├── __init__.py        vazio
│   └── <recurso>.py       plural: o APIRouter e as rotas daquele recurso
├── servicos/
│   ├── __init__.py        vazio
│   └── <recurso>.py       singular: as decisões e as contas daquele recurso
├── repositorios/
│   ├── __init__.py        vazio
│   └── <recurso>.py       singular: a lista em memória e as funções que leem e gravam
└── esquemas/
    ├── __init__.py        vazio
    └── <recurso>.py       singular: os esquemas Pydantic de entrada e de saída
```

Regras desta estrutura:

- A chamada vai sempre na mesma direção: a rota chama o serviço, o serviço chama o repositório.
  Uma rota nunca importa outra rota, e um repositório nunca importa um serviço.
- Em `rotas/` pode aparecer `APIRouter`, `HTTPException`, status code, `Depends` e os esquemas.
  Não pode aparecer lista de dados nem conta nenhuma.
- Em `servicos/` pode aparecer o import dos repositórios, os esquemas e as contas. Não pode
  aparecer `HTTPException`, status code nem `APIRouter`. Quando não encontra, o serviço devolve `None`.
- Em `repositorios/` fica a lista em memória e as funções que leem e gravam nela. Nada de conta,
  de regra e de HTTP.
- O `main.py` só cria o `app`, registra o CORS com o endereço vindo da configuração e liga cada
  router com `include_router`, informando o `prefix` e as `tags`.
- O endereço do front não fica escrito em nenhum arquivo `.py`: ele vem do `.env`.
- O servidor sobe com `fastapi dev main.py`, rodado de dentro de `backend/`.

Faça nesta ordem:

1. Mostre a árvore atual do meu `backend/`, sem `venv/` e sem `__pycache__/`.
2. Liste cada diferença em relação à estrutura acima: arquivo fora do lugar, nome diferente,
   pasta a mais, pasta faltando, `__init__.py` faltando, rota escrita no `main.py`, lista de dados
   dentro da rota, conta dentro da rota, endereço do front escrito no código.
3. Para cada diferença, proponha um movimento, um por linha, no formato
   `mover rotas/x.py para ...` ou `renomear ... para ...`, e diga quais imports mudam por causa dele.
4. Pare aqui e espere eu responder `pode seguir`. Não altere nenhum arquivo antes disso.
5. Depois da minha autorização, faça só os movimentos da lista, ajuste os imports e me diga
   como conferir: o comando para subir o servidor e o que deve aparecer no `/docs`.

Se a estrutura já estiver certa, diga isso em uma linha e não proponha nada.

Limites obrigatórios:

- Não mude o comportamento de nenhuma rota, nem caminho, nem método, nem status code.
  Só lugar, nome e import.
- Não invente regra de negócio nova ao mover a lógica para o serviço. O que estava na rota
  continua fazendo exatamente a mesma coisa, em outro arquivo.
- Não crie pasta que não está na estrutura acima. Nada de `app/`, `models/`, `database/`,
  `core/`, `utils/`, `schemas/` ou `services/` em inglês.
- Não use banco de dados, ORM, `async def`, autenticação nem `pydantic-settings`.
- Não toque na pasta `frontend/`.
- Código, nomes e comentários em português do Brasil.
