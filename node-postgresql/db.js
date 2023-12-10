async function connect(){

    if(global.connection) 
        return global.connection.connect();
        
    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const supermercado = await pool.connect();
    console.log("criou o pool de conexao");

    const res = await supermercado.query("select now()");
    console.log(res.rows[0])
    supermercado.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectProdutos(){
    const supermercado = await connect();
    const res = await supermercado.query("Select * from produto");
    return res.rows;
}

async function selectProduto(id){
    const supermercado = await connect();
    const res = await supermercado.query("Select * from produto where id_produto=$1", [id]);
    return res.rows;
}

async function insertProduto(produto){
    const supermercado = await connect();
    const sql = "insert into produto(nome_produto,preco) values ($1,$2)";
    const values = [produto.nome_produto, produto.preco];
    await supermercado.query(sql, values);
}

async function updateProduto(id_produto, produto){
    const supermercado = await connect();
    const sql = "update produto set nome_produto=$1, preco=$2 where id_produto=$3";
    const values = [produto.nome_produto, produto.preco, id_produto];
    await supermercado.query(sql, values);
}

async function deleteProduto(id_produto){
    const supermercado = await connect();
    const sql = "delete from produto where id_produto=$1";
    const values = [id_produto];
    await supermercado.query(sql, values);
}

module.exports = {
    selectProdutos,
    selectProduto,
    insertProduto,
    updateProduto,
    deleteProduto
}