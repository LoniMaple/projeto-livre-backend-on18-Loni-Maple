const express = require("express");
const router = express.Router();

const controller = require("../controller/msController");

router.get("/", controller.getAll);

router.post("/data/new", controller.createData);
//router.delete("id:/delete", controller.deleteUser);
//router.patch("/updateUser", controller.updateUser);

module.exports = router;