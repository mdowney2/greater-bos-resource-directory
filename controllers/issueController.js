
const Resource = require('../models/resourcesModel');
// const Resource = require('Resource');
const Issue = require('../models/issuesModel');
const { response } = require('express');
// const Issue = require('Issue');

module.exports = {
    all_issues: (request, response) => {
        Issue.find({}, (error, allIssues) => {
            if (error) {
                return error;
            } else {
                console.log(allIssues);
                response.render('pages/issues', {
                    allIssues: allIssues,
                })
            }
        })

    },
    admin_addIssue_post: (request, response) => {
        if (request.isAuthenticated()) {
        const {issueName, issueDescription} = request.body;
        console.log(issueName);
        console.log(issueDescription);
        const newIssue = new Issue({
            issueName: issueName,
            issueDescription: issueDescription
        });
        newIssue.save();
        response.redirect('admin/issues');
    } else {
        response.redirect('pages/login');
    }},

    admin_issueUpdate_put: (request, response) => {
        if (request.isAuthenticated()) {
        const {_id} = request.params;
        const {issueName, issueDescription} = request.body;
        console.log(request.body);
        Issue.findByIdAndUpdate(_id, {$set: {
            issueName: issueName,
            issueDescription: issueDescription,
        }}, {new: true}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/issues');
            }
        });
    } else {
        response.redirect('pages/login');
    }},
        issue: (request, response) => {
            const {_id} = request.params;
            Issue.findOne({_id}, (error, thisIssue) => {
                if (error) {
                    return error
                } else {
                    console.log(thisIssue);
                    let thisIssueName = thisIssue.issueName;
                    console.log(thisIssueName);
                    Resource.find({issue: thisIssueName}, (error, resourcesArray) => {
                        if (error) {
                            return error
                        } else {
                            console.log(resourcesArray);
                            response.render('pages/issue', {
                                issue: thisIssue,
                                resources: resourcesArray,
                            })
                        }
                    })
                }
            })

        },
        admin_deleteIssue: (request, response) => {
            if (request.isAuthenticated()) {
            const {_id} = request.params;
            Issue.deleteOne({_id: _id}, error => {
                if (error) {
                    return error;
                } else {
                    response.redirect('/admin/issues');
                }
            })
        } else {
            response.redirect('pages/login');
        }}
    }

