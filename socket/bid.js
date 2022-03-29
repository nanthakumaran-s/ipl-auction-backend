import currentBid from "./currentBid.js";

const bid = (io, socket) => {
  socket.on("bid", (data) => {
    if (currentBid.bidders.includes(data.name)) {
      currentBid.currentBid = data.bid;
      currentBid.currentBidder = data.name;
      io.emit("bid-changed", {
        currentBid,
      });
    }
  });
};

export default bid;
