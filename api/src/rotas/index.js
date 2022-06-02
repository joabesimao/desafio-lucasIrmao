const roteador = require("express").Router();
const livro = require("../livros/Livro");
const tabelaLivro = require("../livros/TabelaLivro");

roteador.get("/", async (req, res) => {
  const pesquisaLivro = await tabelaLivro.listar();
  res.send(JSON.stringify(pesquisaLivro));
});

module.exports = roteador;
