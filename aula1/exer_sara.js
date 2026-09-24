const prompt = require('prompt-sync')();

// Exercício 3: Adivinhe qual é o número secreto, utilizando o loop do while
const numeroSecreto = Math.floor(Math.random() * 5) + 1;
// a função Math.random gera n° aleatórios decimais entre 0 e 1, precisa usar uma função para deixar o n° inteiro, multiplicar pelo número máximo e somar o 1 para que não inicie no 0.

let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5:"));
        if (tentativa !== numeroSecreto) {
        console.log("Errado! Tente novamente.");
    }
} while (tentativa !== numeroSecreto);

console.log("Parabéns! Você acertou o número " + numeroSecreto);
