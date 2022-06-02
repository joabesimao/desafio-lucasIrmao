const modelos = require("../../api/src/livros/ModeloTabelaLivro");

modelos
  .sync()
  .then(() => console.log("tabela criada com sucesso"))
  .catch(console.log);
