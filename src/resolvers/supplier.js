const Supplier = require("../models/supplier");

const supplierResolvers = {
  Query: {
    suppliers: async () => {
      return await Supplier.find();
    },
  },
  Mutation: {
    addSupplier: async (_, { name, contactPerson, phone, email }) => {
      const supplier = new Supplier({ name, contactPerson, phone, email });
      return await supplier.save();
    },
    updateSupplier: async (_, { id, ...updates }) => {
      return await Supplier.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteSupplier: async (_, { id }) => {
      const result = await Supplier.findByIdAndDelete(id);
      return result !== null;
    },
  },
};

module.exports = supplierResolvers;
