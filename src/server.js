require('dotenv').config();

const express = require('express'),
    server = express();

server.listen(process.env.port, () => {
    console.log(`server rodando na porta ${process.env.port}`);
});