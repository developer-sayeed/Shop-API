const express = require("express");
const path = require("path");
const { GetBrand, creatBrand } = require("../../controller/brandController");




// init Router
const router = express.Router();


// Routes
router.get("/" ,GetBrand)

router.post("/", creatBrand)




// Export Router

module.exports = router;
