const data = require('../data/dummyData');
const { v4: uuid } = require('uuid');
uuid();

module.exports = {
    resource: (request, response) => {
        const id = request.params;
        const foundResource = data.find(resource => resource.id === String(id));
        response.render('pages/resource', {
            resource: data,
        })

    },
    resource_create: (request, response) => {
        console.log(request.body);
        const { _id = uuid(), name, link, desc } = request.body;
        dummyData.push({ _id, name, link, desc });
        response.redirect('pages/issues');
    }
}