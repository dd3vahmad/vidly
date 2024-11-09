import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("i", {
    title: "Vidly API",
    message: "The best movie rental app - Vidly",
  });
});

export default router;
