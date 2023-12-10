async function connect(){

    if(global.connection) 
        return global.connection.connect();
        
    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();
    console.log("criou o pool de conexao");

    const res = await client.query("select now()");
    console.log(res.rows[0])
    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectProdutos(){
    const client = await connect();
    const res = await client.query("Select * from produto");
    return res.rows;
}

async function selectProduto(id){
    const client = await connect();
    const res = await client.query("Select * from produto where id_produto=$1", [id]);
    return res.rows;
}

async function insertProduto(produto){
    const client = await connect();
    const sql = "insert into produto(nome_produto,preco) values ($1,$2)";
    const values = [produto.nome_produto, produto.preco];
    await client.query(sql, values);
}

async function updateProduto(id_produto, produto){
    const client = await connect();
    const sql = "update produto set nome_produto=$1, preco=$2 where id_produto=$3";
    const values = [produto.nome_produto, produto.preco, id_produto];
    await client.query(sql, values);
}

async function deleteProduto(id_produto){
    const client = await connect();
    const sql = "delete from produto where id_produto=$1";
    const values = [id_produto];
    await client.query(sql, values);
}

module.exports = {
    selectProdutos,
    selectProduto,
    insertProduto,
    updateProduto,
    deleteProduto
}