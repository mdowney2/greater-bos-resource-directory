const mongoose = require('mongoose');
const {Schema} = mongoose;

const issueSchema = new Schema({
    issueName: String,
    issueDescription: String,
    // resources: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Resources"
    // }]
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;