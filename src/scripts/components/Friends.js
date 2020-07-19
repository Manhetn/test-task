import BaseComponent from './BaseComponent';

export default class Friends extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  _getFriends() {
    const { apiFriends, storage } = this._dependencies;

    apiFriends
      .getFriends()
      .then(res => {
        storage.setPropertyValue('friends', JSON.stringify(res.data));
        this._renderFriends(res.data);
      })
  }

  _renderFriends(friendsArray) {
    friendsArray.forEach(friend => {
      this._addFriend(friend);
    })
  }

  _addFriend(data) {
    const { friend } = this._dependencies;

    this.block.insertAdjacentHTML('afterbegin', friend.createFriend(data));
  }

  clearList() {
    this.block.textContent = '';
  }

  hidden() {
    this.block.classList.add(this.modifiers.blockHidden);
  }

  visible() {
    this.block.classList.remove(this.modifiers.blockHidden);
  }

}
