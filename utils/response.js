const _res = (res) => {
  const response = {};

  response.message = res.message;
  if (res.data) response.data = res.data;

  return response;
};

export default _res;
