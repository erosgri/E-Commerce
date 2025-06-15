<?php

if (php_sapi_name() === 'cli') {
    echo "Esse script deve ser acessado via navegador ou requisição HTTP.";
    exit;
}

// Permite qualquer origem (ou especifique a URL do seu front)
header("Access-Control-Allow-Origin: *");

// Permite os métodos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permite os headers
header("Access-Control-Allow-Headers: Content-Type");

// Se for requisição OPTIONS (pré-flight), encerra aqui
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}


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

        $sql = "INSERT INTO produtos (title, description, detailedDescription, price, imageUrl, stock)
                VALUES (:title, description, detailedDescription, price, imageUrl, stock)";
        $stmt = $conexao->prepare($sql);
        $stmt->execute([
            'id' => $dados['id'],
            ':title' => $dados['title'],
            ':description' => $dados['description'],
            ':detailedDescription' => $dados['detailedDescription'],
            ':price' => $dados['price'],
            ':imageUrl' => $dados['imageUrl'],
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