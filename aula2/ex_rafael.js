let precoOriginal = 150.0;
let percentualDesconto = 0.1;

function calcularPrecoFinal(valorTotal, desconto) {
  if (valorTotal > 100) {
    let valorDoDesconto = valorTotal * desconto;
    let valorFinal = valorTotal - valorDoDesconto;
    return valorFinal;
  } else {
    return valorTotal;
  }
}

let precoComDesconto = calcularPrecoFinal(precoOriginal, percentualDesconto);

console.log("O preço final da compra é: R$ " + precoComDesconto);
