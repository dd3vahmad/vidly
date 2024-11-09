import Genre from "../models/genre.js";
import { GenreResource, GenresResource } from "../resources/genres.js";

export const getGenres = async () => {
  const genres = await Genre.find({}).select({ name: 1 }).sort({ name: 1 });

  return GenresResource(genres);
};

export const getGenre = async (id) => {
  const genre = await Genre.findById(id).select({ name: 1 });

  return GenreResource(genre);
};

export const postGenre = async (data) => {
  const newGenre = new Genre(data);
  const savedGenre = await newGenre.save();

  return GenreResource(savedGenre);
};

export const updateGenre = async (id, data) => {
  const genre = await Genre.findByIdAndUpdate(id, data, { new: true });

  return GenreResource(genre);
};

export const deleteGenre = async (id) => {
  return await Genre.findByIdAndDelete(id);
};
