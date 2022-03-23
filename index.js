exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("It's my successful generation"),
  };
  return response;
};
