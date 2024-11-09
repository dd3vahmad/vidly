import Movie from "../models/movie.js";
import { movieResource, moviesResource } from "../resources/movie.js";

export const getMovies = async () => {
  const movies = await Movie.find({}).sort("name");

  return moviesResource(movies);
};

export const getMovie = async (id) => {
  const movie = await Movie.findById(id);

  return movieResource(movie);
};

export const postMovie = async (data) => {
  const newMovie = new Movie(data);
  const savedMovie = await newMovie.save();

  return movieResource(savedMovie);
};

export const updateMovie = async (id, data) => {
  const movie = await Movie.findByIdAndUpdate(id, data, { new: true });

  return movieResource(movie);
};

export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
