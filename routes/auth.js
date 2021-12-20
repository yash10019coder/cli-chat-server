const express = require('express');
express().use(express.json());
const user = require('../models/user');
const route = express.Router();
const userSchema = require('../models/user');

route.post("/login", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        const user = userSchema.findOne({ email: email, password: password });
        if (user.email === email) {
            if (user.password === password) {
                res.json({ "status": 1, "message": "Login Successful" });
            }
            else {
                res.json({ "status": 0, "message": "Invalid Password" });
            }
        } else {
            res.json({ status: 0, "message": "Invalid Email" });
        }
    } catch (err) {
        res.status(400).json({ "status": 0, "message": err.message });
    }
});

route.post("/signup", (req, res) => {
    try {
        req.id
        user.create({ name: req.body.name, email: req.body.email, password: req.body.password }, (err, user) => {
            if (err) {
                res.json({ "status": 0, "message": err.message });
            } else {
                res.json({ "status": 1, "message": "User Created" });
            }
        });
    } catch (err) {
        res.status(400).json({ "status": 0, "message": err.message });
    }
});

module.exports = route;