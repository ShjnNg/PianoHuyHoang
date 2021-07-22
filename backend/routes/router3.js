const express = require("express");
const router = express.Router();
const { getCountProduct, 
    getCountbyTypeProduct, 
    getCountbyTitleProduct } = require("../controller/productControllers");

router.get("/product", getCountProduct);
router.get("/countproductbytype", getCountbyTypeProduct);
router.get("/countproductbytitle", getCountbyTitleProduct);

module.exports = router;
