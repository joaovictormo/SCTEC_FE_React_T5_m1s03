const prompt = require("prompt-sync")();

function calcularDesconto(valor, desconto) {
  if (valor > 100) {
    let valorDesconto = valor * (desconto / 100);
    return valor - valorDesconto;
  } else {
    return valor;
  }
}

let valorTotal = Number(prompt("Digite o valor da compra: R$ "));
let percentualDesconto = Number(prompt("Digite o percentual de desconto: "));

if (isNaN(valorTotal) || isNaN(percentualDesconto)) {
  console.log("Caractere inválido, apenas números.");
} else {
  let resultado = calcularDesconto(valorTotal, percentualDesconto);

  console.log("Valor final da compra: R$ " + resultado);
}
