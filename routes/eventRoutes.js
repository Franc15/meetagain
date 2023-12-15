const eventController = require('../controllers/eventController');
const { isAuthenticatedUser } = require('../middleware');

const express = require('express');

const router = express.Router();

router.get('/', eventController.getAllEvents);

router.get('/new', isAuthenticatedUser, eventController.getCreateEvent);

router.post('/', isAuthenticatedUser, eventController.createEvent);

router.get('/edit/:id', isAuthenticatedUser, eventController.getEditEvent);

router.put('/edit/:id', isAuthenticatedUser, eventController.editEvent);

router.get('/:id', isAuthenticatedUser, eventController.getEvent);

router.delete('/:id', isAuthenticatedUser, eventController.deleteEvent);



module.exports = router;