const { response } = require("express");
const { v4: uuidv4 } = require("uuid");
const express = require("express");

const app = express();
const customer = [];
app.use(express.json());

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const id = uuidv4();

    customer.push({
        cpf,
        id,
        name,
        statement: []
    })

    return response.status(201).send("Account created !");
});

app.listen(3333);