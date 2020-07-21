import BaseComponent from './BaseComponent';

export default class Friends extends BaseComponent {
  constructor(parameters){
    super(parameters);
    this.data = parameters.data;
  }

  getFriends() {
    const { apiFriends, storage, notFound, filter, pagination } = this._dependencies;

    apiFriends
      .getFriends()
      .then(res => {
        storage.setPropertyValue('friends', JSON.stringify(res.data));
        if (res.data.length !== 0 ) {
          this.renderFriends(res.data);
          filter.setListeners();
          pagination.setListeners();
        } else {
          this._addPages(notFound.createNoFriendFound());
        }
      });
  }

  renderFriends(arrayFriends) {
      const { pagination, notFound } = this._dependencies;
      const numberFriendsOnThePage = this.data.friendsOnThePage;

      if(arrayFriends.length !== 0) {
        for (let i = 0; i < arrayFriends.length; i = i + numberFriendsOnThePage) {
          const endNumber = i + numberFriendsOnThePage;
          const numberPage = this._getPageNumber(i, numberFriendsOnThePage);
          const arrayFriendOnPage = arrayFriends.slice(i, endNumber);
          this._addPages(this._createPage(numberPage));
          const page = document.querySelector(`.friends__page-${numberPage}`);
          this._addFriends(arrayFriendOnPage, page);
          pagination.addPageNumber(numberPage);
        }
        pagination.activatFirstPageNumber();
        this._visibleFirstPage();
      } else {
        this._addPages(notFound.createNoFriendFound());
      }
    }

  _visibleFirstPage() {
    const firsPage = this.elements.friendsList.firstElementChild;

    firsPage.classList.remove('friends__page_hidden');
  }

  _getPageNumber(number, numberOfFriendsOnThePage) {
    return Math.ceil((number +1) / numberOfFriendsOnThePage)
  }

  _createPage(number){
    return `<div
              class="friends__page friends__page-${number} friends__page_hidden"></div>`;
  }

  _addFriends(friendsArray, page) {
    friendsArray.forEach(friendDate => {
        this._addFriend(friendDate, page);
      });
  }

  _addFriend(friendDate, page) {
    const { friend } = this._dependencies;

    page.insertAdjacentHTML("beforeend", friend.createFriend(friendDate));
  }

  _addPages(page){
    this.elements.friendsList.insertAdjacentHTML('beforeend', page);
  }

  clearList() {
    this.elements.friendsList.textContent = '';
  }

  hidden() {
    this.block.classList.add(this.modifiers.blockHidden);
  }

  visible() {
    this.block.classList.remove(this.modifiers.blockHidden);
  }

  visiblePage(numberPage) {
    const page = document.querySelector(`.friends__${numberPage}`);

    page.classList.remove(this.modifiers.pageHidden);
  }

  hiddenPage(numberPage) {
    const page = document.querySelector(`.friends__${numberPage}`);

    page.classList.add(this.modifiers.pageHidden);
  }

}
