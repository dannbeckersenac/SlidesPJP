# Prompts e regras da UC4

Arquivos que a turma copia ou baixa direto dos slides. Cada aula tem dois tipos:

| Arquivo | O que é | Como chega no aluno |
|---|---|---|
| `aula-NN-regras.md` | O que a IA pode e o que ela não pode usar até aquela aula. Baixa como `REGRAS_AULANN.md` e é salvo como `REGRAS.md` na raiz do repositório do aluno, por cima do anterior. | botão **baixar** no slide |
| `aula-NN-<assunto>.md` | Um prompt pronto para colar no assistente. | botão **copiar** no slide |

No arquivo de prompt, tudo que vem antes da primeira linha de três hifens é explicação para quem
abre o arquivo. O botão copia só o que vem depois dela.

Duas regras ao escrever um arquivo novo aqui:

1. A seção "não use" do `regras` espelha o ledger do `CLAUDE.md`. Tudo que a turma ainda não viu entra nela.
2. Prompt não entrega o exercício pronto. Ele produz rascunho para o aluno revisar, ou questiona o que o aluno escreveu.
3. Todo `regras` tem a seção "Como escrever o código": a IA comenta em português o que gera e, no
   fim, diz o que mudou e como testar. Ela é igual em todas as aulas.
