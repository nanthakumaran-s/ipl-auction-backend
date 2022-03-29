import express from "express";
const router = express.Router();

import authenticate from "./controllers/authenticate.js";

router.post("/authenticate", authenticate);

export default router;
