# Regras do projeto para a IA

Atualizado até a **aula 3** da UC4. Salve na raiz do seu repositório com o nome `REGRAS.md`,
por cima do arquivo da aula anterior. Só vale a versão mais nova.

## O projeto

- Duas pastas na raiz: `backend/`, com a API em FastAPI, e `frontend/`, com o React da UC5.
- O `frontend/` só muda onde ele busca os dados.
- Código, nomes de variáveis, comentários e respostas sempre em português do Brasil.
- Persona atendida: descreva aqui, em uma linha, a sua e a dor dela.

## O que já foi visto, e pode usar

- `venv`, `fastapi dev main.py`, `/docs`, rotas com `def` comum.
- Os quatro métodos, status 200, 201, 404 e 422, `HTTPException`, `APIRouter`.
- Parâmetro de caminho e de consulta, com tipo declarado.
- Pydantic: `BaseModel`, `Field` com restrições, modelo de entrada diferente do de saída.
- `response_model` e `status_code=201` no decorador.
- CORS liberado apenas para o endereço exato do meu front.

## O que ainda não foi visto, e não deve aparecer

- Banco de dados, SQL, SQLAlchemy ou qualquer ORM. Os dados ficam em lista na memória.
- Separação em camadas, `Depends`, arquivo `.env`.
- Autenticação, login, JWT, hash de senha.
- `allow_origins=["*"]`. Isso é erro, e foi apresentado como erro em aula.
- `async def`. Use `def` normal.

## Como responder

- Uma coisa por vez. Não adiante etapa que eu não pedi.
- Se a tarefa exigir algo da lista de cima, avise antes de escrever código e proponha a versão simples.
- Justifique cada decisão em uma linha. Eu preciso conseguir defender esse código na arguição.
