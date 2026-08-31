const request = require("supertest");
const app = require("../src/app");

describe("API Relógio de Recife", () => {
  test("GET / apresenta a API", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(201);
    expect(response.body.projeto).toBe("Relógio de Recife");
  });

  test("GET /horario retorna o horário de Recife", async () => {
    const response = await request(app).get("/horario");

    expect(response.statusCode).toBe(200);
    expect(response.body.local).toBe("Recife - PE");
    expect(response.body.fuso).toBe("America/Recife");
    expect(response.body).toHaveProperty("horario");
    expect(response.body).toHaveProperty("referenciaUtc");
  });

  test("GET /health confirma que o serviço está disponível", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });

  test("rota inexistente retorna HTTP 404", async () => {
    const response = await request(app).get("/nao-existe");

    expect(response.statusCode).toBe(404);
    expect(response.body.erro).toBe("Rota não encontrada");
  });
});
