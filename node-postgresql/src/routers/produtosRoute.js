const { Router } = require('express')
const router = Router();

const produtosController = require('../controllers/produtosController')

const db = require("../database/db");

router.get("/produtos/:id", async (req, res) => {
    const produto = await produtosController.index(req.params.id);
    res.json(produto);
})


router.get("/produtos", async (req, res) => {
    const produtos = await produtosController.buscar();
    res.json(produtos)
})

router.post("/produtos", async (req, res) => {
    await produtosController.create(req.body)
    res.sendStatus(201);
}) 

// update no banco
router.patch("/produtos/:id", async (req, res) => {
    await db.updateProduto(req.params.id, req.body);
    res.sendStatus(200);
})


router.delete("/produtos/:id", async (req, res) => {
    await db.deleteProduto(req.params.id);
    res.sendStatus(204);
}) 

module.exports = router;