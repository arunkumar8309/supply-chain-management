const mongoose = require("mongoose");

const inventoryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  warehouse: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "InventoryItem",
  inventoryItemSchema,
  "InventoryItem"
);
