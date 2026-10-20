# Prompt da aula 10 · colocar a funcionalidade no roadmap

Cole ao final, depois de revisar o briefing e registrar o prompt com os testes em `.docs/ia.md`.
Confira o plano antes de responder `pode seguir`. A implementação fica para depois.

---

Leia a `.docs/`, principalmente `ia.md`, `arquitetura.md` e `roadmap.md`, e o `docs/BRIEFING.md`
atualizado. Transforme a funcionalidade que escolhemos em um plano de implementação.

1. Resuma o MVP: qual usuário ele ajuda e o mínimo que precisa funcionar. Separe as melhorias
   que podem esperar, sem inventar fases só para aumentar o plano.
2. Proponha uma seção `## Módulo de IA` para `.docs/roadmap.md`. Liste as tarefas do MVP em ordem,
   com o que fazer, a parte do projeto afetada e como verificar o resultado. Use os nomes dos
   arquivos existentes; marque caminhos novos como propostas.
3. Inclua o acesso pelo perfil correto, a montagem do pedido no serviço, a chamada ao provedor,
   a revisão da resposta pelo usuário e o comportamento da tela se a IA errar ou não responder.
   Use o provedor discutido: Claude, Gemini, OpenAI ou outro. Se a escolha estiver pendente,
   inclua uma tarefa para comparar as opções, sem fixar modelos, preços ou limites por suposição.
   Planeje os dados e ferramentas disponíveis para cada agente. Se houver vários, inclua
   a troca de informações, a ordem de execução, os limites de tentativas e a revisão do resultado.
   Separe os testes das instruções dos testes de integração com a API e as ferramentas.
   Planeje a chave no ambiente do backend e apenas o nome da variável, sem valor, no `.env.exemplo`.
4. Liste separadamente as melhorias futuras e as dúvidas que ainda impedem alguma decisão.
   Se faltar informação para planejar, pergunte antes de assumir.
5. Espere minha revisão e a resposta `pode seguir`. Depois, acrescente ou atualize a seção no
   `.docs/roadmap.md`, preservando o restante e sem duplicar tarefas. Atualize o
   `.docs/proximos-passos.md` com as pendências de preparação da apresentação.

Limites obrigatórios:

- A funcionalidade continua planejada. Não escreva código, não instale nada e não gere chave.
- Mantenha o MVP pequeno. O que não é necessário para testar a ideia fica nas melhorias futuras.
- Use o prompt revisado e os resultados reais dos testes; não invente testes bem-sucedidos.
- Nunca registre senhas, tokens, chaves ou dados pessoais reais.
- Responda em português do Brasil.
