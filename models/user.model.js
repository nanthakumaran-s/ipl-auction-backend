import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userModel = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    maxLength: 120,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["teamOwner", "admin"],
    default: "teamOwner",
    required: true,
  },
});

const user = mongoose.model("User", userModel);

export default user;
