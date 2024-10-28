const Usersinfomodels = require("../Models/Usersinfomodels");

module.exports.verifyUser = async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).send("Token is required");
  }

  try {
    const user = await Usersinfomodels.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    user.verified = true;
    user.Notifications = "Your work is Uploaded ";
    user.verificationToken = null;
    await user.save();

    res.send("Your email has been verified successfully!");
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports.Message = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const user = await Usersinfomodels.findById({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).send("Internal server error");
  }
};
