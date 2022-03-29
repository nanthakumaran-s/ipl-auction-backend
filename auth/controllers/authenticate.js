import User from "../../models/user.model.js";

const authenticate = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        res.json({
          status: "failure",
          msg: "User not found",
        });
        return;
      }
      res.json({
        status: "success",
        msg: "User authenticated",
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: "failure", msg: "Server error" });
    });
};

export default authenticate;
