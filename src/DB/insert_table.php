<?php
require ("conexao.php");

try {
    $conexao = novaConexao();

    $sqlInsert = "INSERT INTO produtos (title, description, detailedDescription, price, imageUrl, stock) VALUES
        
         ('iPad Pro 11',
         'Tablet Apple com chip M1 e tela Liquid Retina',
         'O iPad Pro 11 com chip M1 transcende a categoria de tablets. A tela Liquid Retina de 11 polegadas com ProMotion e True Tone oferece uma experiência visual incomparável. O chip M1 traz performance de desktop para um dispositivo portátil. Ideal para criação de conteúdo, edição de fotos e vídeos profissionais. Compatível com Apple Pencil 2ª geração e Magic Keyboard, transforma-se em uma estação de trabalho completa.',
         7499.9,
         'https://www.iplace.com.br/ccstore/v1/images/?source=/file/v7239768354432498472/products/230267.00.638566474433435599-ipad-pro-11polegadas-m4-wifi-256gb-preto-espacial-mvw13bz-a.jpg&height=424&width=424&quality=0.9',
         21),
         ('Monitor Dell 27',
         'Monitor UltraSharp 4K com HDR',
         'O Monitor Dell UltraSharp 27 é a escolha definitiva para profissionais criativos. Com resolução 4K e suporte a HDR, oferece cores precisas e detalhes impressionantes. A tecnologia IPS com ângulo de visão de 178° mantém a consistência das cores em qualquer posição. Calibrado de fábrica com precisão de cores DeltaE < 2, é perfeito para trabalhos que exigem fidelidade cromática. Possui conectividade versátil incluindo USB-C com Power Delivery de 90W.',
         3299.9,
         'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3764&hei=2248&qlt=100,1&resMode=sharp2&size=3764,2248&chrss=full&imwidth=5000',
         8),
         ('Teclado Mecânico Keychron',
         'Teclado mecânico sem fio com switches Brown',
         'O Keychron é um teclado mecânico premium projetado para máxima produtividade e satisfação na digitação. Equipado com switches Gateron Brown, oferece feedback tátil suave sem ruído excessivo. O layout hot-swappable permite personalização dos switches sem solda. Conectividade Bluetooth 5.1 com até 3 dispositivos e modo com fio USB-C. A estrutura em alumínio e keycaps em PBT double-shot garantem durabilidade excepcional.',
         950.55,
         'https://keychronbrasil.com.br/cdn/shop/files/Keychron-K5-Max-QMK-VIA-ultra-slim-custom-mechanical-keyboard-100-percent-full-size-layout-for-Mac-Windows-Linux-low-profile-Gateron-red.jpg?v=1724443361',
         12),
         ('PlayStation 5',
         'Console de videogame com SSD ultrarrápido',
         'O PlayStation 5 representa uma revolução em entretenimento digital. O SSD customizado oferece carregamentos praticamente instantâneos e permite novas possibilidades de design de jogos. O processador AMD Zen 2 e GPU RDNA 2 permitem jogos em 4K com ray tracing em tempo real. O controle DualSense com feedback háptico avançado e gatilhos adaptativos proporciona imersão sem precedentes. Áudio 3D Tempest permite localização precisa de sons no espaço.',
         3250.99,
         'https://webfones.vtexassets.com/arquivos/ids/245410-800-800?v=638749789784500000&width=800&height=800&aspect=true',
         62)";

    $conexao->exec($sqlInsert);

    echo "Dados inseridos com sucesso!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
