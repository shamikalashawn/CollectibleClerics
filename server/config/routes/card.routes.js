const cardController = require('../../controllers/cards');
const router = require('express').Router();

module.exports = router
    .post('/cards', cardController.create)
    .put('/cards/:id', cardController.edit)
    .put('/cards/add/:id', cardController.addCollector)
    .post('/cards/remove/:id', cardController.removeCollector)
    .get('/cards/:id', cardController.showOne)
    .get('/cards', cardController.showAll)
    .get('/cards/pack/:pack', cardController.showPack)
    .delete('/cards/:id', cardController.destroy)