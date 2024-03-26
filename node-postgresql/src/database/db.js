
const { Pool } = require("pg");
const conect = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

console.log("criou o pool de conexao");

module.exports = conect
    

// async function selectProduto(id){
//     const supermercado = await connect();
//     const res = await supermercado.query("Select * from produto where id_produto=$1", [id]);
//     return res.rows;
// }

// async function insertProduto(produto){

//     const sql = "insert into produto(nome_produto,preco) values ($1,$2)";
//     const values = [produto.nome_produto, produto.preco];
//     await supermercado.query(sql, values);
// }

// async function updateProduto(id_produto, produto){
//     const supermercado = await connect();
//     const sql = "update produto set nome_produto=$1, preco=$2 where id_produto=$3";
//     const values = [produto.nome_produto, produto.preco, id_produto];
//     await supermercado.query(sql, values);
// }

// async function deleteProduto(id_produto){
//     const supermercado = await connect();
//     const sql = "delete from produto where id_produto=$1";
//     const values = [id_produto];
//     await supermercado.query(sql, values);
// }

