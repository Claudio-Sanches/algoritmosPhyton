const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

async function repetirTexto() {
  const texto = await perguntar("Digite um Texto: ");
  const numero = parseInt(await perguntar("Digite um número inteiro: "));

  if (!isNaN(numero) && numero > 0) {
    const resultado = (texto + " ").repeat(numero);
    console.log(resultado);
  } else {
    console.log("Por favor, digite um número inteiro válido maior que zero.");
  }

  rl.close();
}

repetirTexto();