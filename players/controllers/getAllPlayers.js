import Player from "../../models/player.model.js";

const getAllPlayers = (req, res) => {
  Player.find({ isSold: false })
    .then((players) => {
      res.json({ status: "success", players: players });
    })
    .catch((err) => {
      res.json({ status: "failure", msg: "Players not found", err });
    });
};

export default getAllPlayers;
