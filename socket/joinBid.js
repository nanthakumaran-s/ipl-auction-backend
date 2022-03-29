import currentBid from "./currentBid.js";

const joinBid = (io, socket) => {
  socket.on("join-bid", (data) => {
    console.log(data);
    if (data.email === "") {
      return;
    }
    if (currentBid.bidders.includes(data.email)) {
    } else {
      currentBid.bidders.push(data.email);
      io.emit("bid-changed", {
        currentBid,
      });
    }
  });
};

export default joinBid;
