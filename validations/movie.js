import Joi from "joi";
import err from "../utils/error.js";

const validateMovie = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(0).max(255).required(),
    genreId: Joi.string().min(1).max(50).required(),
    numberInStock: Joi.number().min(0).max(255).default(0),
    dailyRentalRate: Joi.number().min(0).max(255).default(0),
  });

  const { errors } = schema.validate(req.body);
  if (errors) return res.status(400).json(err(errors.details[0].message));

  return next();
};

export default validateMovie;
