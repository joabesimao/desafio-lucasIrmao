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
    this.validar();
    const resultadoDaPesquisa = await TabelaLivro.inserir({
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco,
    });
    (this.id = resultadoDaPesquisa.id),
      (this.dataCriacao = resultadoDaPesquisa.dataCriacao),
      (this.dataAtualizacao = resultadoDaPesquisa.dataAtualizacao);
  }

  async carregar() {
    const encontrado = await TabelaLivro.pegarPorId(this.id);
    this.titulo = encontrado.titulo;
    this.descricao = encontrado.descricao;
    this.preco = encontrado.preco;
    this.dataCriacao = encontrado.dataCriacao;
    this.dataAtualizacao = encontrado.dataAtualizacao;
  }

  async atualizar() {
    await TabelaLivro.pegarPorId(this.id);
    const campos = ["titulo", "descricao", "preco"];
    const dadosParaAtualizar = {};

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor === "string" && valor.length > 0) {
        dadosParaAtualizar[campo] = valor;
      }
    });
    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new Error("nao foram fornecidos dados para atualizar");
    }
    await TabelaLivro.atualizar(this.id, dadosParaAtualizar);
  }

  remover() {
    return TabelaLivro.remover(this.id);
  }

  validar() {
    const campos = ["titulo", "descricao", "preco"];

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor != "string" || valor.length === 0) {
        throw new Error(`o campo${campo}está invalido`);
      }
    });
  }
}
module.exports = Livro;
