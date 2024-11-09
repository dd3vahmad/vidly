import Joi from "joi";
import err from "../utils/error.js";

const validateGenre = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json(err(error.details[0].message));

  next();
};

export default validateGenre;
