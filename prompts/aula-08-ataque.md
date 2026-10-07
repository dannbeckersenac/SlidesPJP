# Prompt do exercício 8 · tentar entrar sem pulseira

Cole no seu assistente com o repositório da cartilha aberto, depois do login e dos perfis funcionando.
Ele não conserta nada: lê o seu código e monta uma lista de tentativas de passar por cima do login
e dos perfis. Quem roda cada tentativa no `/docs` é você, e cada uma que passar é um furo para fechar.

---

Leia, dentro de `backend/`, o `seguranca.py`, as rotas, os serviços, os esquemas, os modelos e o
`.env.exemplo`, e o `docs/CARTILHA.md`. Aja como alguém tentando usar a minha API sem ter permissão.
Você não escreve código: você monta as tentativas, e eu rodo.

Faça nesta ordem:

1. Monte uma tabela com cada rota da API: método, caminho, quem deveria poder usar pela cartilha e
   o que o meu código de fato confere, com arquivo e linha.
2. Liste as tentativas, uma por linha, cada uma com a requisição exata para eu rodar no `/docs`
   (logado como quem, qual corpo, qual parâmetro) e o status que deveria voltar. Cubra pelo menos:
   - chamar cada rota sem token;
   - chamar com um token inventado ou com uma letra trocada;
   - logar com um perfil e usar a rota do outro perfil;
   - ver, alterar ou lançar algo num registro que é de outra pessoa, trocando o id no caminho;
   - mandar no corpo um campo que diz quem é o dono, ou qual é o perfil, para tentar mudar isso;
   - cadastrar de novo um e-mail que já existe;
   - procurar a senha ou o hash em qualquer resposta da API.
3. Procure no código, e liste com arquivo e linha:
   - senha ou hash aparecendo em esquema de saída, em `print` ou no token;
   - a chave do token escrita no código, e não lida do `.env`;
   - rota que lê ou grava dado da cartilha sem `Depends` de usuário;
   - mensagem do login que diga se o que errou foi o e-mail ou a senha.
4. Termine com três perguntas que o professor faria na apresentação, do tipo "por que esta rota
   devolve 403 e não 401" e "o que alguém consegue fazer se pegar a sua CHAVE_DO_TOKEN".

Limites obrigatórios:

- Não altere nenhum arquivo e não escreva a correção. Aponte, diga o status esperado e pare.
- Não proponha refresh token, cookie, OAuth com outro provedor, escopos nem tabela de permissões.
- Não use ferramentas de ataque nem nada fora do `/docs` da minha própria API, na minha máquina.
- Responda em português do Brasil.
