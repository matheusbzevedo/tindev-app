const express = require('express'),
    router = express.Router(),
    DevController = require('./../controllers/DevController'),
    LikeController = require('./../controllers/LikeController');

router
.get('/', (request, response) => response.status(200).json({ message: `Olá ${request.query.name}` }))
.post('/devs', DevController.store)
.post('/devs/:devId/likes', LikeController.store);

module.exports = router;