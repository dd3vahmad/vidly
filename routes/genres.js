import Joi from "joi";
import { Router } from "express";
import { getGenre, getGenres, postGenre } from "../services/genre.js";
import error from "../utils/error.js";

const router = Router();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Sci-Fi" },
];

router.get("/", async (req, res) => {
  const genres = await getGenres();

  res
    .status(200)
    .json({ message: "Genres fetched successfully", data: genres });
});

router.get("/:id", async (req, res) => {
  const genre = await getGenre(req.params.id);

  if (!genre)
    return res
      .status(404)
      .send(error("The genre with the given ID was not found."));

  res.status(200).json({ message: "Genre fetched successfully", data: genre });
});

router.post("/", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newGenre = postGenre(req.body);

  res.status(200).json({ message: "Genre added successfully", data: newGenre });
});

router.put("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

export default router;
