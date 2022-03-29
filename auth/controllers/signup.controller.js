import User from "../../models/user.model.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { email, password, role, fullname } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ status: "failure", msg: "User already exists" });
  }
  if (role !== "admin") {
    return res.json({ status: "failure", msg: "Role must be admin" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    email,
    password: hashedPassword,
    role,
    fullname,
  });
  await newUser.save();
  res.json({ status: "success", msg: "User created" });
};

export default signup;
