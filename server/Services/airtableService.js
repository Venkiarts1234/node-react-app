const express = require("express");
var Airtable = require("airtable");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../Config/.env") });
var base = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY }).base(
  process.env.AIRTABLE_BASE
);

const getOrders = async () => {
  const records = await base("Orders")
    .select({
      fields: [
        "order_id",
        "product_name",
        "order_status",
        "price",
        "order_placed",
      ],
    })
    .all()
    .then((results) => {
      return results.map((x) => x._rawJson);
    })
    .catch((err) => err);

  return records;
};

module.exports.getOrders = getOrders;
