const express = require('express');
const resourceController = require('../controllers/resourceController');
const router = express.Router();

router.route('/resource/:_id')
    .get(resourceController.resource)
    .put(resourceController.admin_updateResource)
    .delete(resourceController.admin_deleteResource)


module.exports = router;
    