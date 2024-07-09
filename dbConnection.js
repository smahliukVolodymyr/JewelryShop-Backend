import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

async function createConnection() {
  await mongoose.connect(`${url}/${dbName}`);
}

export default createConnection;
