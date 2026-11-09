# Prompt da aula 1 da UC3 · comparar os testes feitos pela API

Abrir uma conversa no assistente com o repositório da própria cartilha e o `REGRAS.md` desta aula
na raiz. Colar este prompt e, no final, as respostas do `testar_ia.py` e do `testar_jangada.py`.
O assistente vai comparar os resultados com o `.docs/ia.md` e sugerir um ajuste na instrução.
O registro só será alterado depois da resposta `pode seguir`. O trabalho é individual.

---

Leia o `REGRAS.md`, a `.docs/` inteira, o `backend/testar_ia.py` e o `backend/testar_jangada.py`. Não
abra o `.env`. No fim desta mensagem estão as respostas que eu obtive: a do `testar_ia.py`, direto
pela API do Google, e a do `testar_jangada.py`, com o pedido do meu `.docs/ia.md`.

Faça nesta ordem:

1. Compare os dois scripts linha a linha e explique o que muda entre pedir direto pelo SDK do Google e
   pedir pelo Jangada. Diga o que o Jangada esconde e o que continua igual.
2. Compare a resposta do pedido do `ia.md` com o que o `ia.md` combinou: o formato, o tamanho e o que a
   IA deveria fazer com uma entrada vaga. Indique o que seguiu o combinado e o que fugiu, citando o
   trecho da resposta.
3. Proponha um ajuste só na instrução de sistema, com o motivo em uma linha. Mostre a instrução
   inteira já ajustada, pronta para eu colar no `testar_jangada.py`. Esperar eu testar de novo antes
   de continuar.
4. Quando eu trouxer o resultado novo, conferir se o ajuste resolveu. Depois de eu responder
   `pode seguir`, registrar no `.docs/ia.md`: a instrução final, a entrada, um resumo da resposta e
   uma diferença entre os dois jeitos de pedir.

Depois, me faça três perguntas que um professor faria na apresentação sobre estes testes.

Limites obrigatórios:

- Não execute os scripts nem chame a API por mim. Quem executa sou eu.
- Não invente resultado. Só registre como feito o teste cuja resposta eu colei.
- Não peça, não leia e não escreva a `GEMINI_API_KEY` nem o `.env`. Se a chave aparecer no que eu
  colar, me avise para apagar e criar outra, sem repetir o valor.
- Não crie fallback, tools, `Agent` nem a pasta `backend/ia/`. Isso é da aula 2.
- Não troque o provedor nem o modelo sem me mostrar o motivo e esperar a minha resposta.
- Use só dados fictícios nas entradas que você sugerir.
- Nas instruções de passo a passo, use verbos no infinitivo.

As respostas dos dois scripts:

