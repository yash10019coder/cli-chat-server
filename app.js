const express = require('express');
const cors = require('cors');
const socketio = require('socketio');
require('dotenv/config');
const mongoose = ('./database/connect');

const auth = require('./routes/auth');

const app = express();

const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use("/auth", auth);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});