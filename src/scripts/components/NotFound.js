export default class NotFound {
  constructor(messages) {
    this.messages = messages;
  }

  createNoFriendFound() {
    return `<div class="not-found">
              <p class="not-found__text">${this.messages.notFound.noFriendFound}</p>
            </div>`;
  }

  createNoArticlesFound() {
    return `<div class="not-found">
              <p class="not-found__text">${this.text.noArticlesFound}</p>
            </div>`;
  }

}
