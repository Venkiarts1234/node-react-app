const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const metricsRouter = require("../Routes/");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/metrics", metricsRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is started on port ${process.env.SERVER_PORT}`);
});
