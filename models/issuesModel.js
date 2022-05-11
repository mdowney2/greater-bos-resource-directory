const mongoose = require('mongoose');
const {Schema} = mongoose;

const issueSchema = new Schema({
    issueName: String,
    issueDescription: String,
});

const Issue = mongoose.model('Issue', issueSchema);