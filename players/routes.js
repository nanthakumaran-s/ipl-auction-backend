import express from "express";
const router = express.Router();

import getAllPlayers from "./controllers/getAllPlayers.js";
import getPlayer from "./controllers/getPlayer.js";

router.get("/getPlayers", getAllPlayers);
router.get("/getPlayer", getPlayer);

export default router;
