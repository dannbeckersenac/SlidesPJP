/* ============================================================
   Navegação dos slides.
   ← →  ou  PageUp/PageDown  ou  espaço   trocam de slide
   Home / End                             primeiro / último
   Clique nas metades da tela             anterior / próximo
   ============================================================ */

(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  var atual = 0;
  var total = slides.length;
  var aulaAtual = Number(document.body.dataset.aula || 0);

  /* ----- escala: mantém o slide 1280x720 inteiro na tela ----- */
  function escalar() {
    var margem = 70; /* espaço da barra inferior */
    var fx = window.innerWidth / 1280;
    var fy = (window.innerHeight - margem) / 720;
    var f = Math.min(fx, fy);
    slides.forEach(function (s) { s.style.transform = "scale(" + f + ")"; });
  }

  function mostrar(i) {
    atual = Math.max(0, Math.min(total - 1, i));
    slides.forEach(function (s, k) { s.classList.toggle("ativo", k === atual); });
    var c = document.getElementById("contador");
    if (c) c.textContent = (atual + 1) + " / " + total;
    if (history.replaceState) history.replaceState(null, "", "#" + (atual + 1));
  }

  function proximo() { mostrar(atual + 1); }
  function anterior() { mostrar(atual - 1); }

  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "SELECT") return;
    switch (e.key) {
      case "ArrowRight": case "PageDown": case " ": proximo(); e.preventDefault(); break;
      case "ArrowLeft":  case "PageUp":            anterior(); e.preventDefault(); break;
      case "Home": mostrar(0); e.preventDefault(); break;
      case "End":  mostrar(total - 1); e.preventDefault(); break;
    }
  });

  document.querySelector(".palco").addEventListener("click", function (e) {
    if (e.target.closest(".acoes")) return; /* botão de prompt não troca de slide */
    if (e.clientX < window.innerWidth * 0.32) anterior(); else proximo();
  });

  /* ----- botões de copiar prompt -----
     O texto vive no arquivo .md apontado por data-copiar. O botão busca,
     copia e avisa. Se o navegador bloquear a busca, abre o arquivo. ----- */
  function avisar(botao, texto) {
    var original = botao.dataset.rotulo || botao.textContent;
    botao.dataset.rotulo = original;
    botao.textContent = texto;
    botao.classList.add("feito");
    setTimeout(function () {
      botao.textContent = original;
      botao.classList.remove("feito");
    }, 2500);
  }

  function paraArea(texto) {
    var t = document.createElement("textarea");
    t.value = texto;
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (erro) { ok = false; }
    document.body.removeChild(t);
    return ok;
  }

  /* o cabeçalho do arquivo .md é explicação para quem abre o arquivo.
     O que vai para a área de transferência é só o que vem depois da
     primeira linha de três hifens. */
  function corpoDoPrompt(texto) {
    var corte = texto.match(/^-{3,}[ \t]*$/m);
    return corte ? texto.slice(corte.index + corte[0].length).trim() : texto.trim();
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-copiar]"), function (botao) {
    var url = botao.dataset.copiar;
    var texto = null;

    /* busca o prompt já no carregamento: na hora do clique a cópia é
       imediata, e o navegador não recusa por falta de clique recente. */
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) { texto = corpoDoPrompt(t); }).catch(function () { texto = null; });

    botao.addEventListener("click", function () {
      if (!texto) { window.open(url, "_blank"); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(function () {
          avisar(botao, "copiado");
        }, function () {
          if (paraArea(texto)) avisar(botao, "copiado"); else window.open(url, "_blank");
        });
        return;
      }
      if (paraArea(texto)) avisar(botao, "copiado"); else window.open(url, "_blank");
    });
  });

  window.addEventListener("resize", escalar);

  /* ----- rodapé de cada slide -----
     A capa mantém o rodapé escrito no HTML. Todos os outros recebem
     a paginação à esquerda e a identificação da aula à direita. ----- */
  function rodapes() {
    var meta = (window.AULAS || []).filter(function (a) { return a.n === aulaAtual; })[0] || {};
    var etiqueta = "Aula " + String(aulaAtual).padStart(2, "0") +
                   (meta.ciclo ? " · Ciclo " + meta.ciclo : "");
    slides.forEach(function (s, k) {
      if (k === 0) return;
      var r = s.querySelector(".rodape");
      if (!r) return;
      r.innerHTML = "<span>" + (k + 1) + "/" + total + "</span>" +
                    "<span>" + etiqueta + "</span>";
    });
  }

  /* ----- barra inferior -----
     O seletor e as setas listam só as aulas já liberadas. Quem decide é
     o window.liberada de aulas.js, que respeita a data e o modo docente. ----- */
  var barra = document.getElementById("barra");
  if (barra && window.AULAS) {
    var meta = window.AULAS.filter(function (a) { return a.n === aulaAtual; })[0] || {};
    var abertas = window.AULAS.filter(function (a) {
      return window.liberada ? window.liberada(a) : a.pronto;
    });
    var idx = abertas.map(function (a) { return a.n; }).indexOf(aulaAtual);
    var pad = function (n) { return String(n).padStart(2, "0"); };

    var seletor = abertas.map(function (a) {
      return '<option value="aula-' + pad(a.n) + '.html"' + (a.n === aulaAtual ? " selected" : "") +
             ">Aula " + pad(a.n) + " · " + a.titulo + "</option>";
    }).join("");

    barra.innerHTML =
      '<span class="titulo">Aula ' + pad(aulaAtual) + " · " + (meta.titulo || "") + "</span>" +
      (seletor ? '<select id="ir" aria-label="Ir para outra aula">' + seletor + "</select>" : "") +
      (idx > 0 ? '<a href="aula-' + pad(abertas[idx - 1].n) + '.html">← aula anterior</a>' : "") +
      (idx > -1 && idx < abertas.length - 1 ? '<a href="aula-' + pad(abertas[idx + 1].n) + '.html">próxima aula →</a>' : "") +
      (window.PREVIEW ? "" : '<a href="../index.html">índice</a>') +
      '<span class="contador" id="contador"></span>';

    var ir = document.getElementById("ir");
    if (ir) ir.addEventListener("change", function (e) { window.location.href = e.target.value; });
  }

  rodapes();
  escalar();
  var inicial = parseInt(window.location.hash.replace("#", ""), 10);
  mostrar(isNaN(inicial) ? 0 : inicial - 1);
})();
