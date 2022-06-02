const TabelaLivro = require("./TabelaLivro");

class Livro {
  constructor({ id, titulo, descricao, preco, dataCriacao, dataAtualizacao }) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco = preco;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
  }

  async criar() {
    const resultadoDaPesquisa = await TabelaLivro.listar({
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco,
    });
    (this.id = resultadoDaPesquisa.id),
      (this.dataCriacao = resultadoDaPesquisa.dataCriacao),
      (this.dataAtualizacao = resultadoDaPesquisa.dataAtualizacao);
  }
}
module.exports = Livro;
