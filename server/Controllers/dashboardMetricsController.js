const express = require("express");
const {
  getTotalOrders,
  findCurrentMonthOrders,
  findByOrderStatus,
  findTotalRevenue,
  findMostRecentOrders,
} = require("../Utils/helper.js");

const { getOrders } = require("../Services/airtableService.js");

const getMetrics = async (req, res, next) => {
  try {
    // Order status can be fetch from frontend dropdown menu by request for now just hard coded.
    let orderStatus = "in_progress";

    // Currently Using Airtable sdk. But can make calls directly to the API for the records.
    const orders = await getOrders();

    let metrics = {};

    metrics = {
      totalOrders: getTotalOrders(orders),
      totalCurrentMonthOrders: findCurrentMonthOrders(orders),
      ordersByStatus: findByOrderStatus(orderStatus, orders),
      totalRevenue: findTotalRevenue(orders),
      recentOrders: findMostRecentOrders(orders),
    };
    res.metrics = metrics;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMetrics,
};
