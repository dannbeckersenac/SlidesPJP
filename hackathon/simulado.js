/* =========================================================
   Simulado do Hackathon · UC6
   Dados da página simulado.html

   Cada encontro da UC6 repete um dia do Hackathon, com a
   entrega no mesmo formato do evento. Os temas são de treino:
   o tema real só aparece na abertura do evento, em 28/11.
   Mudou um encontro aqui, mude também o window.UC6 no
   assets/js/aulas.js e as notas do cronograma/dados.js.
   ========================================================= */

window.SIMULADO = {
  /* um encontro da UC6 para cada etapa do evento; o prazo é o do
     evento: 19h25 do encontro seguinte */
  encontros: [
    { data: "2026-11-16", oficina: "Grupos, inscrição no Hackathon, boas práticas, escolha do tema, Design Thinking e Matriz CSD",
      entrega: "E1 · Matriz CSD e definição do desafio", prazo: "até 19h25 de 18/11" },
    { data: "2026-11-18", oficina: "Validação do problema com entrevistas e as primeiras telas com IA",
      entrega: "E2 · Validação do problema", prazo: "até 19h25 de 23/11" },
    { data: "2026-11-23", oficina: "Modelo de negócio no Lean Canvas, o MVP com IA e o teste com o outro grupo",
      entrega: "E3 · Modelo de negócio e MVP", prazo: "até 19h25 de 25/11" },
    { data: "2026-11-25", oficina: "Roteiro do pitch e o pitch de 3 minutos de cada aluno, ao vivo",
      entrega: "E4 · Pitch, cada um apresenta", prazo: "em sala, 25/11" },
    { data: "2026-11-26", oficina: "Comemoração de fim de ano, sem aula",
      entrega: "E5 · Arquivos da solução", prazo: "até 19h25 de 26/11" }
  ],

  /* as frentes de atuação do Senac, com três temas de treino cada */
  frentes: [
    {
      nome: "Gastronomia",
      temas: [
        { titulo: "Insumo vencendo na cozinha", problema: "O restaurante pequeno controla o estoque num caderno. Ingrediente vence no fundo da geladeira e o desperdício só aparece no fim do mês.", quem: "dono e cozinheiro de restaurante pequeno" },
        { titulo: "Alergia sem resposta", problema: "O cliente com alergia ou restrição pergunta o que pode comer, e o garçom não sabe responder sem ir até a cozinha.", quem: "cliente com restrição alimentar e equipe do salão" },
        { titulo: "Marmita no WhatsApp", problema: "Quem vende marmita pelo WhatsApp perde pedidos no meio das conversas e não sabe quantas preparar no dia seguinte.", quem: "cozinheira autônoma que vende por mensagem" }
      ]
    },
    {
      nome: "Beleza e estética",
      temas: [
        { titulo: "Horário vago no salão", problema: "O cliente falta sem avisar, o horário fica vazio e ninguém da lista de espera fica sabendo a tempo.", quem: "salão de beleza e barbearia" },
        { titulo: "A ficha do cliente", problema: "A fórmula da coloração e a alergia a um produto ficam anotadas num papel que some, e cada profissional atende sem esse histórico.", quem: "profissional de estética e o cliente" },
        { titulo: "Quanto cobrar", problema: "A manicure autônoma não sabe quanto custa cada atendimento e no fim do mês não sabe se teve lucro.", quem: "profissional autônoma de beleza" }
      ]
    },
    {
      nome: "Saúde e bem-estar",
      temas: [
        { titulo: "O remédio do horário", problema: "O idoso esquece o horário do remédio, e a família que mora longe não tem como saber se ele tomou.", quem: "idoso que mora sozinho e a família" },
        { titulo: "Quem some da academia", problema: "O aluno novo desiste nos primeiros meses e a academia de bairro só percebe quando ele cancela.", quem: "academia pequena e o aluno iniciante" },
        { titulo: "Atendimento em casa", problema: "O fisioterapeuta que atende em domicílio anota a evolução de cada paciente num caderno e perde tempo montando a agenda da semana.", quem: "profissional de saúde que atende em casa" }
      ]
    },
    {
      nome: "Turismo e hospitalidade",
      temas: [
        { titulo: "Reserva em três lugares", problema: "A pousada recebe reserva pelo WhatsApp, pelo Instagram e pelo telefone, e às vezes vende o mesmo quarto duas vezes.", quem: "dono de pousada pequena" },
        { titulo: "Blumenau fora da festa", problema: "O turista que chega fora da época da Oktoberfest não sabe o que fazer na cidade, e o comércio local não aparece para ele.", quem: "turista e comércio local" },
        { titulo: "O grupo do passeio", problema: "No passeio em grupo, o guia repete por mensagem o ponto de encontro e o horário, e sempre alguém se perde ou atrasa.", quem: "guia de turismo e os passageiros" }
      ]
    },
    {
      nome: "Moda",
      temas: [
        { titulo: "Brechó de peça única", problema: "Cada peça do brechó é única. Fotografar, medir e anunciar toma o dia, e a venda pelo Instagram não tem controle do que já saiu.", quem: "dono de brechó" },
        { titulo: "O ajuste da costureira", problema: "A costureira de ajustes perde o controle dos prazos e das medidas de cada cliente, anotadas em pedaços de papel.", quem: "costureira e ateliê de ajustes" },
        { titulo: "Retalho que sobra", problema: "A confecção pequena acumula retalho de tecido que vira lixo, enquanto artesãos da região procuram exatamente esse material.", quem: "confecção pequena e artesãos" }
      ]
    },
    {
      nome: "Comércio e varejo",
      temas: [
        { titulo: "Validade na prateleira", problema: "O mercadinho de bairro descobre o produto vencido quando já não dá para fazer promoção, e o prejuízo vai para o lixo.", quem: "mercado de bairro" },
        { titulo: "O caderno do fiado", problema: "O comércio de bairro ainda vende fiado no caderno. A conta se perde, e cobrar o cliente é constrangedor.", quem: "comerciante e o cliente do bairro" },
        { titulo: "Tem na loja?", problema: "A loja pequena não está na internet. O cliente liga ou manda mensagem para saber se tem o produto, e o atendente para tudo para conferir.", quem: "loja pequena e quem compra nela" }
      ]
    }
  ]
};
