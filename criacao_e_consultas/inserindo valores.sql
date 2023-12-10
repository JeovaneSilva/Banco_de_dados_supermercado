-- inserindo fornecedores
INSERT INTO fornecedor (nome,contato)
VALUES ('Fortaleza','92344-1928');

INSERT INTO fornecedor (nome,contato)
VALUES ('Kicaldo','94564-7554');

INSERT INTO fornecedor (nome,contato)
VALUES ('Samuka','90998-9263');



-- inserindo produtos
INSERT INTO produto (nome_produto,preco) VALUES ('Arroz',3);

INSERT INTO produto (nome_produto,preco) VALUES ('Macarrão',3);

INSERT INTO produto (nome_produto,preco) VALUES ('Feijão',3);

INSERT INTO produto (nome_produto,preco) VALUES ('Açucar',2);

INSERT INTO produto (nome_produto,preco) VALUES ('Pão',2);

INSERT INTO produto (nome_produto,preco) VALUES ('Sal',1);

INSERT INTO produto (nome_produto,preco) VALUES ('Café',5);



-- inserindo produto no estoque
INSERT INTO estoque (id_produto,quantidade) VALUES (1,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (2,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (3,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (4,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (5,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (6,40);

INSERT INTO estoque (id_produto,quantidade) VALUES (7,40);



-- inserindo funcionarios
INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('caixa','Henzo','987.654.123-20',1.200,'2000-04-04');

INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('caixa','Cibele','354.656.433-56',1.200,'1989-02-21');

INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('caixa','Juan','343.735.823-25',1.200,'2001-07-24');

INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('repositor','Kairo','003.902.373-48',1.200,'1999-12-10');

INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('repositor','João Pedro','064.811.343-96',1.200,'2003-01-01');

INSERT INTO funcionario (cargo,nome,cpf,salario,data_nasc) 
VALUES ('gerente','Edvar','454.533.063-23',4.800,'1995-06-18');



-- inserindo clientes
INSERT INTO clientes (nome,cpf,contato,data_nasci)
VALUES ('Jeovane Lima','123.456.789-10','98149-1613','2004-12-25');

INSERT INTO clientes (nome,cpf,contato,data_nasci)
VALUES ('Arthur','987.654.321-00','98566-8452','2006-07-10');

INSERT INTO clientes (nome,cpf,contato,data_nasci)
VALUES ('Andresa','101.102.103-24','99234-6543','2006-11-15');



-- inserindo vendas
INSERT INTO vendas (id_cliente,data_venda,total_venda,id_funcionario)
VALUES (1,'2023-12-08',8,1);

INSERT INTO vendas (id_cliente,data_venda,total_venda,id_funcionario)
VALUES (2,'2023-12-08',144,2);

INSERT INTO vendas (id_cliente,data_venda,total_venda,id_funcionario)
VALUES (3,'2023-12-08',2,3);



-- inserindo os itens da compra da venda 1
INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (1,1,1,3);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (1,2,1,3);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (1,4,1,2);

-- inserindo os itens da compra da venda 2
INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,1,10,3);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,2,10,3);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,3,10,3);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,4,10,2);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,5,2,2);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,6,5,1);

INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (2,7,5,5);

-- inserindo os itens da compra da venda 3
INSERT INTO itens_vendas (id_vendas,id_produto,quantidade,preco_unitario)
VALUES (3,5,1,2);
















