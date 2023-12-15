const generalController = require('../controllers/generalController');
const { isAuthenticatedUser } = require('../middleware');

const express = require('express');

const router = express.Router();

router.get('/', generalController.index);

router.get('/about', generalController.about);

router.get('/dashboard', isAuthenticatedUser, generalController.dashboard);



module.exports = router;