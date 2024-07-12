import mongoose, { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "Earrings",
      "Bracelets",
      "Rings",
      "Chains",
      "Necklaces",
      "Brooches",
      "Pendants",
    ],
    required: true,
  },
  materials: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Material" },
  ],
  weight: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default model("Product", ProductSchema);
