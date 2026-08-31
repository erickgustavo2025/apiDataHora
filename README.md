# API Relógio de Recife

API feita com Node.js e Express para consultar a data e a hora atuais no fuso de Recife.

## Rotas

| Método | Rota | Resultado |
| --- | --- | --- |
| GET | `/` | Apresenta o projeto e informa a rota principal |
| GET | `/horario` | Retorna horário local, referência UTC e fuso |
| GET | `/health` | Confirma que o serviço está disponível |

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

## Executar com Docker

```bash
docker build -t relogio-recife .
docker run --rm -p 3000:3000 --name relogio-recife relogio-recife
```

Em outro terminal, valide o container:

```bash
curl http://localhost:3000/health
```

## Integração contínua

O workflow em `.github/workflows/ci.yml` possui dois jobs. Primeiro executa os testes; somente depois do sucesso constrói a imagem Docker.
