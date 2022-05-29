
const Resource = require('../models/resourcesModel');


module.exports = {
    resource: (request, response) => {
        const {_id} = request.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/resourceDetail/:_id', {
                    resource: foundResource
                });
            }
        })

    },
    admin_get_oneResource: (request, response) => {
        const {_id} = request.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/resource/:_id', {
                    resource: foundResource,
                });
            };
        })
    },
    admin_all_resources: (request, response) => {
        if (request.isAuthenticated()) {
        const { _id } = request.params;
        Resource.find({}, (error, allResources) => {
            if (error) {
                return error;
            } else {
                response.render('pages/adminResources', {
                    allResources: allResources,
                })
    
            } 
    })} else {
        response.redirect('pages/login');
    }},
        allResources: (request, response) => {
            const { _id } = request.params;
            Resource.find({}, (error, allResources) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/allResources', {
                        allResources: allResources,
                    })
        
                }
            
        }
            )},
    createResource_post: (request, response) => {
        const {resourceName, resourceType, issue, resourceLink, description} = request.body;
        console.log(request.body);
        const newResource = new Resource ({
            resourceName: resourceName,
            resourceType: resourceType,
            issue: issue,
            resourceLink: resourceLink,
            description: description
        });
        newResource.save();
        console.log(newResource);
        response.redirect('/');
    },
    admin_updateResource_put: (request, response) => {
        if (request.isAuthenticated()) {
        const { _id } = request.params;
        const {resourceName, resourceType, issue, resourceLink, description} = request.body;
        console.log(request.body);
        Resource.findByIdAndUpdate(_id, {$set: {
            resourceName: resourceName,
            resourceType: resourceType,
            issue: issue,
            resourceLink: resourceLink,
            description: description,
        }}, {new: true}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/resources');
            }
        })
    } else {
        response.redirect('pages/login');
    }},
    admin_deleteResource: (request, response) => {
        if (request.isAuthenticated()) {
        const {_id} = request.params;
        Resource.deleteOne({_id: _id}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/resources');
            }
        });
    } else {
        response.redirect('pages/login');
    }
}}