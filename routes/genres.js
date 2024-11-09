import { Router } from "express";
import { index, post, remove, show, update } from "../controllers/genre.js";
import validateGenre from "../validations/genre.js";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateGenre, post);
router.put("/:id", validateGenre, update);
router.delete("/:id", remove);

export default router;
