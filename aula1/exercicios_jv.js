for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("Já!");

let numero = 1;
let soma = 0;

while (numero <= 10) {
    soma = soma + numero;
    numero++;
}

console.log(soma);

const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 5) + 1;
let palpite;

console.log(numeroSecreto);

while (palpite != numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número de 1 a 5:"));
}

console.log("Acertou!");
