import BaseComponent from './BaseComponent';

export default class Filter extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }


  setListeners() {
    console.log('setFilter!!!!!!!!!!!!!!!!!!!!!!')
      this._setHandlers([
        { element: this.elements.input,
          event: 'input',
          handler: this._filter.bind(this)
        },
      ]);
    }

  removeListeners() {
    console.log('removeFilter!!!!!!!!!!!!!!!!!!!!!!')
    this._removeHandlers([
      { element: this.block,
        event: 'input',
        handler: this._filter.bind(this)
      },
    ]);
  }

  _filter() {
    const { storage, friends, pagination } = this._dependencies;
    const friendsArray = JSON.parse(storage.getPropertyValue('friends'));
    const filteredFriends = friendsArray.filter(friend => {
       return friend.email.includes(this.elements.input.value) || friend.first_name.includes(this.elements.input.value) || friend.last_name.includes(this.elements.input.value)
    })
    this.removeListeners();
    pagination.removeListeners();
    friends.clearList();
    pagination.clearPagination();
    friends.renderFriends(filteredFriends);
    // pagination.setListeners();
    // this.setListeners();
  }

  // _filter() {
  //   const { storage, friends, pagination } = this._dependencies;
  //   const friendsArray = JSON.parse(storage.getPropertyValue('friends'));
  //   let filteredFriends = [];
  //   if (this.elements.input.value !== '0') {
  //     // this.removeListeners();
  //     // pagination.removeListeners();
  //     // pagination.clearPagination();
  //     // friends.clearList();
  //     // console.log('yo')
  //     filteredFriends = friendsArray.filter(friend => {
  //       return  friend.email.includes(this.elements.input.value) || friend.first_name.includes(this.elements.input.value) || friend.last_name.includes(this.elements.input.value)
  //     });
  //     this.removeListeners();
  //     pagination.removeListeners();

  //     pagination.clearPagination();
  //     friends.clearList();

  //     console.log(filteredFriends)


  //     friends.renderFriends(filteredFriends);
  //     // this.removeListeners();


  //   } else {
  //     pagination.removeListeners();
  //     // this.removeListeners();
  //     pagination.clearPagination();
  //     friends.clearList();
  //     friends.renderFriends(filteredFriends);
  //     // this.removeListeners();
  //     // pagination.removeListeners();
  //     // pagination.clearPagination();
  //     // this.removeListeners();
  //     // friends.clearList();
  //     // friends.renderFriends(filteredFriends);
  //   }



  //   // friends._renderFriends(filteredFriends);

  // }

  // _filter() {
  //   const { storage, friends, pagination } = this._dependencies;
  //   const friendsArray = JSON.parse(storage.getPropertyValue('friends'));
  //   const filteredFriends = friendsArray.filter(friend => {
  //      return  friend.email.includes(this.elements.input.value) || friend.first_name.includes(this.elements.input.value) || friend.last_name.includes(this.elements.input.value)
  //   })
  //   friends.clearList();
  //   pagination.clearPagination();
  //   // friends._renderFriends(filteredFriends);
  //   friends.renderFriends(filteredFriends);
  // }


}

