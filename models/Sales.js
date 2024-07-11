import mongoose, { Schema, model } from "mongoose";

const SalesSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Product",
  },
  saleDate: { type: Date, default: Date.now },
  finalPrice: { type: String, default: "0" },
  buyerLastName: { type: String, required: true },
  buyerFirstName: { type: String, required: true },
  buyerMiddleName: { type: String, required: true },
});

// SalesSchema.pre("save", async function (next) {
//   const boughtProducts = model("Sales", SalesSchema).find({
//     buyerLastName: this.buyerLastName,
//     buyerFirstName: this.buyerFirstName,
//     buyerMiddleName: this.buyerMiddleName,
//   });
//   if (boughtProducts > 2) {
//     this.product.price *= 0.1;
//   }
//   next();
// });

export default model("Sales", SalesSchema);
