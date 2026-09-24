let prompt = require('prompt-sync')();

console.log("JOGO DO NÚMERO SECRETO");

let chooseNumber = 0;
let secretNumber = 3;
let i = 0;

do {
    chooseNumber = prompt(i === 0 ? "Chuta um número: " : "Chuta de novo: ");

    while (isNaN(Number(chooseNumber)) || chooseNumber.trim() === "") {
        console.log("Errou a tecla?");
        chooseNumber = prompt("Chuta de novo: ");
    }

    chooseNumber = Number(chooseNumber);
    i++;

    if (chooseNumber !== secretNumber) {
        if (i === 1) {
            console.log("Errou!");
        } else if (i === 2) {
            console.log("Errou feio, errou feio, errou rude!");
        } else if (i === 3) {
            console.log("Desisto!");
        }

        if (chooseNumber > 5) {
            console.log("Menor ou igual a 5");
        }
    }

} while (chooseNumber !== secretNumber);

if (i === 1) {
    console.log("Nunca mais!");
} else if (i === 2) {
    console.log("Essa foi rápido!");
} else {
    console.log("Finalmente!");
}
