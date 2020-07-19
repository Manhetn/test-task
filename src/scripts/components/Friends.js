import BaseComponent from './BaseComponent';

export default class Friends extends BaseComponent {
  constructor(parameters){
    super(parameters);
    this.data = parameters.data;
  }

  _getFriends() {
    const { apiFriends, storage, pagination } = this._dependencies;

    apiFriends
      .getFriends()
      .then(res => {
        storage.setPropertyValue('friends', JSON.stringify(res.data));
        this.renderFriends(res.data);

      });
  }

  renderFriends(arrayFriends) {

    const { pagination } = this._dependencies;

    const numberFriendsOnThePage = this.data.friendsOnThePage;

    for (let i = 0; i <= arrayFriends.length; i = i + numberFriendsOnThePage) {

      let endNumber = i + +numberFriendsOnThePage;
      const numberPage = this._getPageNumber(i, numberFriendsOnThePage);
      const arrayFriendOnPage = arrayFriends.slice(i, endNumber)

      this._addPages(this._createPage(numberPage));

      const page = document.querySelector(`.friends__page-${numberPage}`);

      this._addFriends(arrayFriendOnPage, page)
      pagination.addPageNumber(numberPage);

    }
    pagination.activatFirstPageNumber();
    pagination.setListeners();
    this._visibleFirstPage();
  }

  _visibleFirstPage() {
    const firsPage = this.elements.friendsList.firstElementChild;

    firsPage.classList.remove('friends__page_hidden');
  }

  // получаем номер страницы
  _getPageNumber(number, numberOfFriendsOnThePage) {
    return Math.ceil((+number + 1) / numberOfFriendsOnThePage);
  }

  // создаем страницу для друзей
  _createPage(number){
    return `<div class="friends__page friends__page-${number} friends__page_hidden"></div>`;
  }

  // перебераем массив с друзьями для добавления
  _addFriends(friendsArray, page) {
    friendsArray.forEach(friendDate => {
        this._addFriend(friendDate, page);
      });
  }

  // добавляем друга
  _addFriend(friendDate, page) {
    const { friend } = this._dependencies;

    page.insertAdjacentHTML("beforeend", friend.createFriend(friendDate));
  }

  // отоброжаем страницы в friend list
  _addPages(page){
    this.elements.friendsList.insertAdjacentHTML('beforeend', page);
  }

  // очищаем friend-list
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
    // console.log(numberPage)
    const page = document.querySelector(`.friends__${numberPage}`);
    // console.log(page)
    page.classList.remove(this.modifiers.pageHidden);
  }

  hiddenPage(numberPage) {
    // console.log(numberPage)
    const page = document.querySelector(`.friends__${numberPage}`);

    page.classList.add(this.modifiers.pageHidden);
  }


}
