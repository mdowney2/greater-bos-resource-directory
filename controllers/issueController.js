const { v4: uuid } = require('uuid');
const Resource = require('../models/resourcesModel');
// const Resource = require('Resource');
const Issue = require('../models/issuesModel');
const { response } = require('express');
// const Issue = require('Issue');
uuid();

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
        const {issueName, issueDescription} = request.body;
        const newIssue = new Issue({
            issueName: issueName,
            issueDescription: issueDescription
        });
        newIssue.save();
        response.redirect('admin/adminIssues');
    },

    admin_issueUpdate_put: (request, response) => {
        const {_id} = request.params;
        const {issueName, issueDescription} = request.body;
        Issue.findOneAndUpdate(_id, {$set: {
            issueName: issueName,
            issueDescription: issueDescription
        }}, {new: true}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('admin/adminIssues');
            }
        });
    },
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

        }
    }

