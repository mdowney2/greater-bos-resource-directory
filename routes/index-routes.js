const express = require('express');
const issueRoutes = require('./issue-routes');
const resourceRoutes = require('./resource-routes');
const siteRoutes = require('./site-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/issues', issueRoutes);

module.exports = router;