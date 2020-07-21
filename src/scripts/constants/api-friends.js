const API_FRIENDS_PARAMETERS = {
  url: `https://reqres.in`,
  headers: {
    'Content-Type': 'application/json',
  },
  roots: {
    getFriends: `/api/users?page=1`,
  }
};

export default API_FRIENDS_PARAMETERS;



