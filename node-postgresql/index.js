require("dotenv").config();

const express = require("express");
const app = express();

const cors = require('cors')

const port = process.env.PORT;
const router = require("./src/routers/index")


const bodyParser = require('body-parser')

app.use(cors())

router(app, express);

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro")
        return;
    }
    console.log("Backend Rodando.")
});

