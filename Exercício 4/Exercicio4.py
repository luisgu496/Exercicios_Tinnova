def soma_multiplos_3_ou_5(x):
    
    #Calcula a soma de todos os números naturais menores que x que são múltiplos de 3 ou 5.

    soma = 0
    for i in range(x):
        if i % 3 == 0 or i % 5 == 0:
            soma += i
    return soma


if __name__ == "__main__":
    try:
        numero = int(input("Digite um número inteiro positivo: "))
        if numero <= 0:
            print("Erro: o número deve ser maior que zero.")
        else:
            resultado = soma_multiplos_3_ou_5(numero)
            print(f"A soma dos múltiplos de 3 ou 5 menores que {numero} é: {resultado}")
    except ValueError:
        print("Erro: entrada inválida. Digite um número inteiro.")
