const prompt = require('prompt-sync')();

console.log("ADIVINHE O NÚMERO")
const numeroSecreto = 7;
let palpite;
while (palpite != numeroSecreto) {
  palpite = Number(prompt("Adivinhe o numero de 1 a 10: "));
  if (palpite == numeroSecreto) {
    console.log("Você acertou");
  } else {
    console.log("Tente novamente");
  }
}
