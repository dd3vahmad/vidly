import Joi from "joi";
import err from "../utils/error.js";
import Movie from "../models/movie.js";
import Customer from "../models/customer.js";

const validateRental = (req, res, next) => {
  const schema = Joi.object({
    customerId: Joi.string()
      .min(5)
      .max(50)
      .required()
      .custom(async (value, helpers) => {
        const customerExists = await checkCustomerExistsInDB(value);
        if (!customerExists) {
          return helpers.message("Customer ID is invalid or does not exist");
        }
        return value;
      }),
    movieId: Joi.string()
      .min(5)
      .max(50)
      .required()
      .custom(async (value, helpers) => {
        const movieExists = await checkMovieExistsInDB(value);
        if (!movieExists) {
          return helpers.message("Movie ID is invalid or does not exist");
        }
        return value;
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json(err(error.details[0].message));

  return next();
};

async function checkCustomerExistsInDB(customerId) {
  const customer = await Customer.findById(customerId);
  return !!customer;
}

async function checkMovieExistsInDB(movieId) {
  const movie = await Movie.findById(movieId);
  return !!movie || movie.numberInStock > 0;
}

export default validateRental;
