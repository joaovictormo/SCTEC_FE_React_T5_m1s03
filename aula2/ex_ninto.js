// Preço original do produto
let precoOriginal = 150;

// Percentual de desconto
let percentualDesconto = 0.1; // 10%

// Função para calcular o preço final
function calcularDesconto(preco, desconto) {
  let valorDesconto = preco * desconto;
  let valorFinal = preco - valorDesconto;

  return valorFinal;
}

// Verifica se a compra é acima de R$ 100
if (precoOriginal > 100) {
  let precoFinal = calcularDesconto(precoOriginal, percentualDesconto);

  console.log("Preço original: R$ " + precoOriginal);
  console.log("Desconto: 10%");
  console.log("Preço final: R$ " + precoFinal);
} else {
  console.log("A compra não tem direito a desconto.");
  console.log("Preço final: R$ " + precoOriginal);
}
