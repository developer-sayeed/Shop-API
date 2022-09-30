const express = require("express");
const path = require("path");
const { GetProduct, creatProduct, singleProduct, removeproduct, editProduct } = require("../../controller/productController");




// init Router
const router = express.Router();


// Routes

router.route("/").get(GetProduct).post(creatProduct)
router.route("/:id").get(singleProduct).delete(removeproduct).put(editProduct).patch(editProduct)


// Export Router

module.exports = router;
