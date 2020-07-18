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



    // mainApi
    //   .getUser()
    //   .then(res => {
    //     if (res.statusCode === '200') {
    //       storage.setPropertyValue('userName', res.data.name);
    //       header._showAuthorizedUserMenu(res.data.name)
    //     } else {
    //       throw new Error(res.message);
    //     }
    //   }).catch(err => console.log(err))



}
