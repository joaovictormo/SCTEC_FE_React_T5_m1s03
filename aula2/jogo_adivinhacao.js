const prompt = require("prompt-sync")();

const aleatorioMax = 10;
const aleatorioMin = 5;

function verificarPalpite(palpite, alvo) {
  if (palpite === alvo) {
    return "Acertou!";
  } else if (palpite > alvo) {
    return "É menor!";
  }
  return "É maior!";
}

function geraIntAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogo() {
  const aleatorio = geraIntAleatorio(aleatorioMin, aleatorioMax);
  let palpite;
  let cont = 0;

  do {
    palpite = Number(
      prompt(`Digite um número de ${aleatorioMin} a ${aleatorioMax}: `),
    );
    cont++;
    console.log(verificarPalpite(palpite, aleatorio));
  } while (palpite !== aleatorio);

  console.log(`Você acertou em ${cont} tentativas.`);
}

jogo();
