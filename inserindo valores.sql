INSERT INTO produto (nome_produto,preco)
VALUES ('Sal',2.996);


INSERT INTO estoque (id_produto,quantidade)
VALUES (5,10); 


INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc)
VALUES ('repositor','henzo','987.654.123-20',1.200,'2000-04-04');


INSERT INTO clientes (nome,cpf,contato,data_nasci)
VALUES ('kairo','123.456.789-10','98149-1613','2004-12-25');


INSERT INTO fornecedor (nome,contato)
VALUES ('Fortaleza','92344-1928');


INSERT INTO vendas (id_cliente,data_venda,total_venda,id_funcionario)
VALUES (3,'2023-12-08',2.99,1);


INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (1,1,3,2.99);