import { Router } from "express";
import { index, post, show } from "../controllers/genre";
import validateMovie from "../validations/movie";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateMovie, post);
