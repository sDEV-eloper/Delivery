import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    latitude: {
      type: Number,
      required: true,  // Ensure latitude is required
    },
    longitude: { 
      type: Number,
      required: true,  // Ensure longitude is required
    },
  },
  address: { type: String },
  deliveryPartners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartner",  // Reference to DeliveryPartner schema
    },
  ],
});

// Model for Branch
const Branch = mongoose.model("Branch", branchSchema);

export default Branch;
