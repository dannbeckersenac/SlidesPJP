# Prompt da aula 10 · construir o pedido da funcionalidade

Cole na conversa depois de escolher a ideia. O assistente ajuda a escrever o pedido que a futura
funcionalidade usaria como instrução do agente. As instruções serão testadas num chat.

---

Use a ideia que discutimos e o registro em `.docs/ia.md`. Quero construir o prompt que essa
funcionalidade enviaria à IA, sem implementar nada ainda.

1. Se faltar informação sobre a entrada, a saída ou os limites, pergunte antes de escrever.
   Espere minha resposta. Não invente regras do negócio.
2. Defina o papel de cada agente, os dados recebidos, as ferramentas previstas e os limites
   de ação. Se houver vários agentes, diga o que um entrega ao outro e quem encerra o fluxo.
   Proponha instruções curtas, prontas para copiar, com contexto, tarefa, formato da resposta
   e o que fazer quando a entrada for vaga ou estiver fora do assunto.
3. Explique em uma linha a função de cada parte. Use um exemplo fictício como entrada,
   separado das instruções para eu conseguir trocá-lo nos testes.
4. Sugira três entradas de teste: uma normal, uma vaga e uma fora do assunto. Para cada uma,
   diga o que precisamos observar. Não apresente uma resposta imaginada como teste realizado.
5. Espere minha revisão. Depois de `pode seguir`, registre o prompt e as entradas em `.docs/ia.md`.
   Deixe os resultados como pendentes até eu trazer as respostas do chat.

Quando eu trouxer os resultados, compare com o que combinamos. Pergunte o que não ficou claro,
proponha um ajuste específico e explique o motivo. Depois da minha revisão, atualize o prompt
no mesmo arquivo. Só registre um teste como realizado quando eu fornecer o resultado.

Limites obrigatórios:

- Construa as instruções; não execute a tarefa no lugar do chat em que farei o teste.
- O teste manual avalia as instruções. Não afirme que ele valida a integração via API,
  a execução das ferramentas ou a coordenação dos agentes; esses testes ficam no roadmap.
- Não prometa que uma instrução impede todos os erros. O resultado precisa ser conferido.
- Use apenas dados fictícios. Não peça segredos ou dados pessoais reais.
- Não altere código, não instale nada e não implemente a integração.
- Preserve os registros existentes e diferencie testes pendentes de testes realizados.
- Responda em português do Brasil.
