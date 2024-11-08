const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("i", {
    title: "Vidly API",
    message: "The best movie rental app - Vidly",
  });
});

module.exports = router;
