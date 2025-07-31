const VeiculoService = require("../services/veiculo.service");

module.exports = {
  getAll: async (req, res) => {
    const veiculos = await VeiculoService.getAll();
    res.json(veiculos);
  },

  getById: async (req, res) => {
    const veiculo = await VeiculoService.getById(req.params.id);
    res.json(veiculo);
  },

  search: async (req, res) => {
    const { marca, ano, cor } = req.query;
    const result = await VeiculoService.search({ marca, ano, cor });
    res.json(result);
  },

  create: async (req, res) => {
    const veiculo = await VeiculoService.create(req.body);
    res.status(201).json(veiculo);
  },

  update: async (req, res) => {
    const veiculo = await VeiculoService.update(req.params.id, req.body);
    res.json(veiculo);
  },

  partialUpdate: async (req, res) => {
    const veiculo = await VeiculoService.partialUpdate(req.params.id, req.body);
    res.json(veiculo);
  },

  remove: async (req, res) => {
    await VeiculoService.remove(req.params.id);
    res.status(204).end();
  },
};
