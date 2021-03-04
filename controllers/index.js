const router = require("express").Router();

// api routes for server
const apiRoutes = require("./api");
// api routes for client side 
const homeRoutes = require("./browser");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;