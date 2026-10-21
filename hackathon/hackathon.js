/* =========================================================
   Hackathon Jovem Programador 2026
   Página do regulamento: monta as listas a partir de dados.js

   Sumário
   1. Datas
   2. Contagem regressiva da capa
   3. Linha das inscrições
   4. A semana do evento
   5. Entregas e critérios
   6. Entrada animada das seções
   ========================================================= */

(function () {
  "use strict";

  var H = window.HACKATHON;
  var DOW = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

  /* ---------- 1. Datas ---------- */

  /* data de hoje no fuso local, sem passar por UTC */
  var agora = new Date();
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var hoje = agora.getFullYear() + "-" + pad(agora.getMonth() + 1) + "-" + pad(agora.getDate());

  var paraData = function (iso) { var p = iso.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); };
  var curta = function (iso) { return iso.slice(8) + "/" + iso.slice(5, 7); };
  var semana = function (iso) { return DOW[paraData(iso).getDay()]; };
  var diasAte = function (iso) { return Math.round((paraData(iso) - paraData(hoje)) / 86400000); };

  /* ---------- 2. Contagem regressiva ---------- */

  var contagem = document.getElementById("contagem");
  var faltam = diasAte(H.inicio);
  if (faltam > 1) contagem.textContent = "Faltam " + faltam + " dias para a abertura.";
  else if (faltam === 1) contagem.textContent = "A abertura é amanhã, às 9h.";
  else if (faltam === 0) contagem.textContent = "A abertura é hoje, às 9h.";
  else if (hoje <= H.fim) contagem.textContent = "O hackathon está acontecendo.";
  else contagem.textContent = "O Hackathon 2026 já terminou.";

  /* ---------- 3. Inscrições ---------- */

  /* o último marco que já chegou fica aceso; os anteriores, feitos */
  var atual = -1;
  H.inscricoes.forEach(function (m, i) { if (m.data <= hoje) atual = i; });

  document.getElementById("inscricoes").innerHTML = H.inscricoes.map(function (m, i) {
    var estado = i < atual ? " feito" : i === atual ? " agora" : "";
    var quando = i === atual && m.data === hoje ? "hoje" : semana(m.data);
    return '<li class="hk-marco' + estado + '" style="--i:' + i + '">' +
      '<span class="pt"></span>' +
      '<time>' + curta(m.data) + ' <small>' + quando + '</small></time>' +
      '<b>' + m.titulo + '</b><span>' + m.sub + '</span></li>';
  }).join("");

  /* ---------- 4. A semana ---------- */

  var dias = [];
  H.agenda.forEach(function (e) { if (dias.indexOf(e.data) < 0) dias.push(e.data); });
  /* 03/12 e 04/12 só têm entrega, mas entram como os outros; o domingo 29/11 não tem nada e não entra */

  document.getElementById("semana").innerHTML = dias.map(function (d, i) {
    var itens = H.agenda.filter(function (e) { return e.data === d; });
    var cls = d === hoje ? " hoje" : d < hoje ? " passou" : "";
    return '<article class="hk-dia' + cls + '" style="--i:' + i + '">' +
      '<header><b>' + curta(d) + '</b><span>' + semana(d) + '</span></header>' +
      '<ul>' + itens.map(function (e) {
        return '<li class="' + e.tipo + '"><time>' + e.hora + '</time>' + e.titulo + '</li>';
      }).join("") + '</ul></article>';
  }).join("");

  /* ---------- 5. Entregas e critérios ---------- */

  document.getElementById("entregas").innerHTML = H.entregas.map(function (e, i) {
    return '<article class="hk-entrega' + (e.n > 3 ? " dura" : "") + '" style="--i:' + i + '">' +
      '<span class="num">E' + e.n + '</span>' +
      '<time>' + semana(e.data) + ', ' + curta(e.data) + ' · até ' + e.hora + '</time>' +
      '<h3>' + e.titulo + '</h3>' +
      '<p>Atrasou: ' + e.atraso + '.</p></article>';
  }).join("");

  document.getElementById("criterios").innerHTML = H.criterios.map(function (c, i) {
    return '<li style="--i:' + i + '"><div><b>' + c.titulo + '</b><span>' + c.pergunta + '</span></div>' +
      '<span class="escala" aria-label="de 0 a 5 pontos"><i></i><i></i><i></i><i></i><i></i></span></li>';
  }).join("") + '<li class="total"><div><b>Total possível</b></div><strong>25</strong></li>';

  /* ---------- 6. Entrada animada ---------- */

  /* cada seção entra quando chega na tela; sem IntersectionObserver, já aparece pronta */
  var secoes = document.querySelectorAll(".hk-sec");
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("hk-anima");
  var obs = new IntersectionObserver(function (lista) {
    lista.forEach(function (x) {
      if (x.isIntersecting) { x.target.classList.add("visivel"); obs.unobserve(x.target); }
    });
  }, { threshold: 0.12 });
  secoes.forEach(function (s) { obs.observe(s); });
})();
