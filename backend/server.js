import http from "http";
import { getRecipes, connectToDatabase } from "./db.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/") {
      const recipes = await getRecipes();

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(recipes));
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

async function startServer() {
  try {
    await connectToDatabase();
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
}

startServer();
