import Team from "../../models/team.model.js";

const getTeam = async (req, res) => {
  Team.find({})
    .then((team) => {
      res.json({ status: "success", team: team });
    })
    .catch((err) => {
      res.json({ status: "failure", msg: "Players not found", err });
    });
};

export default getTeam;
