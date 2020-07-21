export default class Api {
  constructor(parameters) {
    this.url = parameters.url;
    this.headers = parameters.headers;
    this.roots = parameters.roots;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  _showError(err){
    console.log(`Ошибка: ${err}`);
  }
}
