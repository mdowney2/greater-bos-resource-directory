const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');
const resourceController = require('../controllers/resource-controller');

router.route('/')
    .get(siteController.index);

router.route('/about')
    .get(siteController.about);

router.route('/login')
    .get(siteController.login);

router.route('/contribute')
    .get(siteController.contribute);

router.route('/contribute')
    .post(resourceController.resource_create);

module.exports = router;