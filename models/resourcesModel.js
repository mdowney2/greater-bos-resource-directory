const mongoose = require('mongoose');
const {Schema} = mongoose;

const resourceSchema = new Schema({
    resourceName: {
        type: String,
        required: [true, 'The resource name is required.'],
        mingLength: [1, "Minimum length is 1 character."]
    },
    resourceType: {
        type: Array,
        required: [true, 'Please select resource type.']
    },
    issue: [{
        type: Schema.Types.ObjectId,
        ref: "Issue"
    }],
    resourceLink: {
        type: String,
        required: [true, 'Please include a link to the resource.']
    },
    description: {
        type: String,
        required: [true, 'Please include a brief description.'],
        minLength: [1, 'Minimum length 1 character.']
    }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;