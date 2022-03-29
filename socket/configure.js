import currentBid from "./currentBid.js";
import Auction from "../models/auction.model.js";

const configureBid = (io, socket) => {
  socket.on("configure-bid", (data) => {
    Auction.find()
      .populate("players")
      .then((auction) => {
        currentBid.currentPlayer = auction[0].players[0];
        currentBid.playersUpcoming = auction[0].players.slice(1);
        currentBid.playersCompleted = [];
        io.emit("bid-changed", {
          currentBid,
        });
      });
  });
};

export default configureBid;
