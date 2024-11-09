import { Router } from "express";
import { index, post, show } from "../controllers/genre.js";
import validateMovie from "../validations/movie.js";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateMovie, post);

export default router;
