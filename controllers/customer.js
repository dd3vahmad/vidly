import {
  deleteCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
  updateCustomer,
} from "../services/customer.js";
import error from "../utils/error.js";
import _res from "../utils/response.js";

export const index = async (req, res) => {
  const customers = await getCustomers();

  res
    .status(200)
    .json(_res({ message: "Customers fetched successfully", data: customers }));
};

export const show = async (req, res) => {
  const customer = await getCustomer(req.params.id);

  if (!genre)
    return res
      .status(404)
      .send(error("The customer with the given ID was not found."));

  res
    .status(200)
    .json(_res({ message: "Customer fetched successfully", data: customer }));
};

export const post = (req, res) => {
  const newCustomer = postCustomer(req.body);

  res
    .status(200)
    .json(_res({ message: "Customer added successfully", data: newCustomer }));
};

export const update = async (req, res) => {
  const customer = await updateCustomer(req.params.id, req.body);

  if (!customer)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res
    .status(200)
    .json(_res({ message: "Customer fetched successfully", data: customer }));
};

export const remove = async (req, res) => {
  await deleteCustomer(req.params.id);

  res.status(200).json(_res({ message: "Customer deleted successfully" }));
};
