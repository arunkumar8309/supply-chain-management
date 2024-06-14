const inventoryItemResolvers = require("./inventoryItem");
const shipmentResolvers = require("./shipment");
const supplierResolvers = require("./supplier");

module.exports = {
  Query: {
    ...inventoryItemResolvers.Query,
    ...shipmentResolvers.Query,
    ...supplierResolvers.Query,
  },
  Mutation: {
    ...inventoryItemResolvers.Mutation,
    ...shipmentResolvers.Mutation,
    ...supplierResolvers.Mutation,
  },
};
