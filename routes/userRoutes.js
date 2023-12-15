const userController = require('../controllers/userController');

const express = require('express');

const router = express.Router();

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/signup', userController.getCreateUser);

router.post('/signup', userController.createUser);

router.get('/logout', userController.logout);


module.exports = router;