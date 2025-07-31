const express = require("express");
const mongoose = require("mongoose");
const veiculoRoutes = require("./routes/veiculos.routes");
const app = express();

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use("/veiculos", veiculoRoutes);

module.exports = app;