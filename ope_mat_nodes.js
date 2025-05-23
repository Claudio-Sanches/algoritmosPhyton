// Versão do código para trabalhar no terminal de desenvolvimento com nodes.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função auxiliar para fazer perguntas
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function calculadora() {
    const numero1 = parseInt(await perguntar("Digite o primeiro número: "));
    const numero2 = parseFloat(await perguntar("Digite o segundo número: "));
    const operacao = await perguntar("Digite a operação que deseja realizar (+, -, *, / ): ");

    let resultado;

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                console.log("O número " + numero2 + " digitado não pode ser usado na operação " + operacao + " como denominador.");
                rl.close();
                return;
            }
            break;
        default:
            console.log("Operador digitado para a operação matemática é inválido.");
            rl.close();
            return;
    }

    console.log(`A operação escolhida foi ==> ${operacao} e o resultado é : ${resultado}`);
    rl.close();
}

calculadora();