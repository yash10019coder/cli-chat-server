const express = require('express');
const route = express.Router();

route.post("/login", (req, res) => {
    res.send("login");
});

route.post("/signup", (req, res) => {
    res.send("signup");
});

module.exports = route;