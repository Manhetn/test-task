import Api from './Api';

export default class ApiPosts extends Api {
  constructor(parameters){
    super(parameters);
  }

  getPosts() {
    return fetch(`${this.url}${this.roots.getPosts}`, {
      method: 'GET',
      // credentials: 'include',
      headers: this.headers,
    })
    .then(res => this._checkRes(res))
  }

}
