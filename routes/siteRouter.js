const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const resourceController = require('../controllers/resourceController');

router.route('/')
    .get(siteController.index)

router.route('/about')
    .get(siteController.about)

router.route('/login')
    .get(siteController.login_get)

router.route('/contribute')
    .get(siteController.contribute)
    // .post(resourceController.createResource_post)

router.route('/logout')
    .get(siteController.logout)

router.route('/signup')
    .get(siteController.register_get)
    // .post(siteController.register_post)



module.exports = router;