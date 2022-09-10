var express = require('express');
var router = express.Router();
const maincontroller = require("../controllers/maincontroller");

/* GET home page. */
router.get('/', maincontroller.home);
router.get("/detalleMenu/:id",maincontroller.detalleMenu)
module.exports = router;
