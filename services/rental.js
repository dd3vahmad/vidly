import Rental from "../models/rental.js";
import { rentalResource, rentalsResource } from "../resources/rental.js";

export const getRentals = async () => {
  const rentals = await Rental.find({})
    .sort("-dateOut")
    .populate("customer")
    .populate("movie");

  return rentalsResource(rentals);
};

export const getRental = async (id) => {
  const rental = await Rental.findById(id)
    .populate("customer")
    .populate("movie");

  return rentalResource(rental);
};

export const postRental = async (data) => {
  const newRental = new Rental({
    customer: data.customerId,
    movie: data.movieId,
    ...data,
  });
  const savedRental = (
    await (await newRental.save()).populate("customer")
  ).populate("movie");

  return rentalResource(savedRental);
};

export const updateRental = async (id, data) => {
  const rental = await (
    await Rental.findByIdAndUpdate(
      id,
      { customer: data.customerId, movie: data.movieId, ...data },
      { new: true }
    )
  )
    .populate("customer")
    .populate("movie");

  return rentalResource(movie);
};

export const deleteRental = async (id) => {
  return await Rental.findByIdAndDelete(id);
};
