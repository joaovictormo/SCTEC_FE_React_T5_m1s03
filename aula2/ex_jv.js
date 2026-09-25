let preco = 150;
let desconto = 0.1;

function calcularDesconto(preco) {
  if (preco > 100) {
    let valorDeDesconto = preco * desconto;
    let precoFinal = preco - valorDeDesconto;

    return precoFinal;
  } else {
    return preco;
  }
}

let resultado = calcularDesconto(preco);
console.log(resultado);
