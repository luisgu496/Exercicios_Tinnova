def fatorial(n):

    #Calcula o fatorial de um número inteiro não-negativo.

    if n == 0 or n == 1:
        return 1

    resultado = 1
    for i in range(2, n + 1):
        resultado *= i
    return resultado


if __name__ == "__main__":
    try:
        numero = int(input("Digite um número inteiro não-negativo: "))
        if numero < 0:
            print("Erro: número negativo não tem fatorial definido.")
        else:
            print(f"{numero}! = {fatorial(numero)}")
    except ValueError:
        print("Erro: entrada inválida. Digite um número inteiro.")
