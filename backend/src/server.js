require('dotenv').config();

const express = require('express'),
    server = express(),
    mongoose = require('mongoose'),
    cors = require('cors'),
    routes = require('./routes/routes');

mongoose.connect(`mongodb+srv://${process.env.userDB}:${process.env.pwdDB}@cluster0-t0sz5.mongodb.net/omnistack?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server
.use(cors())
.use(express.json())
.use(routes);

server.listen(process.env.port, () => {
    console.log(`server rodando na porta ${process.env.port}`);
});