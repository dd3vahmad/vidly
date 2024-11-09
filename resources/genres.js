export const GenreResource = (genre) => {
  const { _id, name } = genre;

  return {
    id: _id,
    name,
  };
};

export const GenresResource = (genres) => {
  return genres.map((g) => GenreResource(g));
};
