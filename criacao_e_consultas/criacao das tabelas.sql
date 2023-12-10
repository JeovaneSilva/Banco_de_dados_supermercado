CREATE TABLE fornecedor (
	ID_fornecedor serial,
	nome varchar(30),
	contato varchar(20),
	PRIMARY KEY (ID_fornecedor)
);

CREATE TABLE produto (
 	ID_produto serial,
 	Nome_produto varchar(30),
 	preco numeric(10, 2),
 	PRIMARY KEY (ID_produto)
);


CREATE TABLE estoque (
 ID_estoque serial,
 ID_produto integer,
 quantidade integer,
 PRIMARY KEY (ID_estoque),
 FOREIGN KEY (ID_produto) REFERENCES produto (ID_produto)
);


CREATE TABLE funcionario (
	ID_funcionario serial,
	cargo varchar(20),
	Nome varchar(30),
	cpf varchar(14),
	salario numeric(12, 2),
	data_nasc date,
	PRIMARY KEY (ID_funcionario)
);


CREATE TABLE clientes (
	ID_cliente serial,
	nome varchar(30),
	cpf varchar(14),
	contato varchar(20),  
	data_nasci date,
	PRIMARY KEY (ID_cliente)
);


CREATE TABLE vendas (
	ID_vendas serial,
	ID_cliente integer,
	data_venda date,
	total_venda numeric(10, 2),
	ID_funcionario integer,
	PRIMARY KEY (ID_vendas),
	FOREIGN KEY (ID_cliente) REFERENCES clientes (ID_cliente),
	FOREIGN KEY (ID_funcionario) REFERENCES funcionario (ID_funcionario)
);

CREATE TABLE itens_vendas (
	ID_itens_venda serial,
	ID_vendas integer,
	ID_produto integer,
	quantidade integer,
	preco_unitario numeric(10, 2),
	Primary key (ID_itens_venda),
	Foreign key (ID_vendas) references vendas (ID_vendas),
	Foreign key (ID_produto) references produto (ID_produto)
);