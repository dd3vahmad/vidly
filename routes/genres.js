import Joi from "joi";
import { Router } from "express";
import {
  deleteGenre,
  getGenre,
  getGenres,
  postGenre,
  updateGenre,
} from "../services/genre.js";
import error from "../utils/error.js";
import _res from "../utils/response.js";

const router = Router();

router.get("/", async (req, res) => {
  const genres = await getGenres();

  res
    .status(200)
    .json(_res({ message: "Genres fetched successfully", data: genres }));
});

router.get("/:id", async (req, res) => {
  const genre = await getGenre(req.params.id);

  if (!genre)
    return res
      .status(404)
      .send(error("The genre with the given ID was not found."));

  res
    .status(200)
    .json(_res({ message: "Genre fetched successfully", data: genre }));
});

router.post("/", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newGenre = postGenre(req.body);

  res
    .status(200)
    .json(_res({ message: "Genre added successfully", data: newGenre }));
});

router.put("/:id", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await updateGenre(req.params.id, req.body);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res
    .status(200)
    .json(_res({ message: "Genre fetched successfully", data: genre }));
});

router.delete("/:id", async (req, res) => {
  await deleteGenre(req.params.id);

  res.status(200).json({ message: "genre deleted successfully" });
});

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

export default router;
