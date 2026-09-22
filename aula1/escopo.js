const prompt = require('prompt-sync')();

let teste = "nivel zero";
{
    let segredo = 123;
    teste = "agora estamos no nivel 1";
    console.log(teste);
    console.log(segredo);
}

teste = "nivel zero novamente";

console.log(teste);
//console.log(segredo);


let idade = prompt("Digite sua idade: ");
let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

idade = Number(idade);
if (Number.isNaN(idade)) {
    idade = prompt("Digite sua idade. Apenas números: ");
}
let mensagem;

if (idade >= 18) {
    mensagem = "Adulto.";
} else {
    mensagem = "Menor de idade.";
}

console.log(mensagem);
