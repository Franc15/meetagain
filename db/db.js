const Event = require('../models/eventModel');
const User = require('../models/userModel');

// initialize the model
const eventModel = new Event('./db/events.db');
const userModel = new User('./db/users.db');

module.exports = {
    eventModel,
    userModel
};