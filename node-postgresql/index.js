require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");
const cors = require('cors')

const app = express();

const bodyParser = require('body-parser')
app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.get("/produtos/:id", async (req, res) => {
    const produto = await db.selectProduto(req.params.id);
    res.json(produto);
})


app.get("/produtos", async (req, res) => {
    const produtos = await db.selectProdutos();
    res.json(produtos);
})

app.post("/produtos", async (req, res) => {
    await db.insertProduto(req.body);
    res.sendStatus(201);
})

// update no banco
app.patch("/produtos/:id", async (req, res) => {
    await db.updateProduto(req.params.id, req.body);
    res.sendStatus(200);
})


app.delete("/produtos/:id", async (req, res) => {
    await db.deleteProduto(req.params.id);
    res.sendStatus(204);
})

app.listen(port);

console.log("backend rodando")