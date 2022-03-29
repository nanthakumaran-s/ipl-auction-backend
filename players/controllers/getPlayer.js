import Player from "../../models/player.model.js";

const getAllPlayers = (req, res) => {
  console.log(req.query.id);
  Player.find({ id: req.params.id })
    .then((players) => {
      res.json({ status: "success", player: player });
    })
    .catch((err) => {
      res.json({ status: "failure", msg: "Players not found", err });
    });
};

export default getAllPlayers;
