const router = require('express').Router();
const userRoutes = require("../../routes/api/users");
const fidoRoutes = require('../api/fidos');

// sets up user and fido api routes

// login route
router.use('/user', userRoutes);
// Fido route 
router.use('/fido', fidoRoutes);

module.exports = router;