import currentBid from "./currentBid.js";

const giveUp = (io, socket) => {
  socket.on("give-up", (data) => {
    if (currentBid.bidders.includes(data.email)) {
      currentBid.optedOut.push(data.email);
      if (currentBid.bidders.length - 1 === currentBid.optedOut.length) {
        currentBid.optedOut = [];
        currentBid.playersCompleted.push({
          ...currentBid.currentPlayer,
          soldTo: currentBid.currentBidder,
          soldPrice: currentBid.currentBid,
        });
        currentBid.currentBid = 0;
        currentBid.currentBidder = "";
        currentBid.currentPlayer =
          currentBid.playersUpcoming.length === 0
            ? ""
            : currentBid.playersUpcoming.shift();
      }
      console.log(currentBid);
      io.emit("bid-changed", {
        currentBid,
      });
    }
  });
};

export default giveUp;
