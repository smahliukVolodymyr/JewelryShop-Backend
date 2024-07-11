import mongoose, { Schema, model } from "mongoose";
import Sales from "./Sales.js";

const ProductSchema = new Schema({
  name: { type: String, unique: true, required: true },
  type: {
    type: String,
    enum: [
      "Сережки",
      "Браслети",
      "Кільця",
      "Ланцюжки",
      "Намиста",
      "Персні",
      "Брошки",
      "Підвіски",
    ],
    required: true,
  },
  materials: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Material" },
  ],
  price: { type: String, required: true },
});

ProductSchema.pre("remove", async function (next) {
  console.log("You are trying to delete product. It is used in sales.");
  const productId = this._id;
  const saleUsingProduct = await Sales.find({ product: productId });

  if (saleUsingProduct > 0) {
    throw new Error("Cannot delete product. It is used in sales.");
  }
  next();
});

export default model("Product", ProductSchema);
