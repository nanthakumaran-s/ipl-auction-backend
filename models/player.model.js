import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerModel = Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  soldFor: {
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
});

const player = mongoose.model("Player", playerModel);

export default player;
