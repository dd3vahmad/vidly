import Customer from "../models/customer.js";
import { CustomerResource, CustomersResource } from "../resources/customers.js";

export const getCustomers = async () => {
  const customers = await Customer.find({})
    .select({ name: 1 })
    .sort({ name: 1 });

  return CustomersResource(customers);
};

export const getCustomer = async (id) => {
  const customer = await Customer.findById(id).select({ name: 1 });

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
