const express = require('express');
const resourceController = require('../controllers/resourceController');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.route('/')
    .get(resourceController.allResources)
    .post(resourceController.createResource_post)

    

router.route('/adminUpdateResource')
    .get(adminController.adminUpdateResource_get)

router.route('/:_id')
    .get(resourceController.resource)
    .put(resourceController.admin_updateResource_put)
    .delete(resourceController.admin_deleteResource)



module.exports = router;
    