const InventoryItem = require("../models/inventoryItem");

const inventoryItemResolvers = {
  Query: {
    inventoryItems: async (_, { limit, offset }) => {
      return await InventoryItem.find().skip(offset).limit(limit);
    },
  },
  Mutation: {
    addInventoryItem: async (_, { name, sku, quantity, warehouse }) => {
      const item = new InventoryItem({ name, sku, quantity, warehouse });
      return await item.save();
    },
    updateInventoryItem: async (_, { id, ...updates }) => {
      return await InventoryItem.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteInventoryItem: async (_, { id }) => {
      const result = await InventoryItem.findByIdAndDelete(id);
      return result !== null;
    },
  },
};

module.exports = inventoryItemResolvers;
