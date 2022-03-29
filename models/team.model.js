import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teamModel = Schema({
  name: {
    type: String,
    unique: true,
  },
  teamOwner: {
    type: String,
    required: true,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  amount: {
    type: Number,
    default: 0,
  },
});

const team = mongoose.model("Team", teamModel);

export default team;
