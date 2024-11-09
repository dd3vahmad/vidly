import { Router } from "express";
import validateRental from "../validations/rental.js";
import { index, post, remove, show, update } from "../controllers/rental.js";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateRental, post);
router.put("/:id", validateRental, update);
router.delete("/:id", remove);

export default router;
