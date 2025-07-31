def bubble_sort(vetor):
  
    #Função que ordena um vetor utilizando o algoritmo Bubble Sort.

    n = len(vetor)
    for i in range(n - 1):
        # A cada iteração, o maior valor "sobe" para o final da lista
        for j in range(n - 1 - i):
            if vetor[j] > vetor[j + 1]:
                # Troca os elementos adjacentes
                vetor[j], vetor[j + 1] = vetor[j + 1], vetor[j]
        # Exibe o vetor após cada iteração (útil para aprendizado)
        print(f"Iteração {i + 1}: {vetor}")
    return vetor


if __name__ == "__main__":
    v = [5, 3, 2, 4, 7, 1, 0, 6]
    print("Vetor original:", v)
    vetor_ordenado = bubble_sort(v)
    print("Vetor ordenado:", vetor_ordenado)
