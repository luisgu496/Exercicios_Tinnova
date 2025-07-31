const mongoose = require("mongoose");

const veiculoSchema = new mongoose.Schema({
  veiculo: { type: String, required: true },
  marca: { type: String, required: true },
  ano: { type: Number, required: true },
  descricao: { type: String },
  vendido: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Veiculo", veiculoSchema);