const express = require("express");
const path = require("path");
const { GetProduct, creatProduct } = require("../../controller/productController");




// init Router
const router = express.Router();


// Routes
router.get("/" ,GetProduct)

router.post("/", creatProduct)




// Export Router

module.exports = router;
