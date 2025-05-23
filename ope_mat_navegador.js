// Versão do código sendo executada em navegadores
// Solicitar o primeiro número ao usuário
let numero1 = parseInt(prompt("Digite o primeiro número:"));

// Solicitar o segundo número ao usuário
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Solicitar a operação
let operacao = prompt("Digite a operação que deseja realizar (+, -, *, / ):");

// Exibir o resultado
if (operacao === '+') {
    alert("A operação escolhida foi ==> " + operacao + " e o resultado é : " + (numero1 + numero2));
} else if (operacao === '-') {
    alert("A operação escolhida foi ==> " + operacao + " e o resultado é : " + (numero1 - numero2));
} else if (operacao === '*') {
    alert("A operação escolhida foi ==> " + operacao + " e o resultado é : " + (numero1 * numero2));
} else if (operacao === '/') {
    if (numero2 !== 0) {
        alert("A operação escolhida foi ==> " + operacao + " e o resultado é : " + (numero1 / numero2));
    } else {
        alert("O número " + numero2 + " digitado não pode ser usado na operação " + operacao + " como denominador.");
    }
} else {
    alert("Operador digitado para a operação matemática é inválido");
}