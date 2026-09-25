const prompt = require("prompt-sync")();

function teste() {
  let secreto = 10; // só existe aqui dentro
  console.log("Interno: " + secreto);
}
// função com parâmetro opcional
function saudacao(nome = "Visitante") {
  console.log(`Olá, ${nome}!`);
}

let nomeDoUsuario = prompt("Digite seu nome: ").trim();

saudacao(nomeDoUsuario);
saudacao();

// função retornando number
function soma(a, b) {
  console.log(`Somando ${a} com ${b}.`);
  return a + b;
}

let resultado = soma(2, 5);
console.log(resultado);
let resultado2 = soma(12, 25);
console.log(resultado2);

function buscaCep(cep) {
  // invoca a API dos Correios de buscar CEP
  // e retorna um objeto com os dados do endereço
}

function criarPerfil(
  sobrenome,
  cpf,
  email,
  nome = "Não informado",
  cidade = "Não informada",
) {
  console.log("Nome: " + nome);
  console.log("Sobrenome: " + sobrenome);
  console.log("CPF: " + cpf);
  console.log("Email: " + email);
  console.log("Cidade: " + cidade);
}

criarPerfil("João", "Oliveira", "1234", "email@email.com", "Tubarao");

criarPerfil("Oliveira", "1234", "email@email.com");


// função retornando string
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("João", "Oliveira"));



// função retornando boolean
function ehMaiorIdade(dataNascimento, anoAtual) { // DD/MM/AAAA
    let anoNascimento = dataNascimento.split("/")[2]; // ["25", "02", "1991"]
    return Number(anoAtual) - Number(anoNascimento) >= 18;
}

if (ehMaiorIdade("25/02/1991", "2026")) {
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!");
}


teste();

//console.log(secreto); // ❌ erro: não existe aqui fora

