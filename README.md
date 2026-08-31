# API Relógio de Recife

API feita com Node.js e Express para consultar a data e a hora atuais no fuso de Recife.

## Rotas

| Método | Rota | Resultado |
| --- | --- | --- |
| GET | `/` | Apresenta o projeto e informa a rota principal |
| GET | `/horario` | Retorna horário local, referência UTC e fuso |

## Executar

```bash
npm install
npm start
```

Depois, acesse `http://localhost:3000/horario`.

## Testes

```bash
npm test
```

Os testes verificam a apresentação da API, a consulta do horário e o tratamento de rotas inexistentes.

## Integração contínua

O workflow em `.github/workflows/ci.yml` instala as dependências e executa os testes automaticamente em pushes e pull requests direcionados à branch `main`.
