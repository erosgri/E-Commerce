<?php
header("Content-Type: application/json");
require_once "conexao.php";

$conexao = novaConexao('ecommerce');

$method = $_SERVER['REQUEST_METHOD'];

try {
    if ($method === 'GET') {
        // Retorna todos os produtos
        $stmt = $conexao->query("SELECT * FROM produtos");
        $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($produtos);

    } elseif ($method === 'POST') {
        // Insere novo produto
         $dados = json_decode(file_get_contents("php://input"), true);

        $sql = "INSERT INTO produtos (title, descript, detail, preco, imageurl, stock)
                VALUES (:title, :descript, :detail, :preco, :imageurl, :stock)";
        $stmt = $conexao->prepare($sql);
        $stmt->execute([
            'id' => $dados['id'],
            ':title' => $dados['title'],
            ':descript' => $dados['descript'],
            ':detail' => $dados['detail'],
            ':preco' => $dados['preco'],
            ':imageurl' => $dados['imageurl'],
            ':stock' => $dados['stock'],
        ]);
        echo json_encode(['message' => 'Produto inserido com sucesso', 'id' => $conexao->lastInsertId()]);

    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Método não permitido']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

$conexao = null;