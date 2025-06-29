const router = require("express").Router();
const controller = require("../controllers/productController");

router.get("/", controller.homeController);
router.post("/createproduct", controller.createProduct);
router.get("/showproduct", controller.showProduct);
router.delete("/deleteproduct/:id",controller.deleteProduct)

module.exports = router;
