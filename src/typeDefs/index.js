const { gql } = require("apollo-server-express");
const inventoryItemTypeDefs = require("./inventoryItem");
const shipmentTypeDefs = require("./shipment");
const supplierTypeDefs = require("./supplier");

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

module.exports = [
  baseTypeDefs,
  inventoryItemTypeDefs,
  shipmentTypeDefs,
  supplierTypeDefs,
];
