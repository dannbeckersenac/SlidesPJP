# Prompt da aula 10 · atualizar o briefing com a decisão

Cole na mesma conversa depois de discutir a funcionalidade e testar o prompt. Revise as mudanças
antes de responder `pode seguir`. A funcionalidade nova entra como planejada.

---

Leia a `.docs/`, principalmente `ia.md`, e depois `docs/BRIEFING.md`, `docs/CARTILHA.md`,
o README, as rotas do backend e as telas do frontend.
Quero atualizar o briefing para mostrar o sistema atual e a funcionalidade que planejamos.

Faça nesta ordem:

1. Liste brevemente as diferenças entre o briefing e o sistema atual. Separe o que foi feito,
   o que mudou e o que ainda não foi feito. Cite a tela ou a rota quando houver implementação.
2. Pergunte o motivo das mudanças que não estiver documentado. Espere minha resposta;
   não invente justificativas.
3. Proponha duas seções para acrescentar ao briefing:
   - `## O que mudou`: as mudanças confirmadas e seus motivos.
   - `## Funcionalidade planejada com IA`: perfil, problema, funcionamento, entrada, saída,
     confirmação humana e como continuar a tarefa se a IA falhar. Inclua os papéis dos agentes,
     dados e ferramentas acessíveis, o fluxo entre eles quando houver mais de um, e o provedor
     de API proposto. Diferencie decisões confirmadas de opções ainda em discussão.
4. Deixe explícito que a funcionalidade de IA está planejada, sem implementação. Use a decisão
   e os testes do `ia.md`, sem incluir ideias descartadas como requisitos.
5. Espere minha revisão e a resposta `pode seguir`. Depois, atualize `docs/BRIEFING.md` e as
   pendências em `.docs/proximos-passos.md`.

Limites obrigatórios:

- Preserve o briefing original. Acrescente as seções ou atualize-as se já existirem, sem duplicá-las.
- Marque com `?` as suposições que ainda precisam de confirmação.
- Não afirme que algo funciona apenas porque está planejado ou descrito num documento.
- Não escreva segredos, dados pessoais reais ou credenciais nos documentos.
- Não altere código nem o roadmap nesta etapa.
- Responda em português do Brasil.
