const modelo = require("./ModeloTabelaLivro");

module.exports = {
  listar() {
    return modelo.findAll();
  },

  inserir(livro) {
    return modelo.create(livro);
  },

  async pegarPorId(id) {
    const encontrado = await modelo.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw new Error("livro nao encontrado!");
    }
    return encontrado;
  },

  atualizar(id, dadosParaAtualizar) {
    return modelo.update(dadosParaAtualizar, {
      where: {
        id: id,
      },
    });
  },

  remover(id) {
    return modelo.destroy({
      where: { id: id },
    });
  },
};
