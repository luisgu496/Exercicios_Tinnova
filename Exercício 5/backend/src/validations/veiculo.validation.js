const marcasValidas = ["Ford", "Honda", "Volkswagen", "Chevrolet"];

module.exports = {
  validateMarca: (marca) => {
    if (!marcasValidas.includes(marca)) {
      throw new Error("Marca inválida");
    }
  },
};
