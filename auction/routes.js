import express from "express";
const router = express.Router();

import getAuction from "./controllers/getAuction.js";

router.get("/getAuction", getAuction);

export default router;
