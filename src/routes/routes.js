const express = require('express'),
    router = express.Router(),
    DevController = require('./../controllers/DevController');

router
.get('/', (request, response) => response.status(200).json({ message: `Olá ${request.query.name}` }))
.post('/devs', DevController.store);

module.exports = router;