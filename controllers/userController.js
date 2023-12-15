const express = require('express');

const { userModel } = require('../db/db');

// userModel.init();

exports.getLogin = async (req, res) => {
    res.render('auth/login');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);
    console.log(user)
    if (user) {
        if (user.password === password) {
            req.session.user = user;
            res.redirect('/events');
        } else {
            res.render('auth/login', { message: 'Invalid password' });
        }
    } else {
        res.render('auth/login', { message: 'User account does not exist' });
    }
};

exports.getCreateUser = (req, res) => {
    res.render('auth/newUser');
};

exports.createUser = async (req, res) => {
    const { firstname, lastname, phone, email, address, city, state, zip, password } = req.body;
    const role = 'user';
    const user = await userModel.create({
        firstname,
        lastname,
        phone,
        email,
        address,
        city,
        state,
        zip,
        password,
        role,
    });
    res.redirect('/auth/login');
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};