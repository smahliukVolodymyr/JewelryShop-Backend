import express from "express";
import createConnection from "./dbConnection.js";
import mainRouter from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

import { swaggerSpec, swaggerUi } from "./swagger.js";
dotenv.config();

createConnection(); //creates connection to MongoDB Database

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
