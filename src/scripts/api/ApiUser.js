import Api from './Api';

export default class ApiUser extends Api {
  constructor(parameters){
    super(parameters);
  }

  getUser() {
    return fetch(`${this.url}${this.roots.getUser}`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    })
    .then(res => res.json());
  }

}
