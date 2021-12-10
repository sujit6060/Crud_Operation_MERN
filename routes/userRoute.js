const express = require("express");
const {
  postData,
  getAllData,
  updateOne,
  deleteOne,
  getUserbyId,
} = require("../controllers/userController");
const router = express.Router();

router.post("/postData", postData);
router.get("/getData", getAllData);
router.get("/getDataById/:_id", getUserbyId);
router.put("/updateData/:_id", updateOne);
router.delete("/deleteData/:id", deleteOne);

module.exports = router;
