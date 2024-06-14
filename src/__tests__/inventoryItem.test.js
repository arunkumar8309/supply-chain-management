const { ApolloServer } = require("apollo-server-express");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("../typeDefs");
const resolvers = require("../resolvers");
const InventoryItem = require("../models/inventoryItem");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ InventoryItem }),
});

const { query, mutate } = createTestClient(server);

describe("InventoryItem Resolvers", () => {
  it("adds a new inventory item", async () => {
    const ADD_INVENTORY_ITEM = `
      mutation AddInventoryItem($name: String!, $sku: String!, $quantity: Int!, $warehouse: String!) {
        addInventoryItem(name: $name, sku: $sku, quantity: $quantity, warehouse: $warehouse) {
          id
          name
          sku
          quantity
          warehouse
        }
      }
    `;

    const res = await mutate({
      mutation: ADD_INVENTORY_ITEM,
      variables: {
        name: "Test Item",
        sku: "12345",
        quantity: 10,
        warehouse: "A1",
      },
    });

    expect(res.data.addInventoryItem.name).toBe("Test Item");
  });
});
