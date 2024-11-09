import {
  deleteRental,
  getRental,
  getRentals,
  postRental,
  updateRental,
} from "../services/rental.js";
import error from "../utils/error.js";
import _res from "../utils/response.js";

export const index = async (req, res) => {
  const rentals = await getRentals();

  res
    .status(200)
    .json(_res({ message: "Rentals fetched successfully", data: rentals }));
};

export const show = async (req, res) => {
  const rental = await getRental(req.params.id);

  if (!rental)
    return res
      .status(404)
      .send(error("The rental with the given ID was not found."));

  res
    .status(200)
    .json(_res({ message: "Rental fetched successfully", data: rental }));
};

export const post = async (req, res) => {
  const newRental = postRental(req.body);

  newRental.numInStock--;
  await newRental.save();

  res
    .status(200)
    .json(_res({ message: "Rental added successfully", data: newRental }));
};

export const update = async (req, res) => {
  const rental = await updateRental(req.params.id, req.body);

  if (!rental)
    return res.status(404).send("The rental with the given ID was not found.");

  res
    .status(200)
    .json(_res({ message: "Rental fetched successfully", data: rental }));
};

export const remove = async (req, res) => {
  await deleteRental, req.params.id;

  res.status(200).json(_res({ message: "Movie deleted successfully" }));
};
