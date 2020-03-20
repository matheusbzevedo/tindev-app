require('dotenv').config();

const express = require('express'),
    server = express(),
    mongoose = require('mongoose'),
    routes = require('./routes/routes');

mongoose.connect(`mongodb+srv://${process.env.userDB}:${process.env.pwdDB}@app-3ahup.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server
.use(express.json())
.use(routes);

server.listen(process.env.port, () => {
    console.log(`server rodando na porta ${process.env.port}`);
});