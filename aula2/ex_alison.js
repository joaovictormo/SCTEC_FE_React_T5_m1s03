let precoOriginal = 652.9;
let percentualDesconto = 0.6;

function calcularPrecoFinal(preco, percentual) {
  if (preco > 100) {
    const valorDoDesconto = preco * percentual;
    return preco - valorDoDesconto;
  } else {
    return preco;
  }
}

let precoFinal = calcularPrecoFinal(precoOriginal, percentualDesconto);
console.log("Voce vai pagar " + precoFinal);
