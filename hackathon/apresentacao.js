/* =========================================================
   Hackathon Jovem Programador 2026 · Apresentação

   ← →  PageUp PageDown  espaço   troca de slide
   Home End                       primeiro e último
   F                              tela cheia
   clique na metade esquerda      volta; na direita, avança

   Sumário
   1. Escala do slide
   2. Troca de slide
   3. Números que contam
   4. Linha das inscrições e contagem da capa
   5. Teclado, clique, toque e barra
   ========================================================= */

(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var atual = -1;
  var deck = document.getElementById("deck");

  /* hoje no fuso local, sem passar por UTC */
  var agora = new Date();
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var hoje = agora.getFullYear() + "-" + pad(agora.getMonth() + 1) + "-" + pad(agora.getDate());
  var paraData = function (iso) { var p = iso.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); };

  /* ---------- 1. Escala ---------- */

  function escalar() {
    var f = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    deck.style.setProperty("--f", f);
  }
  window.addEventListener("resize", escalar);
  escalar();

  /* ---------- 2. Troca de slide ---------- */

  function mostrar(i) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === atual) return;
    atual = i;
    slides.forEach(function (s, k) { s.classList.toggle("ativo", k === atual); });
    document.getElementById("contador").textContent = (atual + 1) + " / " + total;
    document.getElementById("progresso").style.width = ((atual + 1) / total * 100) + "%";
    if (history.replaceState) history.replaceState(null, "", "#" + (atual + 1));
    contar(slides[atual]);
  }
  var proximo = function () { mostrar(atual + 1); };
  var anterior = function () { mostrar(atual - 1); };

  /* ---------- 3. Números que contam ---------- */

  /* o HTML já traz o valor final, que é o que fica na impressão;
     ao abrir o slide, o número sobe (ou desce) até ele */
  var timers = [];
  function contar(slide) {
    timers.forEach(clearTimeout);
    timers = [];
    slide.querySelectorAll("[data-contar]").forEach(function (el) {
      var fim = Number(el.dataset.contar);
      var ini = Number(el.dataset.de || 0);
      el.textContent = ini;
      timers.push(setTimeout(function () {
        var t0 = performance.now();
        var dur = 1100;
        (function passo(t) {
          var p = Math.min(1, (t - t0) / dur);
          var suave = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ini + (fim - ini) * suave);
          if (p < 1 && slide.classList.contains("ativo")) requestAnimationFrame(passo);
          else el.textContent = fim;
        })(t0);
      }, ini > fim ? 1500 : 500));
    });
  }

  /* ---------- 4. Inscrições e contagem ---------- */

  var trilho = document.getElementById("trilhoInscricoes");
  if (trilho) {
    var marcos = Array.prototype.slice.call(trilho.querySelectorAll("li"));
    var datas = marcos.map(function (li) { return li.dataset.data; });
    marcos.forEach(function (li) { li.classList.toggle("feito", li.dataset.data <= hoje); });

    /* posição de hoje entre os marcos, de 0 (primeiro) a 3 (último) */
    var pos = 0;
    if (hoje >= datas[datas.length - 1]) pos = datas.length - 1;
    else if (hoje > datas[0]) {
      for (var k = 0; k < datas.length - 1; k++) {
        if (hoje >= datas[k] && hoje < datas[k + 1]) {
          pos = k + (paraData(hoje) - paraData(datas[k])) / (paraData(datas[k + 1]) - paraData(datas[k]));
        }
      }
    }
    /* cada marco ocupa 1/4 da largura e a bolinha tem o centro a 17px do começo */
    var frac = pos / (datas.length - 1);
    var aqui = document.getElementById("aqui");
    aqui.style.left = "calc(" + (pos * 25) + "% + 17px)";
    var linha = trilho.querySelector(".trilho-linha");
    linha.style.left = "17px";
    linha.style.right = "calc(25% - 17px)";
    linha.style.setProperty("--fim", (frac * 100) + "%");
    /* antes de abrir ou depois de fechar as inscrições, o marcador some */
    if (hoje >= datas[0] && hoje <= datas[datas.length - 1]) aqui.classList.add("pronto");

    /* a linha enche quando o slide abre e esvazia quando sai */
    new MutationObserver(function () {
      linha.firstElementChild.style.width = trilho.closest(".slide").classList.contains("ativo") ? frac * 100 + "%" : "0";
    }).observe(trilho.closest(".slide"), { attributes: true, attributeFilter: ["class"] });
  }

  var contagem = document.getElementById("contagem");
  var faltam = Math.round((paraData("2026-11-28") - paraData(hoje)) / 86400000);
  if (faltam > 1) contagem.textContent = "faltam " + faltam + " dias para a abertura";
  else if (faltam === 1) contagem.textContent = "a abertura é amanhã, às 9h";
  else if (faltam === 0) contagem.textContent = "a abertura é hoje, às 9h";
  else if (hoje <= "2026-12-05") contagem.textContent = "o hackathon está acontecendo";
  else contagem.textContent = "edição encerrada";

  /* ---------- 5. Teclado, clique, toque e barra ---------- */

  function telaCheia() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  }

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    switch (e.key) {
      case "ArrowRight": case "ArrowDown": case "PageDown": case " ": proximo(); e.preventDefault(); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp": anterior(); e.preventDefault(); break;
      case "Home": mostrar(0); e.preventDefault(); break;
      case "End": mostrar(total - 1); e.preventDefault(); break;
      case "f": case "F": telaCheia(); break;
    }
  });

  deck.addEventListener("click", function (e) {
    if (e.target.closest("a, button")) return;   /* link e botão dentro do slide não trocam de slide */
    if (e.clientX < window.innerWidth * 0.32) anterior(); else proximo();
  });

  var toqueX = null;
  deck.addEventListener("touchstart", function (e) { toqueX = e.touches[0].clientX; }, { passive: true });
  deck.addEventListener("touchend", function (e) {
    if (toqueX === null) return;
    var dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 50) { if (dx < 0) proximo(); else anterior(); }
    toqueX = null;
  });

  document.getElementById("bAnt").addEventListener("click", anterior);
  document.getElementById("bProx").addEventListener("click", proximo);
  document.getElementById("bTela").addEventListener("click", telaCheia);

  /* a barra some depois de 2,5 s sem mexer o mouse, para não aparecer na projeção */
  var barra = document.getElementById("barra");
  var esconder;
  function acordar() {
    barra.classList.remove("oculta");
    clearTimeout(esconder);
    esconder = setTimeout(function () {
      if (!barra.matches(":hover")) barra.classList.add("oculta");
    }, 2500);
  }
  document.addEventListener("mousemove", acordar);
  acordar();

  /* abre no slide do endereço (#5), para o F5 não voltar à capa */
  var inicial = parseInt(location.hash.slice(1), 10);
  mostrar(isNaN(inicial) ? 0 : inicial - 1);
})();
