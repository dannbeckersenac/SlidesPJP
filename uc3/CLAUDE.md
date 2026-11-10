# CLAUDE.md da UC3: Desenvolvimento de Software Apoiado por IA

Vale junto com o `CLAUDE.md` da raiz e com o `uc2/CLAUDE.md`. Da raiz vêm o método (dor e solução,
destrinchar), o sistema visual, a escrita dos slides, os prompts e as regras. Este arquivo guarda só o
que é da UC3.

## A unidade

| | |
|---|---|
| Encontros | 04/11 (avaliação da UC2 e da UC4), 09/11 (aula 1), 10/11 (aula 2, encontro da UC6 antecipado de 19/11), 11/11 (Semana do Trabalho 2026, sem aula) e 12/11 (aula 3) |
| Avaliação | 12/11: ajustes até o intervalo e apresentação final do projeto, com ênfase na funcionalidade de IA; pode seguir em 16/11 |

O PTD da UC3 não foi anexado. O plano abaixo é do docente.

## O plano, refeito pelo docente em 09/11/2026

As aulas de IA são "direto ao ponto" na prática: a turma já usa IA para escrever código, e a ênfase é
só a adoção de IA dentro do projeto. A teoria pode ser mais longa; a prática e os materiais, enxutos.

| Aula | Data | Conteúdo |
|---|---|---|
| 1 | 09/11 | Cada aluno cria, na própria conta, a chave do Google AI Studio e a do OpenRouter, as duas grátis, e conhece as plataformas. O primeiro pedido ficou para a aula 2. |
| 2 | 10/11 | O primeiro pedido, direto pela API do Google (`testar_ia.py`) e pelo Jangada (`testar_jangada.py`). Fallback em três níveis: o Gemini grátis, o OpenRouter grátis (`openrouter/free`) e o Claude, pela chave paga do docente, como terceira opção, e o teste do fallback. Tools: prontas do Jangada, nativas do provedor e funções do projeto, com `Agent`. Depois, cada aluno usa o prompt de discussão para planejar e começar a funcionalidade no próprio projeto, na pasta `backend/ia/`. |
| sem aula | 11/11 | Semana do Trabalho 2026 do Senac. No noturno, só o dia 11; participação obrigatória, conta como presença. |
| 3 | 12/11 | Ajustes até o intervalo; depois, as apresentações do projeto com ênfase na funcionalidade de IA, que podem seguir em 16/11. |

Em 16/11 (UC6): fim das apresentações, se preciso, formação dos grupos e inscrição no Hackathon,
boas práticas para o evento e sorteio dos temas da temporada de simulados (as frentes de atuação do
Senac). A prática da UC6 é a simulação e a prototipação de um projeto em grupos, com a sala dividida
em dois lados, no tema do Hackathon.

Os rascunhos do plano anterior (aulas de camadas e 503, tela e Vercel, entrega curta) ficam em
`uc3/rascunhos/`, fora do Git e fora do manifesto.

## A chave e a idade

Os termos da API do Gemini (em vigor desde 23/03/2026) exigem 18 anos e valem também para o AI
Studio. Há alunos de 17 na turma. Decisão do docente: o slide só ensina a criar a chave; se houver
menores presentes, o docente cria a chave na conta dele. O slide diz apenas "Quem não conseguir criar
a conta recebe a chave com o professor". A cota do plano grátis é por projeto, não por chave: chaves
do mesmo projeto dividem o limite.

## Onde ficam os arquivos

- Slides em `uc3/aula-NN.html`, com `<body data-uc="3" data-aula="N">`.
- Manifesto em `window.UC3`, no `assets/js/aulas.js`, com `aulas` e `semAula` (o 04/11). O
  `slides.js` lê `window["UC" + data-uc]`. O índice tem a aba `#uc3`, que abre por padrão depois que
  a aula 1 da UC3 começa.
- Prompts em `prompts/uc3-aula-NN-*.md`. O `regras` baixa como `REGRAS_UC3_AULAN.md` e é cumulativo
  a partir do `uc2-aula-05-regras.md`.

## Ledger

| Aula | Introduz |
|---|---|
| 1 | modelo de linguagem (continua o texto, só sabe o que recebe, erra com confiança, varia); chat e API; modelo, instrução de sistema, entrada e resposta; a chave e a cota por projeto; o AI Studio (Playground, Get code, limites); o OpenRouter (muitos modelos, uma chave, `openrouter/free`, 20 por minuto e 50 por dia sem créditos); o plano grátis usa os dados (só dados fictícios); `GEMINI_API_KEY` e `OPENROUTER_API_KEY` no `.env`, lidas no `configuracao.py` |
| 2 | `google-genai` com `cliente.interactions.create`; cada SDK tem o seu jeito; o orquestrador Jangada (`jangada-ai[gemini,openai,anthropic]`, `LLM`, `complete(..., system=)`, `.text`, `.provider`); fallback em três níveis com `with_fallback(openrouter, claude)` (quando entra e quando não entra); a chave paga do Claude (`ANTHROPIC_API_KEY`, `chave_do_claude`); a pasta `backend/ia/` (`modelos.py`, `ferramentas.py`, a funcionalidade); tool como função que a IA pede e o backend roda; prontas do Jangada, nativas do provedor (`web_search()`) e funções do projeto com tipos e docstring; `Agent(llm, role=, goal=, tools=).run(...)`; a rota `POST` que chama a `ia/` e devolve 503; tool só lê ou calcula; o prompt de discussão e plano |
| 3 | sem conteúdo novo: conferência, roteiro da apresentação, entrega e comparação dos dois colegas de cada cartilha |

Fora da UC3, de propósito: streaming, conversa com memória, vários agentes (`Squad`, `Flow`, `Graph`),
MCP, RAG, `async def`, LangChain e afins, SDK de provedor no front.

## Testado na montagem da aula 1 (03/11/2026)

`google-genai` 2.33, Python 3.10, sem chave válida.

- `client.interactions.create` aceita `model`, `input` e `system_instruction` (e também
  `response_format`, `stream`, `tools`, `store`, `previous_interaction_id`). A resposta tem `.output_text`.
- Sem chave (`GEMINI_API_KEY=` vazio): `ValueError: No API key was provided...`, já no `genai.Client`.
- Chave errada: `BadRequestError: Error code: 400 ... 'API key not valid. Please pass a valid API key.'`
- O `testar_ia.py` dos slides roda até a chamada à API.
- **Não testado (sem chave válida):** a resposta real, o nome `gemini-3.8-flash` aceito pela API, o
  429 do limite e o tempo de resposta. O nome do modelo e o `interactions.create` vêm do guia oficial
  de primeiros passos, conferido em 03/11.

## Testado na montagem das aulas 2 a 4 (07 e 08/11/2026)

Sem chave válida. Um servidor falso imita a API de interações do Gemini (`/v1beta/interactions`,
resposta com `steps` de tipo `model_output`), apontado pelo `http_options={"base_url": ...}` do cliente.
`google-genai` 2.33, FastAPI 0.162, `sentry-sdk` 2.74, Vite 8 com React 19.

- O `response_format` sai no pedido como `{"type": "text", "mime_type": "application/json", "schema": ...}`.
  O `Field(max_length=6)` da lista vira `maxItems: 6`. O guia oficial de saída estruturada usa o mesmo
  formato, com `model_json_schema()` e `model_validate_json(interaction.output_text)`, e diz que
  `minLength` e `maxLength` de texto não são impostos.
- Rota da aula 2 contra o servidor falso: resposta certa dá 200 com as etapas; texto fora do JSON dá 503;
  429 dá 503; tarefa inexistente dá 404. O SDK repete o 429 sozinho (quatro pedidos chegaram) e, com
  `timeout=3`, desiste em cerca de 3 segundos, tanto no 429 quanto na resposta lenta.
- Os erros da API de interações são de `google.genai._gaos.lib.compat_errors` (`RateLimitError`,
  `APITimeoutError`, `BadRequestError`) e não herdam de `google.genai.errors.APIError`. Por isso o
  serviço usa `except Exception`, com o `try` curto.
- Com o Sentry da UC2, o 503 da IA chega sozinho, com a causa (`RateLimitError`) encadeada, e a
  descrição enviada à IA não vai junto. Um `capture_exception` no `except` duplicaria o evento.
- O componente React montado com os trechos dos slides 7 a 11 da aula 3 compila e funciona contra a
  rota: a lista, o "adicionar", a frase do 503 e o texto da entrada vaga.
- **Não testado:** a resposta real do Gemini à saída estruturada, o tempo real de resposta e a
  funcionalidade na Vercel.

## Testado na montagem do plano novo (09/11/2026)

`jangada-ai` 1.14.1 (com `google-genai` 2.33 e `anthropic` 2.7), sem chaves válidas. Gemini e Claude
falsos, apontados pelos `http_options` e `base_url` que o Jangada repassa aos SDKs. O adaptador do Gemini
no Jangada usa `generate_content`, e não a API de interações.

- Fallback com `gemini.with_fallback(claude)`: Gemini de pé responde em 0,4 s; 429 vai ao Claude depois
  das novas tentativas (3,1 s); modelo inexistente (404) vai ao Claude direto (1,2 s); chave inválida
  (400) devolve erro, sem Claude. `resposta.provider` e `resposta.model` dizem quem respondeu.
- O Jangada trata o Claude Opus 5.5, que recusa tool forçada: troca por `tool_choice="auto"`.
- `Agent` com `tools=[dias_ate, feriados_nacionais]`: as duas tools são declaradas, a IA pede a
  `dias_ate`, o backend roda e devolve o resultado. `consultar_cep` funcionou de verdade (Blumenau).
- `web_search()` vai ao Gemini como `googleSearch`. Função comum vira tool pelos tipos e pela docstring.
- `complete(entrada, system=INSTRUCAO)` manda a instrução como `systemInstruction`.
- A rota que chama `ia.sugestao` devolve 200 com a sugestão e 503 com a frase quando nada responde.
- OpenRouter (10/11): o Jangada fala com ele pelo SDK da OpenAI (`jangada-ai[openai]`), em
  `/api/v1/chat/completions`, com `OPENROUTER_API_KEY`. `gemini.with_fallback(openrouter, claude)`:
  Gemini de pé responde; modelo do Gemini inexistente faz o `openrouter/free` responder (2,0 s); com o
  OpenRouter também dando 429, o Claude responde (10,2 s, pelas novas tentativas de cada nível).
- **Não testado:** respostas reais do Gemini, do OpenRouter e do Claude, quais modelos grátis o
  `openrouter/free` escolhe, a busca do Google no plano grátis, o custo real da reserva e os nomes dos
  botões do AI Studio e do OpenRouter.

## Fontes

- Jangada, primeiros passos: https://docs.jangada.dev.br/docs/getting-started
- Jangada, provedores e chaves: https://docs.jangada.dev.br/docs/providers
- Jangada, retry e fallback: https://docs.jangada.dev.br/docs/retry-fallback
- Jangada, tools: https://docs.jangada.dev.br/docs/tools
- OpenRouter, limites dos modelos grátis: https://openrouter.ai/docs/api-reference/limits
- OpenRouter, roteador grátis: https://openrouter.ai/docs/guides/routing/routers/free-router

- Saída estruturada: https://ai.google.dev/gemini-api/docs/structured-output
- Solução de problemas (repetição automática do SDK): https://ai.google.dev/gemini-api/docs/troubleshooting
- Termos adicionais da API do Gemini: https://ai.google.dev/gemini-api/terms
- Primeiros passos: https://ai.google.dev/gemini-api/docs/get-started
- Limites de uso (por projeto): https://ai.google.dev/gemini-api/docs/rate-limits
- Chave de API: https://ai.google.dev/gemini-api/docs/api-key
- Países atendidos (Brasil incluído): https://ai.google.dev/gemini-api/docs/available-regions
