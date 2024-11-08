const express = require(`express`);
const logger = require(`./utils/logger`);
const helmet = require("helmet");
const genres = require(`./routes/genres`);
const root = require(`./routes/root`);

const PORT = process.env.PORT || 3000;
const app = express();

app.set(`view engine`, `pug`);

app.use(express.json());
app.use(logger);
app.use(helmet());

app.use("/api/genres", genres);

app.get(`/`, root);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
