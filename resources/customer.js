export const CustomerResource = (customer) => {
  if (!customer) return null;

  const { _id, name } = customer;

  return {
    id: _id,
    name,
    phone,
    isGold,
  };
};

export const CustomersResource = (customers) => {
  if (!customers.length) return null;

  return customers.map((c) => CustomerResource(c));
};
