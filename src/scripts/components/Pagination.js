import BaseComponent from './BaseComponent';

export default class Pagination extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  _createPageNubmber(number) {
    return `<li class="friends__page-number friends__page-number-${number}">${number}</li>`;
  }

  addPageNumber(number) {
    this.block.insertAdjacentHTML("beforeend", this._createPageNubmber(number));
  }

  setListeners() {
    console.log(this.block);
    this._setHandlers([
      { element: this.block, event: 'click', handler: this._openAnotherPage.bind(this) },
    ]);
  }

  _openAnotherPage(event) {
    if (event.target.classList.contains(this.elements.pageNumber)){
      const { friends } = this._dependencies;
      const openingPageNumber = event.target.textContent;
      const closingPageNumber = event.target.parentElement.querySelector(this.elements.numberActive);

      friends.visiblePage(openingPageNumber);
      friends.hiddenPage(closingPageNumber.textContent);
      this.activatePageNumber(openingPageNumber);
      this.deactivatePageNumber(closingPageNumber.textContent);
    }
  }

  activatePageNumber(numberPage) {
    const number = document.querySelector(`.friends__page-number-${numberPage}`);

    number.classList.add(this.modifiers.numberActive);
  }

  deactivatePageNumber(numberPage) {
    const number = document.querySelector(`.friends__page-number-${numberPage}`);

    number.classList.remove(this.modifiers.numberActive);
  }

  clearPagination() {
    this.block.textContent = '';
  }

  activatFirstPageNumber() {
    const firsPageNumber = this.block.firstElementChild;

    firsPageNumber.classList.add(this.modifiers.numberActive);
  }

}

