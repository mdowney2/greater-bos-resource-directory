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
                console.log(allIssues);
                response.render('pages/adminIssues', {
                    allIssues: allIssues
                });
            };
        });
    },
    admin_addIssue: (request, response) => {
        response.render('pages/adminAddIssue');
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
        Resource.find({}, (error, allResources) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResources', {
                    allResources: allResources
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




   