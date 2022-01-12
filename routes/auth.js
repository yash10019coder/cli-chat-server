const express = require('express');
express().use(express.json());
const route = express.Router();
const userSchema = require('../models/user');
const bcrypt = require('bcrypt');

route.post("/login", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        userSchema.findOne({'email': email}, (err, user) => {
            if (user.email === email) {
                if (user.password === password) {
                    res.json({"status": 1, "message": "Login Successful"});
                } else {
                    res.json({"status": 0, "message": "Invalid Password"});
                }
            } else {
                res.json({status: 0, "message": "Invalid Email"});
            }

        });
    } catch (err) {
        res.status(400).json({"status": 0, "message": err.message});
    }
});

route.post("/signup", async (req, res) => {
    try {
        let usersArray = await userSchema.findOne({'email': req.body.email});
        if (usersArray !== null) {
            res.json({"status": 0, "message": "Email already exists"});
        } else {
            const saltRounds = 10;
            await bcrypt.genSalt(saltRounds, async (err, salt) => {
                req.body.password = await bcrypt.hash(req.body.password, salt);
            });
            console.log(req.body.password);
            userSchema.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }, (err, user) => {
                if (err) {
                    res.json({"status": 0, "message": err.message});
                } else {
                    res.json({"status": 1, "message": "User Created"});
                }
            });
        }
    } catch (err) {
        res.status(400).json({"status": 0, "message": err.message});
    }
});

module.exports = route;