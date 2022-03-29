import Auction from "../../models/auction.model.js";
import currentBid from "../../socket/currentBid.js";

const createAuction = (req, res) => {
  const { players } = req.body;
  const auction = new Auction({
    players,
  });
  auction
    .save()
    .then(() => {
      currentBid.currentPlayer = players[0];
      currentBid.playersUpcoming = players.slice(1);
      res.json({ status: "success", msg: "Auction created" });
    })
    .catch((err) => {
      res.json({ status: "failure", msg: "Auction not created", err });
    });
};

export default createAuction;
