import { MongoClient } from "mongodb";

const URI = `mongodb+srv://dbUser:123@cluster0.qtpic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
