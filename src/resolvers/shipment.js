const Shipment = require("../models/shipment");

const shipmentResolvers = {
  Query: {
    shipment: async (_, { id }) => {
      try {
        const shipment = await Shipment.findById(id);
        return shipment;
      } catch (error) {
        throw new Error(
          `Failed to fetch shipment with ID: ${id}. Error: ${error.message}`
        );
      }
    },
  },
  Mutation: {
    updateShipmentStatus: async (_, { id, status }) => {
      try {
        const updatedShipment = await Shipment.findByIdAndUpdate(
          id,
          { status },
          { new: true, useFindAndModify: false } // Ensure to set useFindAndModify to false to use findByIdAndUpdate properly
        );
        return updatedShipment;
      } catch (error) {
        throw new Error(
          `Failed to update shipment status for ID: ${id}. Error: ${error.message}`
        );
      }
    },
  },
};

module.exports = shipmentResolvers;
