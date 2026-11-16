# Prompt da aula 3 da UC3 · refletir, discutir e aprovar o plano da funcionalidade de IA

Abrir uma conversa nova no assistente com o repositório da própria cartilha e o `REGRAS.md` da aula 2
da UC3 na raiz. Colar este prompt. O assistente conduz cinco etapas, uma por vez, e só passa para a
próxima depois da resposta `pode seguir`. Até a etapa 5, nenhum código é escrito. O plano da etapa 4
precisa do visto do professor antes do código. O trabalho é individual.

---

Leia o `REGRAS.md`, a `.docs/` inteira (principalmente o `ia.md`) e o `backend/` (sem `venv/`). Não abra o
`.env`.

Quero refletir sobre o que aprendi nas aulas de IA e depois planejar, com você, a funcionalidade de IA
do meu projeto, com o Jangada, tudo dentro de `backend/ia/`. Conduza as cinco etapas abaixo, uma de
cada vez. No fim de cada etapa, pare e espere eu responder `pode seguir`. Até a etapa 5, não escreva
código e não altere arquivos.

Etapa 1 · Refletir. Faça uma pergunta por vez e espere a minha resposta antes da próxima:
1. Qual a diferença entre usar a IA pelo chat e pela API?
2. O que muda entre chamar o SDK do Google direto e chamar pelo Jangada?
3. O que é o fallback? Quando o OpenRouter e o Claude entram, e quando não entram?
4. O que é uma tool, e quem roda a função: a IA ou o meu backend?
5. Onde as chaves ficam, e onde elas nunca podem ficar?
Depois de cada resposta, diga em uma linha o que eu acertei e o que faltou. No fim, aponte os dois
conceitos que eu expliquei pior.

Etapa 2 · O MVP de IA:
1. Resuma em até cinco linhas a funcionalidade do `.docs/ia.md`: quem usa, em qual tela, o que a IA
   recebe e o que devolve.
2. Faça até três perguntas sobre o que não ficou claro e espere as minhas respostas.
3. Proponha o MVP de IA: o menor recorte que entrega valor para a persona e que eu consigo terminar e
   demonstrar. Diga o que entra, o que fica fora e por quê.
4. Escreva três critérios de pronto que eu consiga conferir na tela.

Etapa 3 · Como fazer tecnicamente. Discuta uma decisão por vez e espere a minha escolha:
1. Uma chamada simples (`llm.complete`) ou um `Agent` com tools? Explique a diferença no meu caso e o
   que cada um custa.
2. Se houver tools: quais? Uma pronta do Jangada, a busca nativa do provedor ou uma função do meu
   projeto. Diga o que a IA ganha e o risco de cada uma. Tool só lê ou calcula.
3. O fallback: o Gemini grátis, o OpenRouter grátis (`openrouter/free`) e o Claude pago como terceira
   opção. Confirme que isso cobre o meu caso, ou diga por que não.
4. A entrada e a saída: quais campos do meu sistema vão para a IA, e o que volta para a tela.
5. O que acontece quando nenhuma das três opções responde: o que a rota devolve e o que a tela mostra.
Ao final, resuma as decisões numa tabela com decisão, escolha e motivo. Marque com `?` o que for suposição.

Etapa 4 · O plano de construção:
- os arquivos em `backend/ia/`: `__init__.py`, `modelos.py` (os três modelos e o `with_fallback`),
  `ferramentas.py` (se houver tools) e o arquivo da funcionalidade (a `INSTRUCAO` e a função);
- a rota `POST` que só chama a função da `ia/`, sem gravar nada, com 503 e uma frase quando nada responde;
- na tela: o botão, a espera, o erro e o resultado, com a pessoa conferindo antes de gravar;
- para cada passo: o que muda, em qual arquivo e como eu testo, com o que deve aparecer;
- um passo para testar o fallback com um nome de modelo do Gemini que não existe;
- dois riscos do plano e como eu percebo se acontecerem.
Depois de eu responder `pode seguir`, registre o plano no `.docs/ia.md`. Lembre que eu preciso mostrar o
plano ao professor antes da etapa 5.

Etapa 5 · Construir. Implemente um passo do plano por vez. Comente o código em português, dizendo o
que faz e por quê. Depois de cada passo, diga como testar e pare. Eu testo e respondo `pode seguir`
para o próximo. Se um passo exigir mexer fora de `backend/ia/`, além da rota e da tela previstas,
avise antes.

No fim, me faça três perguntas que um professor faria na apresentação sobre a funcionalidade.

Limites obrigatórios:

- Uma etapa por vez. Não pule etapas e não responda no meu lugar.
- Todo código de IA fica em `backend/ia/`. A rota só chama uma função de lá.
- Use o Jangada para falar com os provedores. Não use SDK de provedor direto no projeto.
- Tool só lê ou calcula. Ela não grava, não apaga e não envia nada para fora sem a pessoa conferir.
- Não grave no banco o que a IA devolveu sem a pessoa escolher antes.
- Não use streaming, vários agentes (`Squad`, `Flow`, `Graph`), MCP, RAG, `async def`, LangChain ou outro
  orquestrador.
- Não peça, não leia e não escreva a `GEMINI_API_KEY`, a `OPENROUTER_API_KEY`, a `ANTHROPIC_API_KEY` nem o `.env`.
- Use só dados fictícios nos exemplos e nos testes.
- Nas instruções de passo a passo, use verbos no infinitivo.
