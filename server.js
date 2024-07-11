import express from "express";
import createConnection from "./dbConnection.js";
import mainRouter from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

createConnection(); //creates connection to MongoDB Database

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// app.use("/auth", authRouter);
app.use("/api/", mainRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
