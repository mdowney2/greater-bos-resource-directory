const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const issueController = require('../controllers/issueController')

router.route('/')
    .get(adminController.admin)

router.route('/issues')
    .get(adminController.admin_showIssues)

router.route('/:_id/adminIssueDetail')
    .get(adminController.admin_showIssuePage)

router.route('/issues/addIssue')
    .get(adminController.admin_addIssue)
    // .post(adminController.admin_addIssue_post)

router.route('/resources')
    .get(adminController.admin_allResources)

router.route('/:_id/resource')
    .get(adminController.admin_oneResource)

router.route('/:_id/adminUpdateResource')
    .get(adminController.adminUpdateResource_get)

module.exports = router;