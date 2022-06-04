const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const issueController = require('../controllers/issueController');
const resourceController = require('../controllers/resourceController');
const siteController = require('../controllers/siteController');

router.route('/')
    .get(adminController.admin)


router.route('/issues')
    .get(adminController.admin_showIssues)

router.route('/issues/add-issue')
    .get(adminController.admin_addIssue)

router.route('/:_id/adminUpdateIssue')
    .get(adminController.adminUpdateIssue_get)

router.route('/resources')
    .get(adminController.admin_allResources)
    

router.route('/:_id/resource')
    .get(adminController.admin_oneResource)

router.route('/:_id/adminUpdateResource')
    .get(adminController.adminUpdateResource_get)

module.exports = router;