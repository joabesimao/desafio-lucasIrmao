const modelo = require("./ModeloTabelaLivro");

module.exports = {
  listar() {
    return modelo.findAll();
  },
};
