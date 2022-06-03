const roteador = require("express").Router();

const Livro = require("../livros/Livro");

const tabelaLivro = require("../livros/TabelaLivro");

roteador.get("/", async (req, res) => {
  const pesquisaLivro = await tabelaLivro.listar();
  res.send(JSON.stringify(pesquisaLivro));
});

roteador.get("/:idLivro", async (req, res) => {
  try {
    const id = req.params.idLivro;
    const livro = new Livro({ id: id });
    await livro.carregar();
    res.send(JSON.stringify(livro));
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message,
      })
    );
  }
});

roteador.post("/", async (req, res) => {
  const dadosNovoLivro = req.body;
  const livro = new Livro(dadosNovoLivro);
  await livro.criar();
  res.send(JSON.stringify(livro));
});

roteador.put("/:idLivro", async (req, res) => {
  try {
    const id = req.params.idLivro;
    const dadosAtuais = req.body;
    const dados = Object.assign({}, dadosAtuais, { id: id });
    const livro = new Livro(dados);
    await livro.atualizar();
    res.end();
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message,
      })
    );
  }
});

roteador.delete("/:idLivro", async (req, res) => {
  try {
    const id = req.params.idLivro;
    const livro = new Livro({ id: id });
    await livro.carregar();
    await livro.remover();
    res.end();
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message,
      })
    );
  }
});

module.exports = roteador;
