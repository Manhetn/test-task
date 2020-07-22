import BaseComponent from './BaseComponent';

export default class User extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  getUser() {
    const { apiUser } = this._dependencies;

    apiUser
      .getUser()
      .then(res => {
        const userData = res.results[0];

        this._addUserNames(userData.name);
        this._addEmail(userData.email);
        this._addPhoneNumber(userData.phone);
        this._addAddress(userData.location);
      });
  }

  _addUserNames(userData) {
    this.elements.firstName.textContent = userData.first;
    this.elements.middleName.textContent = userData.middle ? userData.middle : '';
    this.elements.lastName.textContent = userData.last;
  }

  _addEmail(email) {
    this.elements.email.textContent = email;
    this.elements.email.href=`mailto:${email}`;
  }

  _addPhoneNumber(phone) {
    this.elements.number.textContent = phone;
    this.elements.number.href = `tel: +${this._formattingNumber(phone)}`;
  }

  _addAddress(addressData) {
    this.elements.address.textContent = `${addressData.country},
                                          ${addressData.city},
                                          ${addressData.street.name},
                                          ${addressData.street.number}`;
  }

  _formattingNumber(data) {
    let number = data.match(/\d/g);
    number = number.join('');
    return number;
  }
}
