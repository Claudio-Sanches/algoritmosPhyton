// Versão do código sendo executada em navegadores
// Recebe o primeiro dado do usuário
let dado1 = prompt("Digite o primeiro dado:");

// Recebe o segundo dado do usuário
let dado2 = prompt("Digite o segundo dado:");

// Concatena os dois dados
let resultado = dado1 + " " + dado2;

// Exibe o resultado
alert("A concatenação dos dados é: " + resultado);

// Versão do código para trabalhar no terminal de desenvolvimento com nodes.js

const readline = require('readline');

// Cria interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Recebe o primeiro dado
rl.question('Digite o primeiro dado: ', (dado1) => {
  // Recebe o segundo dado
  rl.question('Digite o segundo dado: ', (dado2) => {
    // Concatena os dados
    const resultado = dado1 + ' ' + dado2;

    // Exibe o resultado
    console.log('A concatenação dos dados é:', resultado);

    // Fecha a interface
    rl.close();
  });
});