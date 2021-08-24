// o módulo http faz parte do núcleo do Node
// sendo assim só precisa colocar o nome do módulo
var http = require('http');

// para abrir um servidor http usa createServer()
// listen() - serve para informa em qual porta irá rodar
http.createServer(function(req, res){
    res.end("Olá!")
}).listen(8081);
// o res - serve para mandar alguma resposta para o usuário

console.log("O servidor está rodando");