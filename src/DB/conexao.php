<?php
function novaConexao($banco = 'ecommerce')
{
    $servidor = '127.0.0.1';
    $usuario = 'root';
    $senha = 'carabina22';

    try {
        $conexao = new PDO(
            "mysql:host=$servidor;dbname=$banco;charset=utf8mb4",
            $usuario,
            $senha
        );
        return $conexao;
    } catch (PDOException $e) {
        die('Erro: ' . $e->getMessage());
    }
}