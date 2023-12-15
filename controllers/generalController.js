const express = require("express");

const { eventModel, userModel } = require("../db/db");

exports.index = async (req, res) => {
  res.render("index");
};

exports.about = async (req, res) => {
  res.render('about');
};

exports.dashboard = async (req, res) => {
  const events = await eventModel.all();
  const users = await userModel.all();
  res.render("dashboard", {
    events:
      req.session.user?.role === "manager"
        ? events
        : events.filter((event) => event.createdBy === req.session.user?.email),
    users: req.session.user?.role === "manager" ? users.filter(user => user.role !== 'manager') : null,
    isManager: req.session.user?.role === "manager",
  });
};
