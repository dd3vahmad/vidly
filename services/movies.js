import Movie from "../models/movie.js";
import { movieResource, moviesResource } from "../resources/movie.js";

export const getMovies = async () => {
  const movies = await Movie.find({}).sort("name").populate("genre");

  return moviesResource(movies);
};

export const getMovie = async (id) => {
  const movie = await Movie.findById(id).populate("genre");

  return movieResource(movie);
};

export const postMovie = async (data) => {
  const newMovie = new Movie({ genre: data.genreId, ...data });
  const savedMovie = await (await newMovie.save()).populate("genre");

  return movieResource(savedMovie);
};

export const updateMovie = async (id, data) => {
  const movie = await (
    await Movie.findByIdAndUpdate(
      id,
      { genre: data.genreId, ...data },
      { new: true }
    )
  ).populate("genre");

  return movieResource(movie);
};

export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
