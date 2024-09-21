const UserInfoModel = require("../Models/Usersinfomodels");
const sendEmail = require("../utils/VerifyUser");

module.exports.Uploaduserinfo = async (req, res) => {
  console.log(req.body);
  const {
    username,
    email,
    phone,
    enrollmentno,
    collage,
    department,
    batchStart,
    batchEnd,
    github,
    linkedin,
    facultyname,
    projectStart,
    projectEnd,
    projectUrl,
    researchtitle,
    researchdescription,
    ongoingproject,
    MentorEmail,
  } = req.body;
  try {
    if (!email) {
      return res.status(400).send("Please provide an email");
    }
    const user = await UserInfoModel.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const { verified } = UserInfoModel;
    sendEmail(MentorEmail, "Please Verify User", req.body, verified);

    if (verified == true) {
      const newUser = new UserInfoModel({
        username,
        email,
        phone,
        enrollmentno,
        collage,
        department,
        batchStart,
        batchEnd,
        github,
        linkedin,
        facultyname,
        projectStart,
        projectEnd,
        projectUrl,
        researchtitle,
        researchdescription,
        ongoingproject,
        MentorEmail,
      });
      await newUser.save();
      res.json(newUser);
    }
    res.json("Your are rejected");
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports.Getalluser = async (req, res) => {
  try {
    // if (!userisVerify) {
    //   return res.status(403).json({ msg: "User not verified yet" });
    // }
    const users = await UserInfoModel.find({});
    if (!users) {
      return res.status(404).json({ msg: "No data found" });
    }

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).json({ msg: "Error while getting all users" });
  }
};

module.exports.GetUserByID = async (req, res) => {
  try {
    const user = await UserInfoModel.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports.DeleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ msg: "User ID is required" });
  }

  try {
    const user = await UserInfoModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await user.save();
    res.json({ msg: "User deleted successfully", user });
  } catch (error) {
    console.error("Error deleting user info:", error);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

// // to check user is verify by mentor or not
// module.exports.VerifyUser = async (req, res) => {
//   const { token } = req.params;

//   // Find data by token
//   const data = await DataModel.findOne({ verificationToken: token });

//   if (!data) {
//     return res.status(400).send("Invalid token");
//   }

//   data.isVerified = true;
//   data.verificationToken = null; // remove the token after verification
//   await data.save();

//   // You can redirect or inform the user about verification success
//   res.status(200).send("Data verified successfully");
// };
