const express = require('express');
const issueController = require('../controllers/issueController');
const resourceController = require('../controllers/resourceController');
const adminController = require('../controllers/adminController');
const router = express.Router();


router.route('/')
    .get(issueController.all_issues)
    .post(issueController.admin_addIssue_post)

router.route('/:_id')
    .get(issueController.issue)
    .delete(issueController.admin_deleteIssue)
    .put(issueController.admin_issueUpdate_put);





module.exports = router;
