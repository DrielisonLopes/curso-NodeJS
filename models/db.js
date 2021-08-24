const Sequelize = require('sequelize');

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'vender3sql', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}