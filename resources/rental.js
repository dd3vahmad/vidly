export const rentalResource = (rental) => {
  if (!rental) return null;

  const { _id, customer, movie, dateOut, dateReturned, rentalFee } = rental;

  return {
    id: _id,
    customer: {
      id: customer._id,
      name: customer.name,
      phone: customer.phone,
      isGold: customer.isGold,
    },
    movie: {
      id: movie._id,
      title: movie.title,
    },
    dateOut,
    dateReturned,
    rentalFee,
  };
};

export const rentalsResource = (rentals) => {
  if (!rentals) return rentals;

  return rentals.map((r) => rentalResource(r));
};
