// Preço original do produto
let valorTotal = 150;

// Percentual de desconto
let percentualDesconto = 0.1;

// Função para calcular o desconto
function calcularDesconto(valor, desconto) {
  if (valor > 100) {
    // Calcula o valor do desconto
    let valorDesconto = valor * desconto;

    // Calcula o valor final
    let valorFinal = valor - valorDesconto;

    return valorFinal;
  } else {
    // Se a compra não passar de R$ 100,
    // não haverá desconto
    return valor;
  }
}

// Chamada da função
let resultado = calcularDesconto(valorTotal, percentualDesconto);

// Exibe o resultado
console.log("Valor original: R$ " + valorTotal.toFixed(2));
console.log("Desconto: " + percentualDesconto * 100 + "%");
console.log("Valor final: R$ " + resultado.toFixed(2));
