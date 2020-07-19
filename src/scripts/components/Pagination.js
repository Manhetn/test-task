import BaseComponent from './BaseComponent';

export default class Pagination extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  _createPageNubmber(number) {
    return `<li class="friends__number-iteam">
              <button
                class="friends__button button friends__page-number friends__page-number-${number}"
                type="button"
                name="page-${number}"
              >
                ${number}
              </button>
            </li>`

    // `<li class="friends__page-number friends__page-number-${number}">${number}</li>`;
  }

  addPageNumber(number) {
    this.block.insertAdjacentHTML("beforeend", this._createPageNubmber(number));
  }

  setListeners() {
    this._setHandlers([
      { element: this.block, event: 'click', handler: this._openAnotherPage.bind(this) },
    ]);
  }

  removeListeners() {
    this._removeHandlers([
      { element: this.block, event: 'click', handler: this._openAnotherPage.bind(this) },
    ]);
  }

  _openAnotherPage(event) {
    if (event.target.classList.contains(this.elements.pageNumber)){
      const { friends } = this._dependencies;
      const openingPageNumber = event.target;
      const closingPageNumber = event.currentTarget.querySelector(this.elements.numberActive);

      friends.visiblePage(openingPageNumber.name);
      friends.hiddenPage(closingPageNumber.name);
      this.activatePageNumber(openingPageNumber);
      this.deactivatePageNumber(closingPageNumber);
    }
  }

  activatePageNumber(numberPage) {
    numberPage.setAttribute('disabled', 'disabled');
    numberPage.classList.add(this.modifiers.numberActive);
  }

  deactivatePageNumber(numberPage) {
    numberPage.removeAttribute('disabled', 'disabled');
    numberPage.classList.remove(this.modifiers.numberActive);
  }

  clearPagination() {
    this.block.textContent = '';
  }

  activatFirstPageNumber() {
    const firsPageNumber = this.block.firstElementChild.firstElementChild;

    firsPageNumber.setAttribute('disabled', 'disabled');
    firsPageNumber.classList.add(this.modifiers.numberActive);
  }

}

