const prompt = require("prompt-sync")({ sigint: true });

console.log("~~~ CALCULADORA DE DESCONTOS ~~~");

let originalPriceInput = prompt("Informe o valor do produto R$: ").replace(
  ",",
  ".",
);

while (isNaN(Number(originalPriceInput)) || originalPriceInput.trim() === "") {
  console.log("Por favor, digite apenas números!");
  originalPriceInput = prompt("Informe o valor do produto R$: ").replace(
    ",",
    ".",
  );
}

function calculateSalePrice(originalPrice) {
  const salePrice = originalPrice * 0.9;
  return originalPrice > 100 ? salePrice : originalPrice;
}

console.log(
  originalPriceInput > 100
    ? `Valor com desconto: R$${Number(calculateSalePrice(originalPriceInput)).toFixed(2).replace(".", ",")}`
    : `Não tem desconto. O valor a ser pago é R$${Number(originalPriceInput).toFixed(2).replace(".", ",")}`,
);
