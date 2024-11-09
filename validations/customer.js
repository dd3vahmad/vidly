import Joi from "joi";
import err from "../utils/error.js";

const validateCustomer = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json(err(error.details[0].message));

  return next();
};

export default validateCustomer;
