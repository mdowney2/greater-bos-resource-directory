const passport = require('passport');
const { UserExistsError } = require('passport-local-mongoose/lib/errors');
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
        response.redirect('pages/login');
    },
    login_post: (request, response) => {
        const {username, password} = request.body;
        User.findOne({username: username}, (error, foundUser) => {
            if (error) {
                return error;
            } else {
                passport.authenticate('local'), (request, response) => {
                    response.redirect('pages/index');
                }
            }
        })
    },
    register_get: (request, response) => {
        response.render('pages/signup')
    },
    register_post: (request, response) => {
        const {username, password} = request.body;
        User.register({username: request.body.username}, request.body.password, (error) => {
            if (error) {
                response.redirect('pages/signup')
            } else {
                response.redirect('pages/login')
            }
        });

    }
}