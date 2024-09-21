const UserInfoModel = require("../Models/Usersinfomodels");

module.exports.verified = async (req, res) => {
  
  if (!req.body.email) {
    return res.status(400).json({ message: "Email is required" });
  }
  const user = await UserInfoModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.verified = true;
  await user.save();

  res.json({ message: "User verified successfully" });
};
