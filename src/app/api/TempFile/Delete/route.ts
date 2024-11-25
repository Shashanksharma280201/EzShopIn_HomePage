// Import necessary modules
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection URL
const url = process.env.MONGODB_URI || "";
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
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: "Name is required" }, { status: 400 });
        }

        // Delete the document from the database
        const result = await inventory.deleteOne({ id });

        if (result.deletedCount > 0) {
            return NextResponse.json({ message: `Item "${id}" deleted successfully`, ok: true });
        } else {
            return NextResponse.json({ error: `Item "${id}" not found`, ok: false }, { status: 404 });
        }
    } catch (error: any) {
        console.error("Error deleting item:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message, ok: false }, { status: 500 });
    }
}

// Optional cleanup if the app shuts down
process.on("SIGINT", async () => {
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
});
