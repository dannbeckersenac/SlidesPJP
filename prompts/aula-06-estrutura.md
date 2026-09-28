# Prompt da aula 6 · alinhar a estrutura de pastas do backend

Cole no seu assistente com o repositório da cartilha aberto, antes da mão na massa da aula 6.
Ele compara o seu `backend/` com a estrutura da aula e só move arquivo depois que você autorizar.
O que ele devolve primeiro é uma lista de diferenças: leia antes de responder.

---

Leia o meu repositório e compare a pasta `backend/` com a estrutura abaixo. Ela é a estrutura
do curso até a aula 6. Os arquivos marcados como "chega hoje" ainda não existem: não crie nenhum deles.
Quero só que o que já existe esteja no lugar certo para recebê-los.

```
backend/
├── venv/                  ambiente virtual, fora do Git
├── .env                   o que muda de máquina para máquina, fora do Git
├── .env.exemplo           as mesmas chaves do .env, sem os valores, esse vai para o Git
├── configuracao.py        load_dotenv() e as leituras com os.getenv
├── banco.py               chega hoje: engine, Sessao e Base
├── criar_tabelas.py       chega hoje: cria as tabelas a partir dos modelos
├── main.py                cria o app, registra o CORS e liga os routers
├── rotas/
│   ├── __init__.py        vazio
│   └── <recurso>.py       plural: o APIRouter e as rotas daquele recurso
├── servicos/
│   ├── __init__.py        vazio
│   └── <recurso>.py       singular: as decisões, as contas e a regra da cartilha
├── repositorios/
│   ├── __init__.py        vazio
│   └── <recurso>.py       singular: as funções que leem e gravam
├── esquemas/
│   ├── __init__.py        vazio
│   └── <recurso>.py       singular: os esquemas Pydantic de entrada e de saída
└── modelos/               chega hoje: o modelo SQLAlchemy de cada tabela
```

Regras desta estrutura:

- A chamada vai sempre na mesma direção: a rota chama o serviço, o serviço chama o repositório.
- O repositório de cada recurso tem funções com nomes que dizem o que fazem, como `listar`,
  `buscar_por_id` e `salvar`. Nenhuma rota e nenhum serviço mexe direto na lista de dados.
- O serviço recebe do repositório e devolve para a rota. Quando não encontra, devolve `None`.
- O `main.py` só cria o `app`, registra o CORS e liga cada router com `include_router`.
- O único arquivo que lê o `.env` é o `configuracao.py`.
- O servidor sobe com `fastapi dev main.py`, rodado de dentro de `backend/`.

Faça nesta ordem:

1. Mostre a árvore atual do meu `backend/`, sem `venv/` e sem `__pycache__/`.
2. Liste cada diferença em relação à estrutura acima: arquivo fora do lugar, nome diferente,
   pasta a mais, `__init__.py` faltando, rota escrita no `main.py`, lista de dados acessada fora do
   repositório, `.env` lido fora do `configuracao.py`, `.env` fora do `.gitignore`.
3. Para cada diferença, proponha um movimento, um por linha, no formato
   `mover rotas/x.py para ...` ou `renomear ... para ...`, e diga quais imports mudam por causa dele.
4. Liste as funções do repositório da minha entidade principal, com o nome e o que cada uma devolve.
   É por elas que o banco vai entrar hoje.
5. Pare aqui e espere eu responder `pode seguir`. Não altere nenhum arquivo antes disso.
6. Depois da minha autorização, faça só os movimentos da lista, ajuste os imports e me diga
   como conferir: o comando para subir o servidor e o que deve aparecer no `/docs`.

Se a estrutura já estiver certa, diga isso em uma linha e passe direto para o item 4.

Limites obrigatórios:

- Não mude o comportamento de nenhuma rota, nem caminho, nem método, nem status code.
  Só lugar, nome e import.
- Não crie `banco.py`, `criar_tabelas.py` nem `modelos/`, e não instale nada. Isso é a mão na massa
  da aula, e eu faço junto com a turma.
- Não crie pasta que não está na estrutura acima. Nada de `app/`, `models/`, `database/`, `db/`,
  `core/`, `crud/`, `utils/`, `schemas/` ou `services/` em inglês.
- Não use `async def`, autenticação nem `pydantic-settings`.
- Não toque na pasta `frontend/`.
- Código, nomes e comentários em português do Brasil.
