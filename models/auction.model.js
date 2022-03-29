import mongoose from "mongoose";

const Schema = mongoose.Schema;

const auctionModel = Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});

const auction = mongoose.model("Auction", auctionModel);

export default auction;
