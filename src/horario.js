const FUSO_RECIFE = "America/Recife";

function montarHorarioAtual(data = new Date()) {
  const formatador = new Intl.DateTimeFormat("pt-BR", {
    timeZone: FUSO_RECIFE,
    dateStyle: "full",
    timeStyle: "medium",
  });

  return {
    local: "Recife - PE",
    horario: formatador.format(data),
    referenciaUtc: data.toISOString(),
    fuso: FUSO_RECIFE,
  };
}

module.exports = { montarHorarioAtual };
