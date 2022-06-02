const express = require("express");
const bodyParser = require("body-parser");
const roteador = require("./rotas/index.js");
const config = require("config");


const app = express();

app.use(bodyParser.json());

app.use("/api/livro", roteador);
const port = config.get("api.porta");

app.listen(port, () => console.log(`listen on port ${port}`));

module.exports = app;
