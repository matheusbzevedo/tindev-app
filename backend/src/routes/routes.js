const express = require('express'),
    router = express.Router(),
    DevController = require('./../controllers/DevController'),
    LikeController = require('./../controllers/LikeController'),
    DislikeController = require('./../controllers/DislikeController');

router
.get('/', (request, response) => response.status(200).json({ message: `Olá ${request.query.name}` }))
.get('/devs', DevController.index)
.post('/devs', DevController.store)
.post('/devs/:devId/likes', LikeController.store)
.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = router;