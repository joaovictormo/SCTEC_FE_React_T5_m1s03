const somar = (a, b) => a + b;

console.log(somar(2, 5));

const saudar = () => "Olá, seja bem vindo(a)!";

console.log(saudar());

/* function calcularPrecoFinal(preco, percentual) {
  if (preco > 100) {
    const valorDoDesconto = preco * percentual;
    return preco - valorDoDesconto;
  } else {
    return preco;
  }
} */

/* const calculaDesconto = (preco, percentualDesconto) => {
  if (preco > 100) {
    const valorDoDesconto = preco * percentualDesconto;
    return preco - valorDoDesconto;
  } else {
    return preco;
  }
}; */

const calculaDesconto = (preco, percentualDesconto) =>
  preco > 100 ? preco - preco * percentualDesconto : preco;

function media(a, b, c) {
  return (a + b + c) / 3;
}

const mediaFlecha = (a, b, c) => (a + b + c) / 3;

console.log(media(7, 8, 9));
console.log(mediaFlecha(7, 8, 9));
