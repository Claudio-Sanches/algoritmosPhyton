# Solicitar o primeiro número ao usuário
numero1 = int(input("Digite o primeiro número: "))

# Solicitar o segundo número ao usuário
numero2 = float(input("Digite o segundo número: "))

# Solicitar 
operacao = input("Digite a operação que deseja realizar (+, -, *, / ): ")

# Exibir o resultado
if operacao == '+':
    print ('A operação escolhida foi ==> ' + operacao + ' e o resultado é : ' + str(numero1 + numero2))
elif operacao == '-':
    print ('A operação escolhida foi ==> ' + operacao + ' e o resultado é : ' + str(numero1 - numero2))
elif operacao == '*':
    print ('A operação escolhida foi ==> ' + operacao + ' e o resultado é : ' + str(numero1 * numero2))
elif operacao == '/':
    print ('A operação escolhida foi ==> ' + operacao + ' e o resultado é : ' + str(numero1 / numero2))
else:
    print ('Operador digitado para a operação matemática é inválido')
    