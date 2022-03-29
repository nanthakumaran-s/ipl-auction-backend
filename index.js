import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import auth from "./auth/index.js";
import admin from "./admin/index.js";
import players from "./players/index.js";
import auction from "./auction/index.js";
import cors from "cors";
import joinBid from "./socket/joinBid.js";
import configureBid from "./socket/configure.js";
import bid from "./socket/bid.js";
import giveUp from "./socket/giveup.js";

dotenv.config();

const app = express();
const httpserver = http.createServer(app);
const io = new Server(httpserver, { cors: { origin: "*" } });
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/players", players);
app.use("/api/auction", auction);

io.on("connection", (socket) => {
  console.log("a user connected");
  joinBid(io, socket);
  configureBid(io, socket);
  bid(io, socket);
  giveUp(io, socket);
  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

mongoose
  .connect(
    "mongodb+srv://ipl:12345@cluster0.wooi6.mongodb.net/ipl?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    httpserver.listen(PORT, () => {
      console.log(`Server listening on port: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
