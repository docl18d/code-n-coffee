const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fidoRoutes = require('./postRoutes');
const browserRoutes = require('../browser/index');
// sets up user and post tables in db
router.use('/user', userRoutes);
router.use('/post', fidoRoutes);

module.exports = router