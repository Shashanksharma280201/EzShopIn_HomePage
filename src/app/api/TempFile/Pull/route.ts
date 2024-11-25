// Import necessary modules
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection URL (validate at runtime for safety)
// if (!process.env.MONGODB_URI) {
//     throw new Error("MongoDB connection URL is not defined in environment variables");
// }
const url: string = "mongodb+srv://TempFile:TempFile_ezshopin@cluster0.yb44ya6.mongodb.net/";

let client: MongoClient | null = null;

// Helper function to initialize and reuse MongoClient
async function getClient() {
    if (!client) {
        client = new MongoClient(url);
        console.log(client)
        await client.connect();
    }
    return client;
}

export async function GET() {
    try {
        const client = await getClient();
        const database = client.db("TempFile");
        const inventory = database.collection("inventory");

        const query = { }
        const items = await inventory.find(query).toArray();
        return NextResponse.json({ items, ok: true });
    } catch (error: any) {
        console.error("Error", error);
        return NextResponse.json({ error: error.message, ok: false }, { status: 500 });
    }
}

// Optional cleanup if the app shuts down (e.g., for serverless functions)
process.on("SIGINT", async () => {
    if (client) {
        await client.close();
        client = null;
    }
});
