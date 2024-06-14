const { gql } = require("apollo-server-express");

const inventoryItemTypeDefs = gql`
  type InventoryItem {
    id: ID!
    name: String!
    sku: String!
    quantity: Int!
    warehouse: String!
  }

  extend type Query {
    inventoryItems(limit: Int, offset: Int): [InventoryItem!]!
  }

  extend type Mutation {
    addInventoryItem(
      name: String!
      sku: String!
      quantity: Int!
      warehouse: String!
    ): InventoryItem!
    updateInventoryItem(
      id: ID!
      name: String
      sku: String
      quantity: Int
      warehouse: String
    ): InventoryItem!
    deleteInventoryItem(id: ID!): Boolean!
  }
`;

module.exports = inventoryItemTypeDefs;
