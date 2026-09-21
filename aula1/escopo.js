let teste = "nivel zero";
let idade = 18;
{
    let segredo = 123;
    teste = "agora estamos no nivel 1";
    console.log(teste);
    console.log(segredo);
}

teste = "nivel zero novamente";

console.log(teste);
//console.log(segredo);


let mensagem;

if (idade >= 18) {
    mensagem = "Adulto.";
} else {
    mensagem = "Menor de idade.";
}

console.log(mensagem);
