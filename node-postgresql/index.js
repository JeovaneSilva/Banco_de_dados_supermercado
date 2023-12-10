require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.get("/clientes/:id", async (req, res) => {
    const cliente = await db.selectProduto(req.params.id);
    res.json(cliente);
})


app.get("/clientes", async (req, res) => {
    const clientes = await db.selectProdutos();
    res.json(clientes);
})

app.post("/clientes", async (req, res) => {
    await db.insertProduto(req.body);
    res.sendStatus(201);
})

// update no banco
app.patch("/clientes/:id", async (req, res) => {
    await db.updateProduto(req.params.id, req.body);
    res.sendStatus(200);
})


app.delete("/clientes/:id", async (req, res) => {
    await db.deleteProduto(req.params.id);
    res.sendStatus(204);
})

app.listen(port);

console.log("backend rodando")