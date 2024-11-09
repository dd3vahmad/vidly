import { Router } from "express";
import { index, post, remove, show, update } from "../controllers/movie.js";
import validateMovie from "../validations/movie.js";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateMovie, post);
router.put("/:id", validateMovie, update);
router.delete("/:id", remove);

export default router;
