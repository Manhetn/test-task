import BaseComponent from './BaseComponent';

export default class User extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  renderUser() {
    this._getUserData();
  }

  _getUserData() {

    const { apiUser } = this._dependencies;

    apiUser
      .getUser()
      .then(res =>{
        console.log(res);
      })
  }

}
