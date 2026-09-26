const prompt = require("prompt-sync")();

function saudarCliente(nome = "Cliente Anônimo") {
  console.log("Bem-vindo, " + nome + "!");
}
saudarCliente(prompt("Como gostaria de ser chamado?"));

let preco = Number(prompt("Digite o preço do produto: "));

let desconto = 0.1; // 10% de desconto

function calcularPrecoFinal(preco) {
  if (preco > 100) {
    return preco * (1 - desconto);
  } else {
    return preco; // Sem desconto
  }
}
console.log(
  "O preço final com desconto é: R$" + calcularPrecoFinal(preco).toFixed(2),
);
