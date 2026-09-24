// Exercício 1: Conte de 5 até 1 com for e escreva "Já!"
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Já!");

// ---

// Exercício 2: Some os números de 1 a 10 com while (dá 55)
let soma = 0;
let numero = 1;

while (numero <= 10) {
    soma += numero;
    numero++;
}
console.log(`A soma é: ${soma}`);

// Exercício 3: Gere um número (de 1 a 5) e peça para o usuário adivinhar, até acertar.
// Nota: Se estiver rodando no Node.js puro, você precisa do pacote 'prompt-sync' instalado.
// Se estiver rodando no console do navegador, o 'prompt' já funciona nativamente.
const prompt = require('prompt-sync')(); 

// Gera um número inteiro aleatório entre 1 e 5
const numeroSecreto = Math.floor(Math.random() * 5) + 1;

while (true) {
    const resposta = prompt("Adivinhe o número entre 1 e 5: ");
    const palpite = parseInt(resposta, 10);

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou.");
        break; // Encerra o loop quando o usuário acerta
    } else {
        console.log("Errado! Tente novamente.");
    }
}
