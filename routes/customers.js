import { Router } from "express";
import { index, post, remove, show, update } from "../controllers/customer.js";
import validateCustomer from "../validations/customer.js";

const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", validateCustomer, post);
router.put("/:id", validateCustomer, update);
router.delete("/:id", remove);

export default router;
