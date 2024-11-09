export const GenreResource = (genre) => {
  if (!genre) return null;

  const { _id, name } = genre;

  return {
    id: _id,
    name,
  };
};

export const GenresResource = (genres) => {
  if (!genres.length) return null;

  return genres.map((g) => GenreResource(g));
};
