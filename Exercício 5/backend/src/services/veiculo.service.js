const Veiculo = require("../models/Veiculo");
const { getDecadeFromYear, isRecent } = require("../utils/dateUtils");
const { validateMarca } = require("../validations/veiculo.validation");

module.exports = {
  getAll: async () => await Veiculo.find(),

  getById: async (id) => await Veiculo.findById(id),

  search: async (params) => await Veiculo.find(params),

  create: async (data) => {
    validateMarca(data.marca);
    return await Veiculo.create(data);
  },

  update: async (id, data) => {
    validateMarca(data.marca);
    data.updated = new Date();
    return await Veiculo.findByIdAndUpdate(id, data, { new: true });
  },

  partialUpdate: async (id, data) => {
    if (data.marca) validateMarca(data.marca);
    data.updated = new Date();
    return await Veiculo.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => await Veiculo.findByIdAndDelete(id),
};
