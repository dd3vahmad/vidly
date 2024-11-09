import mongoose from "mongoose";

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: {
      type: String,
      minLength: 3,
      maxLength: 255,
    },
  })
);

export default Genre;
