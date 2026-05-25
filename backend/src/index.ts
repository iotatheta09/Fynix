import "dotenv/config";
import { connectDatabase } from "./config/database.config";
import express from "express";
import { Env } from "./config/env.config";
const app = express();







const startServer = async () => {
  await connectDatabase();

  app.listen(Env.PORT, () => {
    console.log(`Server running on port ${Env.PORT}`);
  });
};

startServer();