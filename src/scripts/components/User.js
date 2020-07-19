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
        // console.log(res.results[0].name);
        const userData = res.results[0];
        this._addUserNames(userData.name);
        this._addEmail(userData.email);
        this._addPhoneNumber(userData.phone);
        this._addAddress(userData.location);
      })
  }

  _addUserNames(userData) {
    this.elements.firstName.textContent = userData.first;
    this.elements.middleName.textContent = userData.middle ? userData.middle : '';
    this.elements.lastName.textContent = userData.last;
  }

  _addEmail(email) {
    this.elements.email.textContent = email;
  }

  _addPhoneNumber(phone) {
    // console.log(phone)
    this.elements.number.textContent = phone;
    this.elements.number.href=`tel:${phone}`
    // console.log(this._createNumber(phone));
  }

  _addAddress(addressData) {
    // console.log(addressData.country);
    this.elements.address.textContent = `${addressData.country},
                                          ${addressData.city},
                                          ${addressData.street.name},
                                          ${addressData.street.number}`
                                          ;
  }

  _createNumber(data) {
    // console.log(data)
    const number = data.match(/\d/g);
    // console.log(number)
    // return number;
  }
}
