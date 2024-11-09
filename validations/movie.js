import Joi from "joi";
import err from "../utils/error.js";

const validateMovie = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(0).max(255).required(),
    genreId: Joi.string().min(1).max(50).required(),
    numberInStock: Joi.number().min(0).max(255).default(0).optional(),
    dailyRentalRate: Joi.number().min(0).max(255).default(0).optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json(err(error.details[0].message));

  return next();
};

export default validateMovie;
