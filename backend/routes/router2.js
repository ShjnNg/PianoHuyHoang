const express = require("express");
const router = express.Router();
const { 
    getProductsByType, 
    getTop10Products, 
    getProductsByTitlePage, 
    getCountProduct} = require("../controller/productControllers");

router.get("/", getTop10Products);
router.get("/:type", getProductsByType);
router.get("/countproduct", getCountProduct);
router.get("/title/:title/:page/:limit", getProductsByTitlePage);

module.exports = router;
