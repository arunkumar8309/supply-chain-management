const { gql } = require("apollo-server-express");

const shipmentTypeDefs = gql`
  type Shipment {
    id: ID!
    origin: String!
    destination: String!
    status: String!
    estimatedDelivery: String!
  }

  extend type Query {
    shipment(id: ID!): Shipment
  }

  extend type Mutation {
    updateShipmentStatus(id: ID!, status: String!): Shipment!
  }
`;

module.exports = shipmentTypeDefs;
