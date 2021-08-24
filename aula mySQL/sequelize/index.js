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

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html")
})


// para abrir um servidor com expressa basta:
app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});