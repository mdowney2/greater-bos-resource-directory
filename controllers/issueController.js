const { v4: uuid } = require('uuid');
const Resource = require('../models/resourcesModel');
const Issue = require('../models/issuesModel');
uuid();

module.exports = {
    issues: (request, response) => {
        response.render('pages/issues');
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
    // issue: (request, response) => {
    //     const {_id} = request.params;
    //     const thisIssue = request.body;
    //     const issueToRender = Issue.findOne({_id: _id});
    //     Issue.findOne({_id: _id}) => {
    //         if (error) {
    //             return error;
    //         } else {
    //             response.render('pages/issue', {
    //                 resourceArray: allResources
    //             })
    //         }
    //     });
        
    //     Resource.find({thisIssue: {$in: issue}}, (error, theseResources) => {
    //         if (error) {
    //             return error;
    //         } else {
    //             response
    //         }
    //     })
        issue: (request, response) => {
            const {_id} = request.params;
            const thisIssue = request.body;
            Issue.findbyId({_id}).
            populate('Resource').
            exec (function (error, issueResources) {
                if (error) {
                    return error;
                } else {
                    response.render('pages/issue', {
                        issue: thisIssue,
                        resource: issueResources,
                    })
                }
            })

        }
    }
