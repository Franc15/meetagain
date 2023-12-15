const express = require('express');

const { eventModel } = require('../db/db');

exports.getAllEvents = async (req, res) => {
    const events = await eventModel.all();
    console.log(events);
    res.render('events/events', { events });
};

exports.getEvent = async (req, res) => {
    const event = await eventModel.find(req.params.id);
    res.render('events/event', { event });
};

exports.getCreateEvent = (req, res) => {
    res.render('events/newEvent');
};

exports.createEvent = async (req, res) => {
    const newEvent = req.body;
    newEvent.createdBy = req.session.user?.email;
    const event = await eventModel.create(req.body);
    res.redirect(`/events/${event._id}`);
};

exports.deleteEvent = async (req, res) => {
    await eventModel.delete(req.params.id);
    res.redirect('/events');
};

exports.getEditEvent = async (req, res) => {
    const event = await eventModel.find(req.params.id);
    res.render('events/editEvent', { event });
};

exports.editEvent = async (req, res) => {
    await eventModel.update(req.params.id, req.body);
    res.redirect(`/events/${req.params.id}`);
};

