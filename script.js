const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20 },
      { id: 2, tipo: "Samurai", valor: 35 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 10 },
      { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20 },
      { id: 2, tipo: "Van Dyke", valor: 20 },
      { id: 3, tipo: "Barba Média", valor: 20 },
      { id: 4, tipo: "Barba Baixa", valor: 20 },
      { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
  };
  
  // Função buscaCortePorId
  function buscaCortePorId(id) {
    for (let i = 0; i < barbearia.cortes.length; i++) {
      if (barbearia.cortes[i].id === id) {
        return barbearia.cortes[i]; // Retorna o objeto corte
      }
    }
    return "Corte não encontrado"; // Retorna a mensagem se não encontrar o corte
  }
  
  // Função buscaBarbaPorId
  function buscaBarbaPorId(id) {
    for (let i = 0; i < barbearia.barbas.length; i++) {
      if (barbearia.barbas[i].id === id) {
        return barbearia.barbas[i]; // Retorna o objeto barba
      }
    }
    return "Barba não encontrada"; // Retorna a mensagem se não encontrar a barba
  }
  
  // Função verificaStatusBarbearia
  function verificaStatusBarbearia() {
    return barbearia.estaAberto ? "Estamos abertos" : "Estamos fechados"; // Verifica se está aberto ou fechado
  }
  
  // Função retornaTodosCortes
  function retornaTodosCortes() {
    return barbearia.cortes; // Retorna a lista de cortes
  }
  
  // Função retornaTodasBarbas
  function retornaTodasBarbas() {
    return barbearia.barbas; // Retorna a lista de barbas
  }
  
  // Função criaPedido
  function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);
  
    const pedido = {
      nome: nomeCliente,
      pedidoCorte: corte.tipo, // Armazena o tipo do corte
      pedidoCortePreco: corte.valor, // Armazena o valor do corte
      pedidoBarba: barba.tipo, // Armazena o tipo da barba
      pedidoBarbaPreco: barba.valor, // Armazena o valor da barba
    };
  
    return pedido; // Retorna o objeto pedido
  }
  
  // Função atualizarServico
  function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista[i].tipo = tipo; // Atualiza o tipo do serviço
        lista[i].valor = valor; // Atualiza o valor do serviço
        break; // Sai do loop após a atualização
      }
    }
    return lista; // Retorna a lista atualizada
  }
  
  // Função calculaTotal
  function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco; // Soma os valores do corte e da barba
  }
  