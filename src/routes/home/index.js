const express = require("express");
const router = express.Router();
bodyParser = require('body-parser');


const ctrl = require('./home.ctrl');


router.use("/scripts", express.static(__dirname + "/scripts"));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/", ctrl.output.index);
router.get("/about", ctrl.output.about);
router.get("/login", ctrl.output.login );
router.get("/help",ctrl.output.help);
router.get("/working", ctrl.output.working);
router.post("/login",ctrl.process.login);

module.exports = router;
