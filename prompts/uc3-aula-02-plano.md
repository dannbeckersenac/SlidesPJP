# Prompt da aula 2 da UC3 · discutir e planejar a funcionalidade de IA no projeto

Abrir o repositório da própria cartilha no assistente, com o `REGRAS.md` desta aula na raiz.
Colar este prompt. O assistente vai ler o projeto e perguntar o que falta definir antes de montar
o plano. O código só começa depois da resposta `pode seguir`, um passo por vez. O trabalho é individual.

---

Leia o `REGRAS.md`, a `.docs/` inteira (principalmente o `ia.md` e o `roadmap.md`), o `docs/BRIEFING.md`,
o `backend/` (sem `venv/`) e o `frontend/` (sem `node_modules/` e sem `dist/`). Leia também o
`backend/testar_jangada.py`. Não abra o `.env`.

Quero implementar a funcionalidade planejada no `ia.md`. Vou usar o Jangada com o Gemini como
principal, o OpenRouter grátis como primeira reserva e o Claude pago como terceira opção.
Quero escolher as tools conforme a necessidade do projeto. Antes do código, vamos discutir o plano.

Faça nesta ordem:

1. Resumir em até cinco linhas a funcionalidade do `ia.md`: quem usa, em qual tela, o que a IA recebe
   e o que devolve. Indicar o que o código atual já tem para ela (rota, registro, tela) e o que falta.
2. Fazer até três perguntas sobre o que não ficou claro. Esperar minhas respostas.
3. Discutir quais tools ajudam na funcionalidade. Considerar:
   - uma tool pronta do Jangada (`jangada_ai.prebuilt`), e qual;
   - a busca na web nativa (`web_search()`), e o que ela custa em cota;
   - uma função do meu projeto, que lê ou calcula um dado do sistema.
   Explicar o que cada opção permite fazer e quais cuidados exige. Se nenhuma servir, explicar
   o motivo. Esperar minha escolha antes de continuar.
4. Montar o plano em passos pequenos, com um teste para cada passo. Incluir:
   - a pasta `backend/ia/` com `__init__.py`, `modelos.py` (o Gemini, o OpenRouter, o
     Claude e o `with_fallback`), `ferramentas.py` (as tools escolhidas) e o arquivo da funcionalidade
     (a `INSTRUCAO` e a função que chama a IA);
   - a rota `POST` que chama a função da `ia/`, sem gravar nada, com 503 e uma frase quando nada
     responder;
   - na tela, o botão, a espera, o erro e o resultado, com a pessoa conferindo antes de gravar pela
     rota que o projeto já tem;
   - como testar o fallback com um nome de modelo inexistente no Gemini e conferir qual reserva respondeu.
5. Esperar minha resposta `pode seguir`. Implementar um passo por vez e esperar eu testar
   antes de pedir a próxima confirmação.
6. Ao final, registrar no `.docs/ia.md` o plano, as tools escolhidas e o motivo, e no `.docs/arquitetura.md`
   a pasta `backend/ia/`.

Depois, fazer três perguntas que um professor faria na apresentação sobre o plano.

Limites obrigatórios:

- Todo código de IA fica em `backend/ia/`. A rota só chama uma função de lá.
- Use o Jangada para falar com os provedores. Não use o SDK do Google nem o da Anthropic direto no projeto.
- Tool só lê ou calcula. Ela não grava, não apaga e não envia nada para fora sem a pessoa conferir.
- Não grave no banco o que a IA devolveu sem a pessoa escolher antes.
- Não altere a regra da cartilha, os modelos nem as migrations por causa da IA.
- Não use streaming, vários agentes (`Squad`, `Flow`, `Graph`), MCP, RAG, `async def`, LangChain ou outro orquestrador.
- Não peça, não leia e não escreva a `GEMINI_API_KEY`, a `OPENROUTER_API_KEY`, a `ANTHROPIC_API_KEY`
  nem o `.env`.
- Use só dados fictícios nos exemplos e nos testes.
- Comente em português cada trecho que você criar, dizendo o que faz e por quê.
- Nas instruções de passo a passo, use verbos no infinitivo.
