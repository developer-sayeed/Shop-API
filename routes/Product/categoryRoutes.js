const express = require("express");
const path = require("path");
const { GetCategory, creatCategory, getCategory, removeCategory,editCategory } = require("../../controller/categoryController");



// init Router
const router = express.Router();


// Routes


router.route("/").get(GetCategory).post(creatCategory)
router.route("/:id").get(getCategory).delete(removeCategory).put(editCategory).patch(editCategory)




// Export Router

module.exports = router;
