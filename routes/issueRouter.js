const express = require('express');
const issueController = require('../controllers/issueController');
const resourceController = require('../controllers/resourceController');
const router = express.Router();

router.route('/')
    .get(issueController.issues)

router.route(':_id')
    .get(issueController.issue)

router.route('/:_id/issue/:_id/resource')
    .get(resourceController.resource)

module.exports = router;
