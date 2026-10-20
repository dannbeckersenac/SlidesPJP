# Prompt da aula 10 · discutir a funcionalidade

Cole numa conversa nova do assistente, com o repositório aberto e o `REGRAS.md` da aula 10 na raiz.
Responda às perguntas e conduza a discussão até escolher uma ideia. O assistente só registra o
combinado depois da sua revisão.

---

Leia primeiro a `.docs/`, depois `docs/CARTILHA.md`, `docs/BRIEFING.md` e o README.
Quero usar o briefing para visualizar funcionalidades com agentes de IA que agreguem valor
ao projeto, com integração via API de Claude, Gemini, OpenAI ou outro provedor.
Procure oportunidades nos problemas e fluxos descritos no briefing. Se eu trouxer uma ideia,
confronte-a com esse contexto. Foque em funcionalidades cujo funcionamento envolva IA.

Comece resumindo os problemas do briefing em que um agente poderia ajudar. Cite de onde
vieram essas oportunidades. Faça até três perguntas para esclarecer o usuário, o problema
e como ele faz a tarefa hoje.
Espere minhas respostas antes de propor soluções. Não escreva código nem altere arquivos.
Se faltar um documento, peça o contexto que falta em vez de inventar.

Depois das minhas respostas:

1. Proponha duas ou três opções curtas. Para cada uma, diga quem usaria, em qual tela,
   o benefício, o papel do agente e a principal dificuldade. Mostre o fluxo de uso: ação do
   usuário, dados consultados, trabalho da IA e resultado na tela.
2. Me ajude a comparar: resolve um problema real, cabe no fluxo atual e permite conferir
   a resposta antes de gravar? Questione o que ficou grande demais ou pouco claro.
3. Espere eu escolher. Aprofunde a escolhida comigo: o que entra, o que sai, quem confirma
   e como a pessoa continua a tarefa se a IA errar ou não responder.
4. Discuta se basta uma chamada ao modelo, se precisamos de um agente com ferramentas ou
   se há motivo para separar o trabalho entre agentes. Explique a diferença no nosso caso.
   Não chame uma chamada isolada de sistema multiagente. Para cada agente proposto, descreva
   responsabilidade, dados e ferramentas acessíveis, limites e troca de informações.
   Compare as opções de provedor sem inventar disponibilidade, preços ou recursos.
5. Resuma a decisão, o motivo da escolha e a integração prevista com o backend. Marque com `?`
   as suposições ainda não confirmadas.
6. Espere minha revisão e a resposta `pode seguir`. Só então registre a ideia em `.docs/ia.md`,
   preservando o que já existir. Identifique a funcionalidade como planejada.

Limites obrigatórios:

- Não proponha funcionalidades gerais sem IA. Cada opção deve explicar onde a IA agrega valor.
- Não force multiagentes. Justifique a complexidade e a contribuição de cada papel.
- Uma rodada de perguntas por vez. Não responda no meu lugar nem escolha a ideia por mim.
- A regra da cartilha continua no serviço. Uma sugestão da IA precisa de revisão humana.
- Use exemplos fictícios, sem dados pessoais reais, senhas, tokens ou chaves.
- Não instale bibliotecas, não altere código e não implemente a funcionalidade.
- Deixe a atualização do briefing e do roadmap para as próximas etapas.
- Responda em português do Brasil.
