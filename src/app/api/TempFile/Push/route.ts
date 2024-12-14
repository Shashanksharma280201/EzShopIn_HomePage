import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = "mongodb+srv://TempFile:TempFile_ezshopin@cluster0.yb44ya6.mongodb.net/";
  const client = new MongoClient(url);

  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Ensure body is an array (insertMany requires an array)
    const documents = Array.isArray(body) ? body : [body];
    console.log("Documents to insert:", documents);

    // Connect to MongoDB
    await client.connect();
    const database = client.db("TempFile");
    const inventory = database.collection("inventory");

    // Insert the documents
    const result = await inventory.insertMany(documents);

    // Return the response
    return NextResponse.json({ result, ok: true });
  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.json({ error: "There is an error while uploading the data", ok: false }, { status: 500 });
  } finally {
    // Ensure the client connection is closed
    await client.close();
  }
}
