const express = require("express");
const { montarHorarioAtual } = require("./horario");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    projeto: "Relógio de Recife",
    descricao: "API para consultar a data e a hora local",
    endpoint: "/horario",
  });
});

app.get("/horario", (req, res) => {
  res.status(200).json(montarHorarioAtual());
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

module.exports = app;
