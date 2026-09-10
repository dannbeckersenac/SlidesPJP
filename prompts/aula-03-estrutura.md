# Prompt da aula 3 · alinhar a estrutura de pastas do backend

Cole no seu assistente com o repositório inteiro aberto, antes da mão na massa da aula 3.
Ele compara o seu `backend/` com a estrutura da aula e só move arquivo depois que você autorizar.
O que ele devolve primeiro é uma lista de diferenças: leia antes de responder.

---

Leia o meu repositório e compare a pasta `backend/` com a estrutura abaixo. Ela é a estrutura
do curso até a aula 3, e o meu projeto precisa seguir exatamente esta distribuição.

```
backend/
├── venv/              ambiente virtual, fora do Git
├── main.py            cria o app, registra os routers e o CORS
├── rotas/
│   └── <recurso>.py   um arquivo por recurso, nome no plural, com o APIRouter,
│                      as rotas daquele recurso e a lista em memória
└── esquemas/
    └── <recurso>.py   um arquivo por recurso, nome no singular, com os esquemas
                       Pydantic de entrada e de saída daquele recurso
```

Regras desta estrutura:

- O `main.py` só cria o `app`, registra o CORS e liga cada router com `include_router`,
  informando o `prefix` e as `tags`. Nenhuma rota fica escrita nele.
- Cada arquivo de `rotas/` cria o seu `router = APIRouter()` e usa `@router.get`,
  `@router.post` e assim por diante. O caminho no decorador não repete o prefixo.
- Os dados continuam em lista na memória, dentro do arquivo de rotas do recurso.
- Os esquemas ficam só em `esquemas/`. A rota importa de lá, por exemplo
  `from esquemas.pedido import PedidoCriar, PedidoSaida`.
- O servidor sobe com `fastapi dev main.py`, rodado de dentro de `backend/`.

Faça nesta ordem:

1. Mostre a árvore atual do meu `backend/`, sem `venv/` e sem `__pycache__/`.
2. Liste cada diferença em relação à estrutura acima: arquivo fora do lugar, nome diferente,
   pasta a mais, pasta faltando, rota escrita no `main.py`, esquema escrito dentro da rota.
3. Para cada diferença, proponha um movimento, um por linha, no formato
   `mover rotas/x.py para ...` ou `renomear ... para ...`, e diga quais imports mudam por causa dele.
4. Pare aqui e espere eu responder `pode seguir`. Não altere nenhum arquivo antes disso.
5. Depois da minha autorização, faça só os movimentos da lista, ajuste os imports e me diga
   como conferir: o comando para subir o servidor e o que deve aparecer no `/docs`.

Se a estrutura já estiver certa, diga isso em uma linha e não proponha nada.

Limites obrigatórios:

- Não mude a lógica de nenhuma rota, nem caminho, nem método, nem status code. Só lugar e import.
- Não crie pasta que não está na estrutura acima. Nada de `app/`, `servicos/`, `repositorios/`,
  `models/`, `database/`, `core/` ou `schemas/` em inglês.
- Não crie nem apague `__init__.py`. Organização em pacotes é assunto da aula 4.
- Não use banco de dados, `Depends`, `.env` nem `async def`.
- Não toque na pasta `frontend/`.
- Código, nomes e comentários em português do Brasil.
