import Auction from "../../models/auction.model.js";

const getAuction = (req, res) => {
  Auction.find()
    .populate("players")
    .then((auction) => {
      res.json({ status: "success", auction: auction });
    })
    .catch((err) => {
      res.json({ status: "failure", msg: "Auction not found", err });
    });
};

export default getAuction;
