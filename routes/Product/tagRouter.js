const express = require("express");
const path = require("path");
const { Gettag, creattag, singletag, removetag, edittag } = require("../../controller/tagController");




// init Router
const router = express.Router();


// Routes

router.route("/").get(Gettag).post(creattag)
router.route("/:id").get(singletag).delete(removetag).put(edittag).patch(edittag)


// Export Router

module.exports = router;
