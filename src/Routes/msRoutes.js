const express = require("express");
const router = express.Router();

const controller = require("../Controller/msController");

router.get("/", controller.getAll);

router.get("/data", controller.findMood);

router.post("/data/new", controller.createData);
router.delete("/del/id:", controller.deleteData);
//router.patch("/updateUser", controller.updateUser);

module.exports = router;