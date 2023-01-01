const {
  devPost,
  getDev,
  getOneDev,
  updateDev,
  removeDev,
} = require("../CONTROLLER/devController");

const express = require("express");
const router = express.Router();

router.route("/newDevs").post(devPost);
router.route("/allDevs").get(getDev);
router.route("/oneDev/:id").get(getOneDev);
router.route("/updateDev/:id").patch(updateDev);
router.route("/removeDev/:id").delete(removeDev);

module.exports = router;
