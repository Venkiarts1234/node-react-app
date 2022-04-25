const express = require("express");
const router = express.Router();
const { getMetrics } = require("../Controllers/dashboardMetricsController");

router.get("/", getMetrics, async (req, res) => {
  res.json(res.metrics);
});

module.exports = router;
