🔃 Algoritmo de Ordenação Bubble Sort

Este projeto implementa o algoritmo **Bubble Sort**, que ordena elementos de um vetor comparando pares adjacentes e trocando-os se estiverem fora de ordem.


## 📌 Funcionalidades

- Ordena uma lista de inteiros usando o Bubble Sort.
- Mostra a lista a cada iteração para fins didáticos.

## 🧠 Lógica aplicada

O algoritmo percorre o vetor `n-1` vezes, e a cada passagem empurra o maior elemento restante para o final:

```python
for i in range(n - 1):
    for j in range(n - 1 - i):
        if vetor[j] > vetor[j + 1]:
            swap

🧪 Exemplo de saída

Iteração 1: [3, 2, 4, 5, 1, 0, 6, 7]
Iteração 2: [2, 3, 4, 1, 0, 5, 6, 7]
...
Vetor ordenado: [0, 1, 2, 3, 4, 5, 6, 7]

🚀 Como executar

python bubblesort.py

📦 Requisitos
Python 3.7 ou superior

👨‍💻 Autor
Desenvolvido por Luis Gustavo Ferreira Leite
