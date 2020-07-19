import Api from './Api';

export default class ApiFriends extends Api {
  constructor(parameters){
    super(parameters);
  }

  getFriends() {
    return fetch(`${this.url}${this.roots.getFriends}`, {
      method: 'GET',
      // credentials: 'include',
      headers: this.headers,
    })
    .then(res => this._checkRes(res))
    .catch(this._showError);
  }

}
