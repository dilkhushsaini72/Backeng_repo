const router = require("express").Router();
const controller = require("../controllers/productController");

router.get("/", controller.homeController);
router.post("/createproduct", controller.createProduct);
router.get("/showproduct", controller.showProduct);
router.delete("/deleteproduct/:id",controller.deleteProduct)
router.get("/singleproduct/:abc",controller.singleproduct)

module.exports = router;
 
// /api/singleproduct/686101afbc48e213d5a9fb77