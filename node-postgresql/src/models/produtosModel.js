const conect = require("../database/db");

class ProdutosModel {
   async listar() {
        await conect.connect()
        const res = await conect.query( "Select * from produto")
        return res.rows
    }

    async listarId(id) {
        await conect.connect()
        const res = await conect.query("Select * from produto where id_produto=$1", [id]);
        return res.rows
    }

    async criar(produto) {
        await conect.connect()
        const sql = "insert into produto(nome_produto,preco) values ($1,$2)";
        const values = [produto.nome_produto, produto.preco];
        await conect.query(sql, values);
    }
}

module.exports = new ProdutosModel()