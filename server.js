const express = require(`express`);
// const Joi = require(`joi`);
const logger = require(`./utils/logger`);
const authenticate = require(`./middlewares/authenticate`);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(logger);

app.use(authenticate)

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Sci-Fi" },
];

app.get(`/`, (req, res) => {
  res.send(`Hello World!`);
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
