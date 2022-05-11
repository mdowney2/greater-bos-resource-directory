const express = require('express');
const issueRoutes = require('./issueRouter');
const resourceRoutes = require('./resourceRouter');
const siteRoutes = require('./siteRouter');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/issues', issueRoutes);

module.exports = router;