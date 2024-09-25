const Usersinfomodels = require("../Models/Usersinfomodels");
const sendMail = require("../utils/Sendemail");

module.exports.verifyUser = async (req, res) => {
  const { token } = req.params;
  console.log(`Verification token received: ${token}`);

  if (!token) {
    return res.status(400).send("Token is required");
  }

  try {
    const user = await Usersinfomodels.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    
    user.verified = true;
    user.verificationToken = null; 
    console.log("user verified",user);
    await user.save();

    await sendMail(user.email, "Your email has been verified!", "You can now access your account.");


    res.send("Your email has been verified successfully!");
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).send("Internal server error");
  }
};
