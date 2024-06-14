const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  estimatedDelivery: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Shipment", shipmentSchema, "Shipment");
