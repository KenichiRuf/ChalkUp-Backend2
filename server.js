const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/authRouter");
const routeRouter = require("./routes/routeRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/routes", routeRouter);

server.get("/", (req, res) => {
  res.send("<h1>Backend API for ChalkUp</h1>");
});

module.exports = server;
