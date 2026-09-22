const prompt = require('prompt-sync')();

let cont = 0;

while (cont <= 5) {
    console.log(cont);
    cont++;
}


let idade = prompt("Digite sua idade: ");
idade = Number(idade);
while (Number.isNaN(idade)) {
    idade = prompt("Digite sua idade. Apenas números: ");
    idade = Number(idade);
}

console.log("finalmente um number! " + idade);
