import mongoose from "mongoose";

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 50,
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Genre",
    },
    numberInStock: {
      type: Number,
      default: 0,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 255,
    },
  })
);

export default Movie;
