const { gql } = require("apollo-server-express");

const supplierTypeDefs = gql`
  type Supplier {
    id: ID!
    name: String!
    contactPerson: String!
    phone: String!
    email: String!
  }

  extend type Query {
    suppliers: [Supplier!]!
  }

  extend type Mutation {
    addSupplier(
      name: String!
      contactPerson: String!
      phone: String!
      email: String!
    ): Supplier!
    updateSupplier(
      id: ID!
      name: String
      contactPerson: String
      phone: String
      email: String
    ): Supplier!
    deleteSupplier(id: ID!): Boolean!
  }
`;

module.exports = supplierTypeDefs;
