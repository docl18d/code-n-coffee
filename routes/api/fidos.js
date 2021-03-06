const router = require("express").Router();
const fidosController = require("../../controllers/fidosController");
const usersController = require("../../controllers/usersController");

// Matches with "/api/fidos"
router.route("/")
  .get(fidosController.findAll)
  .post(fidosController.create);

// Matches with "/api/fidos/:id"
router
  .route("/:id")
  .get(fidosController.findById)
  .put(fidosController.update)
  .delete(fidosController.remove);

  // Matches with "/api/users"
router.route("/users")
.get(usersController.findAll)
.post(usersController.create);

// Matches with "/api/users/:id"
router
.route("/users/:id")
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove);

module.exports = router;
