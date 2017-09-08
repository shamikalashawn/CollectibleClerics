const userController = require('../../controllers/users');
const router = require('express').Router();

module.exports = router
    .post('/register', userController.register)
    .post('/login', userController.login)
    .get('/logout', userController.logout)
    .get('/logoutUser', userController.logoutUser)
    .get('/users/:id', userController.showOne)
    .get('/users', userController.showAll)
    .get('/user', userController.getCurrentUser)
    .put('/users/:id', userController.edit)
    .put('/users/remove/:id', userController.removeCard)
    .delete('/users/:id', userController.destroy)