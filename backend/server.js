import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = http.createServer(async (req, res) => {
  try {
    let filePath;
    if (req.method === "GET") {
      if (req.url === "/") {
        filePath = path.resolve(__dirname, "../mockupData/dishes.json");
      } else {
        throw new Error("Not found");
      }
    } else {
      throw new Error("Method not allowed");
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(8000);
