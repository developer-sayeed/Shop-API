const express = require("express");
const path = require("path");
const { Getbrand, creatbrand, singlebrand, removebrand, editbrand } = require("../../controller/brandController");




// init Router
const router = express.Router();


// Routes

router.route("/").get(Getbrand).post(creatbrand)
router.route("/:id").get(singlebrand).delete(removebrand).put(editbrand).patch(editbrand)


// Export Router

module.exports = router;
