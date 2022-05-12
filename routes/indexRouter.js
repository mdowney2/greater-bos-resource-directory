const express = require('express');
const issueRoutes = require('./issueRouter');
const resourceRoutes = require('./resourceRouter');
const siteRoutes = require('./siteRouter');
const adminRoutes = require('./adminRouter');
const router = express.Router();

router.use('/', siteRoutes)
router.use('/issues', issueRoutes)
router.use('/admin', adminRoutes)
router.use('/resources', resourceRoutes)

module.exports = router;