#Classe Eleicao calcula os percentuais de votos válidos, brancos e nulos em relação ao total de eleitores.
class Eleicao:

    #Inicializa a eleição com os dados fornecidos.
    def __init__(self, total_eleitores: int, votos_validos: int, votos_brancos: int, votos_nulos: int):

        self.total_eleitores = total_eleitores
        self.votos_validos = votos_validos
        self.votos_brancos = votos_brancos
        self.votos_nulos = votos_nulos

    #Calcula o percentual de votos válidos em relação ao total de eleitores.
    def percentual_validos(self) -> float:

        return (self.votos_validos / self.total_eleitores) * 100

    #Calcula o percentual de votos brancos em relação ao total de eleitores.
    def percentual_brancos(self) -> float:

        return (self.votos_brancos / self.total_eleitores) * 100

    #Calcula o percentual de votos nulos em relação ao total de eleitores.
    def percentual_nulos(self) -> float:

        return (self.votos_nulos / self.total_eleitores) * 100


# Exemplo de uso
if __name__ == "__main__":
    eleicao = Eleicao(total_eleitores=1000, votos_validos=800, votos_brancos=150, votos_nulos=50)

    print(f"Percentual de votos válidos: {eleicao.percentual_validos():.2f}%")
    print(f"Percentual de votos brancos: {eleicao.percentual_brancos():.2f}%")
    print(f"Percentual de votos nulos: {eleicao.percentual_nulos():.2f}%")
