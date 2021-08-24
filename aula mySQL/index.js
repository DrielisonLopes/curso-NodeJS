// para criar Tabelas
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

SHOW TABLES; // amostra os dados da Tabela
SELECT * FROM usuarios;// lista todos os dados da Tabela
DELETE FROM usuarios WHERE name "Victor"; // deletar
UPDATE usuarios SET idade = 23 WHERE nome = "Drielison Lopes" // para atualizar algum dado

// inserindo dados no banco de dados
INSERT INTO usuarios (nome, email, idade) VALUES(
    "Drielison Lopes",
    "email@teste.com",
    33
)

// para pegar um tipo de usuário específico
SELECT * FROM usuarios WHERE idade = 8;
