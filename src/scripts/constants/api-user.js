const API_USER_PARAMETERS = {
  url: `https://randomuser.me`,
  headers: {
    'Content-Type': 'application/json'
  },
  roots: {
    getUser: `/api/`,
  }
};

export default API_USER_PARAMETERS;
