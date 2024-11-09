import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../services/rental.js";
import error from "../utils/error.js";
import _res from "../utils/response.js";

export const index = async (req, res) => {
  const movies = await getMovies();

  res
    .status(200)
    .json(_res({ message: "Movies fetched successfully", data: movies }));
};

export const show = async (req, res) => {
  const movie = await getMovie(req.params.id);

  if (!genre)
    return res
      .status(404)
      .send(error("The movie with the given ID was not found."));

  res
    .status(200)
    .json(_res({ message: "Movie fetched successfully", data: movie }));
};

export const post = (req, res) => {
  const newMovie = postMovie(req.body);

  res
    .status(200)
    .json(_res({ message: "Movie added successfully", data: newMovie }));
};

export const update = async (req, res) => {
  const movie = await updateMovie(req.params.id, req.body);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res
    .status(200)
    .json(_res({ message: "Movie fetched successfully", data: movie }));
};

export const remove = async (req, res) => {
  await deleteMovie(req.params.id);

  res.status(200).json(_res({ message: "Movie deleted successfully" }));
};
