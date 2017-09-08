const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const parser = require('body-parser');
const cookie = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 5000;

const app = express();

//parser
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//connect angular app
app.use(express.static(path.join(__dirname, 'dist')));

//session and cookie
const sessionConfig = {
    saveUninitialized: true,
    secret: "SessionSecret",
    resave: true,
    name: "session",
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 36000000
    }
};

app.use(cookie('ajvbvfhfnkxndhfvckcnc'));
app.use(session(sessionConfig));

//database
require('./server/config/database');

//routes
app.use(require('./server/config/routes/user.routes'));
app.use(require('./server/config/routes/card.routes'));
app.use(require('./server/config/routes/catch-all.routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));