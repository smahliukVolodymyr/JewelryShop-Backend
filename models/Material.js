import { Schema, model } from "mongoose";

const MaterialSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    pricePerGram: { type: Number, required: true },
  },
  { versionKey: false }
);

export default model("Material", MaterialSchema);
