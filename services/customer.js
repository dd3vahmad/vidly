import Customer from "../models/customer.js";
import { CustomerResource, CustomersResource } from "../resources/customer.js";

export const getCustomers = async () => {
  const customers = await Customer.find({}).sort("name");

  return CustomersResource(customers);
};

export const getCustomer = async (id) => {
  const customer = await Customer.findById(id);

  return CustomerResource(customer);
};

export const postCustomer = async (data) => {
  const newCustomer = new Customer(data);
  const savedCustomer = await newCustomer.save();

  return CustomerResource(savedCustomer);
};

export const updateCustomer = async (id, data) => {
  const customer = await Customer.findByIdAndUpdate(id, data, { new: true });

  return CustomerResource(customer);
};

export const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};
