const express = require("express");
const {
  login,
  register,
  logout,
  resetPassword,
  forgotPassword,
} = require("../Controllers/Authcontroll");
const db = require("../config/mongoose-connection");

const router = express.Router();
const cors = require("cors");
const {
  Getalluser,
  GetUserByID,
  Uploaduserinfo,
  DeleteById,
  getUsers,
} = require("../Controllers/Userdatacontroll");
const {
  verified,
  verifyUser,
  Message,
} = require("../Controllers/VerifyuserData");
const sendMail = require("../utils/Sendemail");
const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

router.use(cors(corsOptions));

router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forget-password", forgotPassword);
router.post("/reset-password", resetPassword);

// user
router.post("/Uploaddata", Uploaduserinfo);
// get verified user
router.get("/Verified-user", getUsers);
// for all users
router.get("/Uploader", Getalluser);
// users by id
router.get("/Uploader/:id", GetUserByID);
//Delete user by id

router.delete("/Uploader/:id", DeleteById);
// verfied user
router.get("/verify/:token", verifyUser);

// Notifications
router.get("/Notifications/:id", Message);


module.exports = router;
