const request = require("supertest");
const app = require("../src/app");

describe("Testes da API de Veículos", () => {
  it("Deve criar um novo veículo", async () => {
    const res = await request(app).post("/veiculos").send({
      veiculo: "Civic",
      marca: "Honda",
      ano: 2020,
      descricao: "Carro seminovo",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });
});