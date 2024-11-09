import express from "express";
import helmet from "helmet";
import genres from "./routes/genres.js";
import root from "./routes/root.js";
import dbconnect from "./db/db.js";
import morgan from "morgan";
import customers from "./routes/customers.js";
import movies from "./routes/movies.js";

const PORT = process.env.PORT || 3000;
const app = express();

dbconnect();

app.set("view engine", "pug");

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);

app.get("/", root);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Oops!, something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
