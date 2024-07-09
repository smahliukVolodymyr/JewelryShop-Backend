import mongoose from "mongoose";

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

await mongoose.connect(`${url}/${dbName}`);

const client = await mongoose.connection;

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       minlength: 2,
//       maxlength: 50,
//     },
//     age: {
//       type: Number,
//       required: true,
//       minlength: 18,
//       maxlength: 100,
//     },
//     email: {
//       type: String,
//       required: true,
//       minlength: 5,
//       maxlength: 225,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const users = mongoose.model("User", userSchema);
