import mongoose from "mongoose";

const dbconnect = () => {
  return mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Failed to connect to database", err);
    });
};

export default dbconnect;
