# Prompt da aula 1 da UC2 · o rascunho do .docs/infra.md

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
UC2 na raiz. Ele lê o projeto e escreve o rascunho do `.docs/infra.md`, com `?` no que deduziu.
Só grava depois que você responder `pode seguir`. O trabalho é individual. Confira cada caixa
e cada endereço antes de salvar.

---

Leia o `REGRAS.md`, a `.docs/` inteira, o `README.md`, o `backend/` (sem `venv/`) e o `frontend/`
(sem `node_modules/`). Quero o rascunho de um arquivo novo, `.docs/infra.md`, que descreve como o meu
projeto sairia da minha máquina para produção. É um plano, não uma descrição de infraestrutura
já publicada. Não escolha ferramentas nem provedor.

Escreva o rascunho com quatro seções:

1. **Arquitetura de produção.** Um diagrama em Mermaid (`flowchart LR`) com o navegador, o servidor
   web, a API e o banco. Em cada seta, o protocolo ou a porta. Abaixo dele, uma linha por caixa:
   em qual máquina ela rodaria, em qual porta atenderia e o que receberia tráfego público. O navegador
   é cliente e não precisa de uma porta de servidor publicada. Considere o servidor web recebendo
   HTTPS na 443 e encaminhando `/api` à API interna na 8000. O MySQL fica interno na 3306.
   No Markdown, envolva o diagrama em um bloco com abertura ```mermaid e fechamento ```.
   Para testar no mermaid.live, explique que devo colar só o conteúdo, começando em `flowchart LR`.
2. **Desenvolvimento e produção.** Uma tabela com as linhas API, tela, banco, `.env` e CORS. Na coluna
   de desenvolvimento, o que está no meu projeto hoje. Na de produção, o que precisaria mudar.
3. **O caminho do login.** Do clique no botão de entrar até a resposta, passo a passo. Em cada passo,
   diga em qual máquina aquilo roda: a do usuário ou o servidor.
4. **O que está chumbado.** Todo `localhost` e `127.0.0.1` escrito no código, com arquivo e linha, e
   uma frase sobre o uso em cada caso. Diferencie um endereço usado pelo navegador de um usado
   no servidor. Não trate toda ocorrência como erro. Não copie valores de arquivos de segredos.

Depois do rascunho, me faça três perguntas que um professor faria na apresentação sobre este arquivo.

Limites obrigatórios:

- O projeto e a entrega são individuais. Não proponha dividir tarefas entre colegas.
- Leia o código para conferir o rascunho, mas não altere `backend/` nem `frontend/`.
- Não abra `.env`, chaves privadas ou arquivos de credenciais. Use apenas `.env.exemplo`, se existir.
- Use a mesma arquitetura no diagrama e na tabela. Com tela e API na mesma origem,
  não invente a necessidade de CORS entre elas.
- Mostre o rascunho primeiro e espere eu responder `pode seguir` antes de gravar o `.docs/infra.md`.
- Não escolha provedor de nuvem, não escreva `Dockerfile`, configuração de Nginx nem pipeline.
- Não invente peça que o projeto não tem. CDN, balanceador e réplica só entram se eu pedir.
- Identifique a arquitetura de produção como proposta. Marque com `?` o que inferir sobre
  o projeto atual sem encontrar evidência no código.
- Não escreva senha, chave do `.env`, token nem IP real em lugar nenhum do arquivo.
