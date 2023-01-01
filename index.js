console.log("lets do this");
const router = require("./ROUTER/devRouter");
const express = require("express");

const port = 1960;

const server = express();
server.use(express.json());

require("./CONFIG/db");

server.use("/api", router);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

server.listen(port, () => {
  console.log(`reading port ${port}`);
});
