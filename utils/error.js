const error = (message) => {
  const error = new Error();
  error.failed = true;
  error.message = message;

  return error;
};

export default error;
