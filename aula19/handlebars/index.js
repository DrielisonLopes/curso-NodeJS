const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});
