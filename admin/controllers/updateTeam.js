import Team from "../../models/team.model.js";

const updateTeam = async (req, res) => {
  const { name, newName, teamOwner, amount } = req.body;
  const team = await Team.findOneAndUpdate(
    { name },
    { name: newName, teamOwner, amount },
    { new: true }
  ).exec();
  res.json({ status: "success", msg: "Team Updated", team: team });
};

export default updateTeam;
