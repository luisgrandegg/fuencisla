import mongoose from "mongoose";

import { config } from "../config";
const MONGODB_URI = config.mongoDb.uri;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

// @ts-expect-error We need to declare mongoose in global
let cached = global.mongoose;

if (!cached) {
  // @ts-expect-error We need to declare mongoose in global
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
