import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGOURL = process.env.MONGO_URI;

const client = new MongoClient(MONGOURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("recipe-app").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

export async function getRecipes() {
  try {
    const database = client.db("recipe-app");
    const collection = database.collection("recipes");
    const recipes = await collection.find({}).toArray();
    return recipes;
  } catch (error) {
    console.error("Failed to fetch recipes from MongoDB", error);
    throw error;
  }
}
