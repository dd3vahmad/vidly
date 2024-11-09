import {
  deleteGenre,
  getGenre,
  getGenres,
  postGenre,
  updateGenre,
} from "../services/genre.js";
import error from "../utils/error.js";
import _res from "../utils/response.js";

export const index = async (req, res) => {
  const genres = await getGenres();

  res
    .status(200)
    .json(_res({ message: "Genres fetched successfully", data: genres }));
};

export const show = async (req, res) => {
  const genre = await getGenre(req.params.id);

  if (!genre)
    return res
      .status(404)
      .send(error("The genre with the given ID was not found."));

  res
    .status(200)
    .json(_res({ message: "Genre fetched successfully", data: genre }));
};

export const post = (req, res) => {
  const newGenre = postGenre(req.body);

  res
    .status(200)
    .json(_res({ message: "Genre added successfully", data: newGenre }));
};

export const update = async (req, res) => {
  const genre = await updateGenre(req.params.id, req.body);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res
    .status(200)
    .json(_res({ message: "Genre fetched successfully", data: genre }));
};

export const remove = async (req, res) => {
  await deleteGenre(req.params.id);

  res.status(200).json({ message: "Genre deleted successfully" });
};
