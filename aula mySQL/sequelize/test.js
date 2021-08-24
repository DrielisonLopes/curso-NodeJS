const Sequelize = require('sequelize');
// 1 param- qual dado quer se conectar;
// 2 param- o usuário do seu banco de dados do MySQL;
// 3 param- a sua senha de conexão ao mySQL;
// 4 param- um objeto JSON;
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost", // em qual servidor esta nosso banco
    dialect: 'mysql' // qual tipo de banco quer se conectar
});
/*
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar. Error: ' + erro)
});
*/

// model de postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true}) ->sync de sincronizar e force pra ter certeza que a tabela vai ser gerada
// já para alterar precisa do seguinte comando
Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "Agora um lorem ipsum pra ficar legal pagode"
})

// model de usuarios
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})


//Para criar um usuario
Usuario.create({
    name: "Drielison",
    sobrenome: "Lopes",
    idade: 33,
    email: "blabla@mail.com"
})
