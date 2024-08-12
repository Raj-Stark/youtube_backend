import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected !! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection failed ", error);
  }
};

export default connectDB;
