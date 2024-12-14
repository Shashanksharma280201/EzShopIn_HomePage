// Import necessary modules
import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection URL
const url: string = "mongodb+srv://TempFile:TempFile_ezshopin@cluster0.yb44ya6.mongodb.net/";

let client: MongoClient | null = null;

// Helper function to initialize and reuse MongoClient
async function getClient(): Promise<MongoClient> {
    if (!client) {
        client = new MongoClient(url);
        try {
            await client.connect();
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw new Error("Failed to connect to the database");
        }
    }
    return client;
}

// DELETE API handler
export async function DELETE(req: Request) {
    try {
        const client = await getClient();
        const database = client.db("TempFile");
        const inventory = database.collection("inventory");

        // Parse the request body
        const body = await req.json();
        const { itemId } = body;

        if (!itemId) {
            return NextResponse.json({ error: "itemId is required" }, { status: 400 });
        }

        // Delete the document from the database
        const result = await inventory.deleteOne({ _id: new ObjectId(itemId) });

        if (result.deletedCount > 0) {
            return NextResponse.json({ message: `Item "${itemId}" deleted successfully`, ok: true });
        } else {
            return NextResponse.json({ error: `Item "${itemId}" not found`, ok: false }, { status: 404 });
        }
    } catch (error: any) {
        console.error("Error deleting item:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message, ok: false }, { status: 500 });
    }
}

// Optional cleanup if the app shuts down
const cleanup = async () => {
    if (client) {
        try {
            await client.close();
            console.log("MongoDB client closed successfully");
        } catch (error) {
            console.error("Error closing MongoDB client:", error);
        } finally {
            client = null;
        }
    }
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
