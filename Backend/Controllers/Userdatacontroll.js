const UserInfoModel = require("../Models/Usersinfomodels");

module.exports.Uploaduserinfo = async (req, res) => {
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
  } = req.body;
  try {
    if (!email) {
      return res.status(400).send("Please provide an email");
    }
    const user = await UserInfoModel.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }
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
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports.Getalluser = async (req, res) => {
  try {
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

    res.json({ msg: "User deleted successfully", user });
  } catch (error) {
    console.error("Error deleting user info:", error);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};
