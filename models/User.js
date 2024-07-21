import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "Role" }],
  },
  { versionKey: false }
);

export default model("User", UserSchema);
