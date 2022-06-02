const Sequelize = require("sequelize");
const instancia = require("../../banco-de-dados");

const colunas = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
};
const opcoes = {
  freezeTableName: true,
  tableName: "livros",
  timestamps: true,
  createdAt: "dataCriacao",
  updatedAt: "dataAtualizacao",
};

module.exports = instancia.define("livro", colunas, opcoes);
