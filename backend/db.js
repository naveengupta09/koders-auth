import mongoose from "mongoose";
import ora from "ora";

const connectDB = async () => {
  const spinner = ora("Connecting to MongoDB...").start();
  try {
    if (!process.env.MONGODB_URI) {
      throw Error("MongoDB URI needed.");
    }
    await mongoose.connect(process.env.MONGODB_URI); // no extra options needed
    spinner.succeed("MongoDB connected");
  } catch (error) {
    spinner.fail("MongoDB connection failed");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
