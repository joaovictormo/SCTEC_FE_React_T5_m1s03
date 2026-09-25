const prompt = require("prompt-sync")();

console.log("Exercicio aula2 m1s3:");

let precoOriginal = 150;
let percentualDesconto = 0.1;

function calcularDesconto(preco, percentual) {
  if (preco > 100) {
    let valorDesconto = preco * percentual;
    let valorFinal = preco - valorDesconto;
    return valorFinal;
  } else {
    return preco;
  }
}

let valorFinal = calcularDesconto(precoOriginal, percentualDesconto);

console.log("Preço original:", precoOriginal);
console.log("Percentual de desconto:", percentualDesconto * 100 + "%");
console.log("Valor final com desconto:", valorFinal.toFixed(2));

function fimdoexercicio() {
  console.log("Fim do exercícios!");
}

fimdoexercicio();
