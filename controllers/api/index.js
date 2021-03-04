const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fidoRoutes = require('./fidoRoutes');

// sets up user and fido api routes

// login route
router.use('/user', userRoutes);
// Fido route 
router.use('/fido', fidoRoutes);

module.exports = router