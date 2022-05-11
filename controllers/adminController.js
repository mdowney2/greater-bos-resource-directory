const mongoose = require('mongoose');
const Issue = require('../models/issuesModel');
const Resource = require('../models/resourcesModel');
const { issues } = require('./issueController');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
    },
    admin_showIssues: (request, response) => {
        const { _id } = request.params;
        Issue.find({ _id: _id}, (error, allIssues) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminIssues', {
                    issuesList: allIssues
                });
            };
        });
    },
    admin_addIssue: (request, response) => {
        response.render('pages/adminAddIssue');
    },

    admin_showIssuePage: (request, response) => {
        const { _id } = request.params;
        issues.findOne({_id: _id}, (error, foundIssue) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminIssues', {
                    issue: foundIssue
                });
            };
        });
    },
    admin_allResources: (request, response) => {
        issues.find({}, (error, allResources) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResources', {
                    resourcesArray: allResources
                })
            }
        })
    },
    admin_oneResource: (request, response) => {
        const {_id} = request.params;
        resources.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResource', {
                    resource: foundResource
                });
            }
        })
    },
    adminUpdateResource_get: (request, response) => {
        const{_id} = request.params;
        resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminUpdateResource', {
                    foundResource: foundResource
                })
            }
        })
    },
    
}




   