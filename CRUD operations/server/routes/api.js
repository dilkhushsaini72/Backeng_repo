const router = require("express").Router();
const userController = require("../controller/userController");

router.get("/users", userController.showUserController);
router.get("/users/:id", userController.viewSingeUserController);
router.post("/users", userController.createUserController);
router.put("/users/:id", userController.updateUserController);
router.delete("/users/:id", userController.deleteUserController);

module.exports = router;
