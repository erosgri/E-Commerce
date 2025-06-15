<?php
require ("conexao.php");

try {
    $conexao = novaConexao('ecommerce');

    // Exclui a tabela se já existir
    $dropTables = [
        "DROP TABLE IF EXISTS produtos"
    ];

    foreach ($dropTables as $drop) {
        $conexao->exec($drop);
    }

    // Cria a tabela 'produtos'
    $sqls = [
        "CREATE TABLE IF NOT EXISTS produtos (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            descript VARCHAR(255) NOT NULL,
            detail VARCHAR(255) NOT NULL,
            preco DECIMAL(10,2) NOT NULL,
            imageurl VARCHAR(1000) NOT NULL,
            stock DECIMAL(10) NOT NULL
        )"
    ];

    foreach ($sqls as $sql) {
        $resultado = $conexao->exec($sql);
        if ($resultado === false) {
            $erro = $conexao->errorInfo();
            echo "Erro ao criar tabela: " . $erro[2] . "<br>";
        } else {
            echo "Tabela criada com sucesso.<br>";
        }
    }

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

$conexao = null;
?>
