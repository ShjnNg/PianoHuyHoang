const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  CreateProduct,
  DelProductById,
  updateProduct,
  getProductsPage
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:page/:limit", getProductsPage);
router.get("/:id", getProductById);
router.post("/", CreateProduct);
router.post("/update", updateProduct);
router.delete("/:id", DelProductById);

module.exports = router;
