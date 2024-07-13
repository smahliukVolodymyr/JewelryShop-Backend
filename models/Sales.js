import mongoose, { Schema, model } from "mongoose";

const SalesSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Product",
  },
  saleDate: { type: Date, default: Date.now },
  finalPrice: { type: Number },
  buyerLastName: { type: String, required: true },
  buyerFirstName: { type: String, required: true },
  buyerMiddleName: { type: String, required: true },
});
export default model("Sales", SalesSchema);
