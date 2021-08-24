const express = require("express");
// qualquer coisa que precisar do express só utilizar agora a variável app
const app = express();

// rota principal da página
app.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu App!")
});

// criando nova rota pra página
app.get("/sobre", function(req, res) {
    res.send("Minha página sobre alguma coisa")
})
// criando a rota /blog
app.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu Node!")
})

// rota por parametro | O que estiver depois dos : é o parâmetro
// neste caso a rota só abre com os todos os parâmetros preenchidos
app.get("/ola/:nome/:cargo", function(req, res) {
    res.send("<h1>Olá " + req.params.nome + "</h1>"
        + "<h2> Seu cargo é " + req.params.cargo + "</h2>"); 
        // através do objeto req conseguimos os dados da requisição que foi feita
})

// neste caso através dp __dirname vamos enviar um arquivo
// que está no diretórido da nossa aplicação que é nosso index.html
app.get("/html", function (req, res) {
    res.sendFile(__dirname + "/html/index.html")
})
app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html")
})


// para abrir um servidor com expressa basta:
// *sempre tem que ser a última linha
app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});