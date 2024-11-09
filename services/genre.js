import Genre from "../models/genre.js";
import { GenreResource, GenresResource } from "../resources/genres.js";

export const getGenres = async () => {
  try {
    const genres = await Genre.find({}).select({ name: 1 });

    return GenresResource(genres);
  } catch (error) {
    throw new Error(error);
  }
};

export const getGenre = async (id) => {
  try {
    const genre = await Genre.findById(id).select({ name: 1 });

    return GenreResource(genre);
  } catch (error) {
    throw new Error(error);
  }
};

export const postGenre = async (data) => {
  try {
    const newGenre = new Genre(data);
    const savedGenre = await newGenre.save();

    return GenreResource(savedGenre);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateGenre = async (id, data) => {
  try {
    const genre = await Genre.findByIdAndUpdate(id, data, { new: true });

    return GenreResource(genre);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteGenre = async (id) => {
  try {
    return await Genre.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
