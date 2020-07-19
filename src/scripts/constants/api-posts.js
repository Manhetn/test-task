const API_POSTS_PARAMETERS = {
  url: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json'
  },
  roots: {
    getPosts: `/posts`,
  }
};

export default API_POSTS_PARAMETERS;


