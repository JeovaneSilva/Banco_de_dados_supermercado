select * from produto

delete from produto 
where id_produto = 6

update produto
set nome_produto = 'Acucar'
where id_produto = 4



-- nome, quantidade e o preço dos produtos comprados na venda 1
select p.nome_produto,i.quantidade,i.preco_unitario from vendas v, produto p, itens_vendas i
where v.id_vendas = i.id_vendas and
p.id_produto = i.id_produto and
v.id_vendas = 1

-- nome e cpf do funcionario caixa que fez a venda 2
select f.nome,f.cpf from funcionario f,vendas v
where f.id_funcionario = v.id_funcionario and
f.cargo = 'caixa' and 
v.id_vendas = 1

-- nome dos funcionarios que fizeram todas as vendas
select f.cargo,f.nome,v.* from funcionario f, vendas v
where f.id_funcionario = v.id_funcionario and
f.cargo = 'caixa'

-- produtos mais vendidos
SELECT P.nome_produto, SUM(IV.quantidade) AS Total_Vendido
FROM Produto P
JOIN itens_Vendas IV ON P.id_produto = IV.id_produto
GROUP BY P.id_produto
ORDER BY Total_Vendido DESC;


-- produtos em estoque 
select p.nome_produto,e.quantidade from produto p, estoque e
where p.id_produto = e.id_produto and
e.quantidade > 0


-- Identificar os produtos comprados por um cliente específico
select c.nome,p.nome_produto from produto p, itens_vendas it, vendas v, clientes c
where p.id_produto = it.id_produto and
v.id_vendas = it.id_vendas and 
v.id_cliente = c.id_cliente and 
c.id_cliente = 3


-- Listar todas as vendas com detalhes de itens e clientes associados:
SELECT v.ID_vendas, c.nome AS Nome_Cliente, iv.quantidade, iv.preco_unitario, p.Nome_produto
FROM vendas v
JOIN clientes c ON v.ID_cliente = c.ID_cliente
JOIN itens_vendas iv ON v.ID_vendas = iv.ID_vendas
JOIN produto p ON iv.ID_produto = p.ID_produto;


-- total de vendas por mês e ano:
SELECT EXTRACT(MONTH FROM data_venda) AS Mes, EXTRACT(YEAR FROM data_venda) AS Ano, SUM(CAST(total_venda AS DECIMAL)) AS Total_Vendas
FROM vendas
GROUP BY Mes, Ano;

-- total vendas por clientes
SELECT c.nome AS Nome_Cliente, SUM(CAST(v.total_venda AS DECIMAL)) AS Total_Vendas
FROM clientes c
JOIN vendas v ON c.ID_cliente = v.ID_cliente
GROUP BY c.nome;


-- total vendas por produtos
SELECT p.Nome_produto, SUM(CAST(iv.preco_unitario AS DECIMAL) * iv.quantidade) AS Total_Vendas
FROM produto p
JOIN itens_vendas iv ON p.ID_produto = iv.ID_produto
GROUP BY p.Nome_produto;