const express = require("express");
const path = require("path");
const { Gettag, creattag } = require("../../controller/tagController");





// init Router
const router = express.Router();


// Routes
router.get("/" ,Gettag)

router.post("/", creattag)




// Export Router

module.exports = router;
