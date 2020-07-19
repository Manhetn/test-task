export default class Api {
  constructor(parameters) {
    this.url = parameters.url;
    this.headers = parameters.headers;
    this.roots = parameters.roots;
  }

  getDependencies(dependencies) {
    this._dependencies = dependencies;
  }

  // проверка статуса ответа
  _checkRes(res) {
    if (res.ok) {
      // console.log(res.ok)
      return res.json();
    } else {
      console.log('не ок')
      return Promise.reject(res.status);
    }
  }
}
