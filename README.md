# Slides da UC4: Back-end de Projetos Web

Sistema de slides em HTML das aulas da UC4 (Senac Blumenau · Desenvolvimento Web com IA · turma 2026.10.78).

Publicável direto no **GitHub Pages**: sem build, sem dependência, sem framework.

## Publicar

1. Crie o repositório e suba estes arquivos na raiz.
2. `Settings → Pages → Source: Deploy from a branch`, branch `main`, pasta `/ (root)`.
3. O índice fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

O arquivo `.nojekyll` já está incluído. Sem ele o GitHub Pages ignora pastas que começam com underline e pode atrapalhar assets no futuro.

## Estrutura

```
index.html              índice navegável, montado a partir do manifesto
assets/css/slides.css   o sistema visual inteiro (porte do template_aulas.pptx)
assets/js/aulas.js      MANIFESTO: datas, títulos e ciclos das 18 aulas
assets/js/slides.js     navegação, escala e barra inferior
aulas/aula-01.html      Primeira API com FastAPI
aulas/aula-02.html      Métodos HTTP, status e rotas
aulas/aula-03.html      Validação de dados com Pydantic
```

## Ajustar as datas

Tudo em um lugar só: **`assets/js/aulas.js`**. O índice e a navegação de todas as páginas leem dali.
As datas vieram do calendário do PTD. Confira contra o cronograma da turma.

Para liberar uma aula nova no índice, crie o `aulas/aula-NN.html` e marque `pronto: true` no manifesto.

## Navegar nos slides

| Tecla | Ação |
|---|---|
| `→` `PageDown` `espaço` | próximo slide |
| `←` `PageUp` | slide anterior |
| `Home` / `End` | primeiro / último |
| clique | esquerda volta, direita avança |

O slide tem 1280×720 e é escalado por JS para caber em qualquer projetor sem cortar.
`Ctrl+P` imprime um slide por página, para gerar PDF.

## Criar uma aula nova

Copie um arquivo existente, troque `data-aula="N"` no `<body>` e monte os `<section class="slide">`.
Classes de slide disponíveis:

| Classe | Uso |
|---|---|
| `slide` | fundo claro, padrão |
| `slide escuro` | abertura, recap, momentos de ênfase |
| `slide exercicio` | roxo, atividade prática |

Blocos: `.destaque` (ideia central, azul) · `.alerta` (vermelho) · `.fluxo` + `.passo` (3 passos) ·
`.cartoes.n2/n3/n4` + `.cartao` · `.codigo` + `.arquivo` + `pre` · `.comparacao` + `.lado.ruim/.bom` ·
`.tarefas` + `.tarefa` · `.recap` · `.dica` · `.proximo`.

Destaque de sintaxe: envolva os trechos em `<span class="kw">`, `str`, `com`, `fn`, `num`.

## Sistema visual

Portado do `template_aulas.pptx`.

| Papel | Cor |
|---|---|
| Fundo escuro | `#0F172A` |
| Azul destaque | `#2563EB` |
| Cinza texto | `#334155` |
| Cinza claro | `#E2E8F0` |
| Roxo exercício | `#4F46E5` |
| Vermelho alerta | `#DC2626` |

Tipografia: **Calibri** para texto e **Consolas** para código, com Carlito e JetBrains Mono carregados
do Google Fonts como equivalentes para quem abrir fora do Windows.
