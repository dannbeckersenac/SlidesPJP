# Prompt da aula 9 · o README de entrega

Cole no seu assistente com o repositório da cartilha aberto. Ele compara o seu `README.md` com as
seções do README de entrega, mostra o que falta e para. Antes de autorizar, confira no `/docs` cada
rota e cada status que ele listar.

---

Leia o `README.md` da raiz, `docs/CARTILHA.md`, a `.docs/` se existir, o `backend/` (sem `venv/`) e
o `package.json` do `frontend/`. Quero transformar o meu README no README de entrega do projeto.
Ele é o primeiro arquivo que o professor abre, e precisa deixar qualquer pessoa rodar o projeto do zero.

O README de entrega tem estas seções, nesta ordem:

1. **O que é**: o problema em uma frase, e os perfis que usam o sistema.
2. **Como rodar o back**: criar o ambiente virtual, instalar as dependências, criar o `.env` a partir
   do `.env.exemplo` e subir com `fastapi dev main.py`.
3. **Banco do zero**: criar o banco no MySQL, `python criar_tabelas.py` e `alembic stamp head`. E,
   para quem já tem o banco, `alembic upgrade head`.
4. **Como rodar o front**: `npm install` e `npm run dev`, e o endereço que abre.
5. **Para testar**: como cadastrar um usuário de cada perfil pelo `/docs`, com um e-mail e uma senha
   só de teste.
6. **As rotas**: uma tabela com método, caminho, o que faz, quem pode usar, o status de sucesso e o
   status de cada recusa.
7. **A regra**: a regra da cartilha em até cinco linhas, com cada recusa e o status.
8. **Estrutura**: as pastas do backend em uma árvore curta, e um link para a `.docs/`.

Faça nesta ordem:

1. Para cada seção, diga se o meu README já tem, tem pela metade, ou não tem.
2. Escreva, na resposta, o rascunho do README completo. Marque com `?` no fim da linha tudo que você
   deduziu sem ver no código: um comando, um status, quem pode usar uma rota.
3. Liste as requisições que eu devo disparar no `/docs` para conferir cada status de erro da tabela.
4. Pare aqui e espere eu responder `pode seguir`. Não altere nenhum arquivo antes disso.
5. Depois da minha autorização, grave o README com as minhas correções, mantendo os `?` que eu não
   tirar.

Limites obrigatórios:

- Não liste status que a rota não devolve, nem comando que não existe no projeto.
- Não escreva senha de verdade, valor do `.env` nem chave. Senha de teste, só como exemplo.
- Não altere código, nem nenhum arquivo além do `README.md`.
- Texto em português do Brasil.
