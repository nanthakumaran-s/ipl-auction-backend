import express from "express";
const router = express.Router();

import addTeamOwner from "./controllers/addTeamOwner.js";
import createTeam from "./controllers/createTeam.js";
import createAuction from "./controllers/createAuction.js";
import updateTeam from "./controllers/updateTeam.js";
import getTeams from "./controllers/getTeams.js";

router.post("/createTeam", createTeam);
router.post("/createAuction", createAuction);
router.post("/addTeamOwner", addTeamOwner);
router.post("/updateTeam", updateTeam);
router.get("/getTeams", getTeams);

export default router;
