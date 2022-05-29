const mongoose = require('mongoose');
const Issue = require('../models/issuesModel');
const Resource = require('../models/resourcesModel');
const { issues } = require('./issueController');

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
        response.render('pages/admin');
    } else {
        response.redirect('pages/login');
    }},
    admin_showIssues: (request, response) => {
        if (request.isAuthenticated()) {
                    Issue.find({}, (error, allIssues) => {
            if (error) {
                return error;
            } else {
                console.log(allIssues);
                response.render('pages/adminIssues', {
                    allIssues: allIssues
                });
            };
        })} else {
            response.redirect('pages/login');
        };
    },
    admin_addIssue: (request, response) => {
        if (request.isAuthenticated()) {
        response.render('pages/adminAddIssue');
        } else {
            response.redirect('pages/login');
        }
    },

    admin_showIssuePage: (request, response) => {
        const { _id } = request.params;
        Issue.findOne({_id: _id}, (error, foundIssue) => {
            if (error) {
                return error;
            } else {
                console.log(foundIssue);
                response.render('pages/adminIssues', {
                    foundIssue: foundIssue
                });
            };
        });
    },
    admin_allResources: (request, response) => {
        if (request.isAuthenticated()){
        Resource.find({}, (error, allResources) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResources', {
                    allResources: allResources
                })
            }
        })}
        else {
            response.redirect('pages/login');
        }
    },
    admin_oneResource: (request, response) => {
        if (request.isAuthenticated()) {
        const {_id} = request.params;
        resources.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResource', {
                    resource: foundResource
                });
            }
        })} else {
            response.redirect('pages/login');
        }
    },
    adminUpdateResource_get: (request, response) => {
        if (request.isAuthenticated()) {
        const{_id} = request.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminUpdateResource', {
                    resource: foundResource
                })
            }
        })}
        else {
            response.redirect('pages/login');
        }
    },
    adminUpdateIssue_get: (request, response) => {
        if (request.isAuthenticated()) {
        const {_id} = request.params;
        Issue.findOne({_id: _id}, (error, foundIssue) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminUpdateIssue', {
                    issue: foundIssue,
                })
            }
        })
    } else {
        response.redirect('pages/login');
    }}
    
}




   