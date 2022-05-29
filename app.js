require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path= require('path');
const bodyParser = require('body-parser');
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes/indexRouter')
const app = express();

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes);

const PORT = 3005;

app.use(morgan('combined'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});