export const movieResource = (movie) => {
  if (!movie) return null;

  const { _id, title, genre, numberInStock, dailyRentalRate } = movie;

  return {
    id: _id,
    title,
    genre: {
      id: genre._id,
      name: genre.name,
    },
    numberInStock,
    dailyRentalRate,
  };
};

export const moviesResource = (movies) => {
  if (!movies) return movies;

  return movies.map((c) => movieResource(c));
};
