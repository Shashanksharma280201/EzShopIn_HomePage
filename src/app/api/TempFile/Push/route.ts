import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = process.env.MONGODB_URI || "";
  const client = new MongoClient(url);

  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Ensure the body is an array for `insertMany`
    const documents = Array.isArray(body) ? body : [body];
    console.log("Documents to insert:", documents);

    // Connect to MongoDB
    await client.connect();
    const database = client.db("TempFile");
    const inventory = database.collection("inventory");

    // Insert the documents
    const result = await inventory.insertMany(documents);

    // Return the response
    return NextResponse.json({ insertedCount: result.insertedCount, ok: true });
  } catch (error: any) {
    console.error("Error in POST:", error);

    // Return a meaningful error message
    return NextResponse.json(
      { error: error.message || "Error uploading data", ok: false },
      { status: 500 }
    );
  } finally {
    // Close the client connection
    await client.close();
  }
}
