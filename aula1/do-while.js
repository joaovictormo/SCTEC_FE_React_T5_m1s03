const prompt = require('prompt-sync')();

let idade;

do {
    idade = prompt("Digite sua idade. Apenas números: ");
    idade = Number(idade);
} while(Number.isNaN(idade));

console.log(idade);
