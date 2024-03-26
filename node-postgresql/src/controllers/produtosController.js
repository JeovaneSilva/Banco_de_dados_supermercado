const produtosModel = require('../models/produtosModel')

class ProdutosController {
    buscar() {
        return produtosModel.listar()
    }

    index(id) {
        return produtosModel.listarId(id)
    }

    create(produto) {
        return produtosModel.criar(produto)
    }

    update() {

    }

    delete() {

    }
}

module.exports = new ProdutosController()