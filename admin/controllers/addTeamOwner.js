import User from "../../models/user.model.js";

const addTeamOwner = async (req, res) => {
  const { email, password, fullname } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ status: "failure", msg: "User already exists" });
  }
  const newUser = new User({
    email,
    password,
    role: "teamOwner",
    fullname,
  });
  await newUser.save();
  res.json({ status: "success", msg: "User created" });
};

export default addTeamOwner;
