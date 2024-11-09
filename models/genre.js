import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 255,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;
