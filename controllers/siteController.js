const passport = require('passport');
const { UserExistsError } = require('passport-local-mongoose/lib/errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/usersModel');

module.exports = {
    index: (request, response) => {
        response.render('pages/index');
    },
    about: (request, response) => {
        response.render('pages/about');
    },
    login_get: (request, response) => {
        response.render('pages/login')
    },
    contribute: (request, response) => {
        response.render('pages/contribute');
    },
    logout: (request, response) => {
        request.logout();
        response.redirect('/');
    },
    login_post: (request, response) => {
        const {username, password} = request.body;
        console.log(username);
        console.log(password);
        const user = new User({
          username: username,
          password: password
        });
    
        request.login(user, (error) => {
          if (error) {
            console.log(error)
            response.redirect('/login');
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/admin');
            });
          }
        });
    },
    register_get: (request, response) => {
        response.render('pages/register')
    },
    register_post: (request, response) => {
        const {username, password} = request.body;
        console.log(username);
        console.log(password);
        User.register({username: username}, password, (error, user) => {
          if (error) {
            console.log(error);
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/login');
            });
          }
        }); 

    }
}