const express = require(`express`);
const logger = require(`./utils/logger`);
const authenticate = require(`./middlewares/authenticate`);
const helmet = require("helmet");
const morgan = require("morgan");
// const Joi = require(`joi`);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));
app.use(logger);
app.use(morgan("tiny"));

app.use(helmet());

app.use(authenticate);

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
