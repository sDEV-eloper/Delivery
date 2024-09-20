import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  role: {
    type: String,
    enum: ["Customer", "Admin", "Delivery Partner"],
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
});

//Customer Schema
const customerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: { type: Number, required: true, unique: true },
  role: { type: String, enum: ["Customer"], default: "Customer" },
  liveLocation: {
    latitude: {
      type: Number,
    },
    longitude: { type: true },
  },
  address: { type: String },
});


const deliveryPartnerSchema = new mongoose.Schema({
  ...userSchema.obj,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phone: { type: Number, required: true, unique: true },
  role: { type: String, enum: ["DeliveryPartner"], default: "DeliveryPartner" },
  liveLocation: {
    latitude: {
      type: Number,
    },
    longitude: { type: true },
  },
  address: { type: String },
  branch:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
  }
});


const adminSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["DeliveryPartner"], default: "DeliveryPartner" },
  
});




const User = mongoose.model('User', userSchema);
const Customer = mongoose.model('Customer', customerSchema);
const DeliveryPartner = mongoose.model('DeliveryPartner', deliveryPartnerSchema);
const Admin = mongoose.model('Admin', adminSchema);

export default {User, Customer, DeliveryPartner, Admin};