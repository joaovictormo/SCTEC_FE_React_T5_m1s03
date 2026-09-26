const prompt = require("prompt-sync")();

function calculaPreco(valorProduto, valorDesconto) {
  let desconto = (valorProduto * valorDesconto) / 100;
  let valorFinal = valorProduto - desconto;
  console.log(`\nSeu desconto foi de: R$ ${desconto}.`);
  console.log(`O valor final do produto é: R$ ${valorFinal}.\n`);
}

console.log("\nDesconto válido para compras acima de R$ 100,00.\n");
let valorProduto = Number(
  prompt("Digite o valor do produto (ex: 249.9 para R$ 249,90): "),
);
let valorDesconto = Number(
  prompt("Digite o desconto percentual (ex: 10 para 10%): "),
);

if (valorProduto >= 100) {
  calculaPreco(valorProduto, valorDesconto);
} else {
  console.log(
    "\nNão há desconto para produtos com valor inferior a R$ 100,00.\n",
  );
}
