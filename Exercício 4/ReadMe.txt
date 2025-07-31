# 🔢 Soma dos Múltiplos de 3 ou 5

Este projeto calcula a soma de todos os números naturais menores que um valor `X` que sejam múltiplos de **3** ou **5**.

## 📌 Funcionalidades

- Recebe um número inteiro `X` como entrada.
- Retorna a soma de todos os múltiplos de 3 ou 5 menores que `X`.

## 🧠 Lógica aplicada

```python
for i in range(x):
    if i % 3 == 0 or i % 5 == 0:
        soma += i

🧪 Exemplo

Para entrada X = 10:

Múltiplos: 3, 5, 6, 9
Soma: 23

🚀 Como executar

python soma_multiplos.py

📦 Requisitos
Python 3.7 ou superior

👨‍💻 Autor
Desenvolvido por Luis Gustavo Ferreira Leite
