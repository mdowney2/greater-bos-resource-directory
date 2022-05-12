const { v4: uuid } = require('uuid');
uuid();

module.exports = {
    resource: (request, response) => {
        const {_id} = request.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return error;
            } else {
                response.render('pages/resource/:_id', {
                    resource: foundResource
                });
            }
        })

    },
    createResource_post: (request, response) => {
        const {resourceName, resourceType, issue, resourceLink, description} = request.body;
        const newResource = new Resource ({
            resourceName: resourceName,
            resourceType: resourceType,
            issue: issue,
            resourceLink: resourceLink,
            description: description
        });
        newResource.save();
        response.redirect('pages/resource/:_id');
    },
    admin_updateResource: (request, response) => {
        const { _id } = request.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if (error) {
                return Error;
            } else {
                response.render('pages/update-resource', {
                    foundResource: foundResource,
                });
            };
        })
    },
    admin_deleteResource: (request, response) => {
        const {_id} = request.params;
        Resource.deleteOne({_id: _id}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/adminResources');
            }
        });
    }
}