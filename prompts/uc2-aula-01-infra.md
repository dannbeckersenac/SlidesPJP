# Prompt da aula 1 da UC2 · o rascunho do .docs/infra.md

Cole numa conversa nova do seu assistente, com o repositório da cartilha aberto e o `REGRAS.md` da
UC2 na raiz. Ele lê o projeto e escreve o rascunho do `.docs/infra.md`, com `?` no que deduziu.
Só grava depois que você responder `pode seguir`. O rascunho é dele; a conferência é sua.

---

Leia o `REGRAS.md`, a `.docs/` inteira, o `README.md`, o `backend/` (sem `venv/`) e o `frontend/`
(sem `node_modules/`). Quero o rascunho de um arquivo novo, `.docs/infra.md`, que descreve como o meu
projeto sairia da minha máquina para produção. Ainda é desenho: nada de ferramenta nem provedor.

Escreva o rascunho com quatro seções:

1. **Arquitetura de produção.** Um diagrama em Mermaid (`flowchart LR`) com o navegador, o servidor
   web, a API e o banco. Em cada seta, o protocolo ou a porta. Abaixo dele, uma linha por caixa:
   em qual máquina ela roda, em qual porta atende e se fica aberta para a rua ou só para dentro.
2. **Desenvolvimento e produção.** Uma tabela com as linhas API, tela, banco, `.env` e CORS. Na coluna
   de desenvolvimento, o que está no meu projeto hoje. Na de produção, o que precisaria mudar.
3. **O caminho do login.** Do clique no botão de entrar até a resposta, passo a passo. Em cada passo,
   diga em qual máquina aquilo roda: a do usuário ou o servidor.
4. **O que está chumbado.** Todo `localhost` e `127.0.0.1` escrito no código, com arquivo e linha, e
   uma frase sobre o que quebraria em produção por causa dele.

Depois do rascunho, me faça três perguntas que um professor faria na apresentação sobre este arquivo.

Limites obrigatórios:

- Não altere nenhum arquivo de `backend/` nem de `frontend/`. Só a seção 4 olha o código, e só para listar.
- Mostre o rascunho primeiro e espere eu responder `pode seguir` antes de gravar o `.docs/infra.md`.
- Não escolha provedor de nuvem, não escreva `Dockerfile`, configuração de Nginx nem pipeline.
- Não invente peça que o projeto não tem. CDN, balanceador e réplica só entram se eu pedir.
- Marque com `?` toda linha que você deduziu em vez de ter visto no código.
- Não escreva senha, chave do `.env`, token nem IP real em lugar nenhum do arquivo.
