import express from "express";
import logger from "./utils/logger";
import helmet from "helmet";
import genres from "./routes/genres";
import root from "./routes/root";

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
