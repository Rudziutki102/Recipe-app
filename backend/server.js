import { connectToDatabase } from "./db.js";
import express from "express";
import router from "./routes/recipes.js";
import { errorHandler } from "./helpers/errorHandler.js";

const PORT = process.env.PORT || 3000;

const app = express();
// routes
app.use("/api", router);
// error handlers
app.use(errorHandler);
async function startServer() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log("running");
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
}

startServer();
