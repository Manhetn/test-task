export default class Api {
  constructor(parameters) {
    this.url = parameters.url;
    this.headers = parameters.headers;
    this.roots = parameters.roots;
  }

  // проверка статуса ответа
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  // выводим ошибку в консоль
  _showError(err){
    console.log(`Ошибка: ${err}`);
  }
}
