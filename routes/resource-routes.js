const express = require('express');
const resourceController = require('../controllers/resource-controller');
const router = express.Router();

router.route('/')
    .get(resourceController.resource);