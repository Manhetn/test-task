import BaseComponent from './BaseComponent';

export default class Filter extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }


  setListeners() {
      this._setHandlers([
        { element: this.elements.input, event: 'input', handler: this._filter.bind(this) },
      ]);
    }

  removeListeners() {

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
       return  friend.email.includes(this.elements.input.value) || friend.first_name.includes(this.elements.input.value) || friend.last_name.includes(this.elements.input.value)
    })
    friends.clearList();
    pagination.clearPagination();
    // friends._renderFriends(filteredFriends);
    friends.renderFriends(filteredFriends);
  }


}

