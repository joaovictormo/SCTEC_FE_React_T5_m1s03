const prompt = require("prompt-sync")();

function precoFinal(preco, desconto) {
  return Number(preco) - Number((preco * desconto) / 100);
}

let precoOriginal = Number(prompt("Qual é o valor do produto (ex.: 100)? R$"));
while (Number.isNaN(precoOriginal)) {
  precoOriginal = Number(
    prompt("Valor inválido! Insira novamente o valor do produto: R$:"),
  );
}

let descontoOferecido;
if (precoOriginal > 100) {
  descontoOferecido = Number(
    prompt("Qual é a porcentagem do desconto (ex.: 10)? "),
  );
  console.log(
    `O valor original do produto é R$${precoOriginal} e o desconto é de ${descontoOferecido}%`,
  );
  console.log(
    `Então, o preço final é de: R$${precoFinal(precoOriginal, descontoOferecido).toFixed(2)}`,
  );
} else {
  console.log(
    `O valor do produto é de R$${precoOriginal} e não possui desconto.`,
  );
}
