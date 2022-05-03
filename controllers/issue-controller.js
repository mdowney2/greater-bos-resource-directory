const data = require('../data/dummyData');
const { v4: uuid } = require('uuid');
uuid();

module.exports = {
    issues: (request, response) => {
        response.render('pages/issues');
    },
    issue: (request, response) => {
        response.render('pages/issue');
    },
};