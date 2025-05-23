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