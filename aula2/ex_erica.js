let precoOriginal = 130;
let desconto = 0.1;
let precoFinal = 0;

function calcularDesconto(precoOriginal, desconto) {
  precoFinal = precoOriginal - precoOriginal * desconto;
  return precoFinal;
}

if (precoOriginal > 100) {
  calcularDesconto(precoOriginal, desconto);
} else {
  precoFinal = precoOriginal;
}

console.log(precoFinal);
