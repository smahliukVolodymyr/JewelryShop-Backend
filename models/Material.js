import { Schema, model } from "mongoose";
import Product from "./Product.js";

const MaterialSchema = new Schema({
  name: { type: String, unique: true, required: true },
  pricePerGram: { type: String, required: true },
});

MaterialSchema.pre("remove", async function (next) {
  console.log("You are trying to delete material. It is used in products.");
  const materialId = this._id;
  const productsUsingMaterial = await Product.find({ materials: materialId });

  if (productsUsingMaterial.length > 0) {
    throw new Error("Cannot delete material. It is used in products.");
  }
  next();
});

export default model("Material", MaterialSchema);
