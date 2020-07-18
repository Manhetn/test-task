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


// • информация о пользователе: https://randomuser.me/api/
// • список друзей: https://reqres.in/api/users?page=1
// • записи: https://jsonplaceholder.typicode.com/posts

