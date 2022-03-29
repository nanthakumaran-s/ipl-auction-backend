import Team from "../../models/team.model.js";

const createTeam = async (req, res) => {
  const { name, teamOwner } = req.body;
  const team = await Team.findOne({ name });
  if (team) {
    return res.json({ status: "failure", msg: "Team already exists" });
  }
  const newTeam = new Team({
    name,
    teamOwner,
    amount: 0,
  });
  await newTeam.save();
  res.json({ status: "success", msg: "Team created" });
};

export default createTeam;
